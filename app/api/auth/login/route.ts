import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  expectedPassword,
  expectedUsername,
  getJwtSecretKey,
  signSessionToken,
} from "@/lib/auth";

export async function POST(request: Request) {
  const key = getJwtSecretKey();
  if (!key) {
    return NextResponse.json(
      { error: "AUTH_SECRET must be set on the server (min 32 characters)." },
      { status: 503 },
    );
  }

  const expectedPw = expectedPassword();
  if (expectedPw === null) {
    return NextResponse.json(
      { error: "AUTH_PASSWORD must be set on the server." },
      { status: 503 },
    );
  }

  const expectedUser = expectedUsername();
  if (!expectedUser) {
    return NextResponse.json(
      { error: "AUTH_USERNAME must be set on the server." },
      { status: 503 },
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = (await request.json()) as { username?: string; password?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (username !== expectedUser || password !== expectedPw) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const token = await signSessionToken(username);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
