import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(request: NextRequestWithAuth) {
  if (request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.role !== "admin") {
    return NextResponse.rewrite(new URL("/denied", request.url));
  }
});

export const config = { matcher: ["/admin", "/user"] };
