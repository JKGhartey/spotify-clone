import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  //   Allow the request if the following is true...
  // 1. Its a request for the next-auth session & provider fetching
  // 2. The token exists

  if (pathname.startsWith("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect them to login if they dont have token AND are requesting a protected route.
  if (!token && pathname !== "/login") {
    // const url = req.nextUrl.clone();
    // // url.pathname = "/dest";
    // return NextResponse.rewrite("https://localhost:3000/login");
  }
}
