import { HiOutlineHome } from 'react-icons/hi2';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function NavLinks() {
  const session = useSession();

  return (
    <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4 bg-red-800 text-white'>
      <li className='font-bold text-xl'>Hello, {session?.data?.user?.fullName}</li>
      <li className=''>
        <HiOutlineHome />
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/'>Travel</Link>
      </li>
      <li>
        <Link
          href='/login'
          className='font-black'
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          href='/register'
          className='font-black'
        >
          Register
        </Link>
      </li>
    </ul>
  );
}
