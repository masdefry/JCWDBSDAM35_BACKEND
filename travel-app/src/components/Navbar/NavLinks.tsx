import { HiOutlineHome } from 'react-icons/hi2';
import Link from 'next/link';
export default function NavLinks() {
  return (
    <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4 bg-red-800 text-white'>
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
