import { auth } from "@/root/auth";

export default auth((req) => {
  if (!req.auth || (req.nextUrl.pathname === "/admin" && req.auth.user.role !== "admin")) {
    const newUrl = new URL(!req.auth ? "/login" : "/denied", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (!req.auth || req.nextUrl.pathname === "/user") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = { matcher: ["/admin", "/user"] };
