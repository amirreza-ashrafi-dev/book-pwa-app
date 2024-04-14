import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/book")) {
    const path =
      pathname === "/book/ebook" ||
      pathname === "/book/audio" ||
      /\/book\/playlist\/\d+/gm.test(pathname);
    if (!path) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
  }
}

export const config = {
  matcher: ["/book/:path*"],
};
