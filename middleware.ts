import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_NAME, getJwtSecretKey, verifySessionToken } from "@/lib/auth";
import { safeInternalPath } from "@/lib/safe-internal-path";

function isPublicPath(pathname: string): boolean {
  if (pathname.startsWith("/login")) return true;
  if (pathname.startsWith("/api/auth/login")) return true;
  if (pathname.startsWith("/api/auth/logout")) return true;
  return false;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const passThrough = () => NextResponse.next();

  const secretKey = getJwtSecretKey();

  if (!secretKey && !isPublicPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("error", "config");
    return NextResponse.redirect(url);
  }

  const token = request.cookies.get(COOKIE_NAME)?.value ?? null;

  if (pathname.startsWith("/login")) {
    if (token && secretKey) {
      const payload = await verifySessionToken(token);
      if (payload?.sub) {
        const url = request.nextUrl.clone();
        const dest = safeInternalPath(url.searchParams.get("from"));
        return NextResponse.redirect(new URL(dest, request.url));
      }
    }
    return passThrough();
  }

  if (isPublicPath(pathname)) {
    return passThrough();
  }

  if (!token || !secretKey) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  const payload = await verifySessionToken(token);
  if (!payload?.sub) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    const res = NextResponse.redirect(url);
    res.cookies.set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
    return res;
  }

  return passThrough();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
