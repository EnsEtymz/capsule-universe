import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  const isLoginPage = pathname === '/login'
console.log('Middleware is running...')
  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',                // Anasayfa
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/login',           // Login koruması için (isteğe bağlı)
  ],
}
