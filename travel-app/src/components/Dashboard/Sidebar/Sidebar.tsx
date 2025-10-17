'use client';
import { HiOutlineHome } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';
import React from 'react';

const listMenu = [
  { href: '/dashboard', name: 'Home', icon: HiOutlineHome },
  {
    href: '/dashboard/travel-routes',
    name: 'Travel Routes',
    icon: HiOutlineLocationMarker,
  },
];

function Sidebar({ isExpand }: { isExpand: boolean }) {
  const pathName = usePathname();
  const iconSize = isExpand ? 'text-2xl' : 'text-xl';

  return (
    <div className='px-3 py-2 flex flex-col justify-between h-full transition-all duration-300'>
      {/* Logo */}
      <div>
        <h1 className='text-3xl text-black px-2 py-5 transition-all duration-300'>
          {isExpand ? (
            <>
              d<span className='font-bold'>t</span>
            </>
          ) : (
            <>
              daily<span className='font-bold'>trans</span>
            </>
          )}
        </h1>

        {/* Menu */}
        <div className='flex flex-col gap-2 overflow-y-auto h-72 transition-all duration-300'>
          {listMenu.map((menu, index) => {
            const Icon = menu.icon;
            const isActive = pathName === menu.href;
            return (
              <Link
                key={index}
                href={menu.href}
                className={`flex items-center gap-5 p-2 rounded-md transition-all duration-300 text-sm
                  ${
                    isActive
                      ? 'bg-red-700 text-white'
                      : 'text-black hover:bg-gray-200'
                  }
                `}
              >
                <Icon className={`${iconSize} transition-all duration-300`} />
                {!isExpand && <h1 className='text-md'>{menu.name}</h1>}
              </Link>
            );
          })}
        </div>
      </div>

      {/* User Info */}
      <div className='py-5 mt-5 flex items-center gap-3 transition-all duration-300'>
        <div className='bg-gray-500 w-12 h-12 rounded-full flex-shrink-0'></div>
        {!isExpand && (
          <div>
            <h2 className='font-bold'>Defryan</h2>
            <h2 className='text-gray-500 text-sm'>Customer Support</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
