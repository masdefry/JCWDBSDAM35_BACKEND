import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(function middleware(req) {
  const { pathname } = req.nextUrl;
  const role = req.nextauth.token?.role;

  // Proteksi halaman `/dashboard` agar bisa diakses
  // oleh user dengan role `ADMIN` saja

  if (pathname.startsWith('/dashboard') && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }
});

// 💡 matcher berfungsi untuk menentukan eksekusi middleware sesuai dengan halaman yg diakses
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'], // 💡Proteksi semua halaman `/dashboard`
};
