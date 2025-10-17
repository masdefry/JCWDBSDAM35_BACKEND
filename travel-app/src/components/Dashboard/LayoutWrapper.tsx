'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardPage = pathname.startsWith('/dashboard');

  if (isDashboardPage) {
    return <>{children}</>;
  }

  return (
    <div className='max-w-md min-h-screen mx-auto bg-gray-100'>
      <Navbar />
      {children}
    </div>
  );
}
