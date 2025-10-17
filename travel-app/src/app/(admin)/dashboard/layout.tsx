'use client';
import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';
import Header from '@/components/Dashboard/Header/Header';
import { useState } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div
        className={`hidden lg:flex flex-col bg-gray-300 transition-all duration-300
          ${isExpand ? 'w-16' : 'w-64'}
        `}
      >
        <Sidebar isExpand={isExpand} />
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col bg-gray-100 overflow-y-auto'>
        <Header
          isExpand={isExpand}
          setIsExpand={setIsExpand}
        />
        <div className='px-5 py-5'>{children}</div>
      </div>
    </div>
  );
}
