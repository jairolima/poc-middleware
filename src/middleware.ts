import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('TokenJwt')?.value;
  if (!userToken && request.url.includes('/dashboard')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}
export const config = {
  matcher: ['/dashboard/:path*'],
}