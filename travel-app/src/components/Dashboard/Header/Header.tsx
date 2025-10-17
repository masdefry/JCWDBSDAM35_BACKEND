'use client';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';

export default function Header({
  isExpand,
  setIsExpand,
}: {
  isExpand: boolean
  setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='py-5 px-5 flex justify-between'>
      <TiThMenu
        onClick={() => setIsExpand(!isExpand)}
        className='w-10 h-10 p-2.5 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all'
      />
      <div className='flex items-center gap-5'>
        <h1>Hello, xxx</h1>
        <MdOutlineNotificationsNone className='text-2xl' />
        <FaRegUserCircle className='text-2xl' />
      </div>
    </div>
  );
}
