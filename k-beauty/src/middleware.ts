import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('token')?.value
  const requestedPath = request.nextUrl.pathname

  if (currentUser && request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/', request.url))
  }

  if (!currentUser && request.nextUrl.pathname.startsWith('/details')) {
    return Response.redirect(new URL(`/login?redirect=${requestedPath}`, request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/', "/login", "/details/:path*"],
}