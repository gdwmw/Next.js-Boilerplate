import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(request: NextRequestWithAuth) {
  if (request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.role !== "admin") {
    return NextResponse.rewrite(new URL("/denied", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/user/")) {
    const path = request.nextUrl.pathname.split("/").filter(Boolean);
    if (path[1] !== request.nextauth.token?.username || path[2] !== "example") {
      return NextResponse.rewrite(new URL("/not-found", request.url));
    }
  }
});

export const config = { matcher: ["/admin/:path*", "/user/:path*"] };
