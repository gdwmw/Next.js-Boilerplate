import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(request: NextRequestWithAuth) {
  if (request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.role !== "admin") {
    return NextResponse.rewrite(new URL("/denied", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/user/history/")) {
    const path = request.nextUrl.pathname.split("/").filter(Boolean);
    if (path[2] !== request.nextauth.token?.username) {
      return NextResponse.rewrite(new URL("/not-found", request.url));
    }
  }
});

export const config = { matcher: ["/admin-example/:path*", "/user-example/:path*", "/admin/:path*", "/user/:path*"] };
