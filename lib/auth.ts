import { SignJWT, jwtVerify, type JWTPayload } from "jose";

export const COOKIE_NAME = "ecc_session";

/** Minimum length for HS256 secret material. */
const MIN_SECRET_LEN = 32;

/**
 * JWT signing key — only from environment. Never commit secrets or fall back to
 * hard-coded keys (public repos and production must stay aligned).
 */
export function getJwtSecretKey(): Uint8Array | null {
  const secret = process.env.AUTH_SECRET;
  if (secret && secret.length >= MIN_SECRET_LEN) {
    return new TextEncoder().encode(secret);
  }
  return null;
}

/** Sign-in username — only from environment. */
export function expectedUsername(): string | null {
  const u = process.env.AUTH_USERNAME?.trim();
  return u ? u : null;
}

/** Sign-in password — only from environment. */
export function expectedPassword(): string | null {
  if (process.env.AUTH_PASSWORD != null && process.env.AUTH_PASSWORD !== "") {
    return process.env.AUTH_PASSWORD;
  }
  return null;
}

export async function signSessionToken(username: string): Promise<string> {
  const key = getJwtSecretKey();
  if (!key) {
    throw new Error("AUTH_SECRET is not configured");
  }
  return new SignJWT({ sub: username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(key);
}

export async function verifySessionToken(
  token: string,
): Promise<JWTPayload | null> {
  const key = getJwtSecretKey();
  if (!key) return null;
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}
