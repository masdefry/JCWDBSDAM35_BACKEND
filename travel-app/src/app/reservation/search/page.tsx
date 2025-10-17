'use client';
import { GrLocation } from 'react-icons/gr';
import { GoDotFill } from 'react-icons/go';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      {/* Section: Jumbotron */}
      <div className='relative h-[100px] w-full bg-cover bg-center bg-no-repeat bg-[url(/new-banner.png)]'>
        <div className='absolute inset-0 bg-black opacity-50 z-0' />
      </div>

      {/* Section: Header Search */}
      <div className='m-3 p-3 rounded-md bg-red-800 text-white'>
        <h1 className='font-black text-white'>Pencarian Travel</h1>
        <div className='grid grid-cols-2 my-3'>
          <div className='col-span-1 flex items-center gap-3'>
            <GrLocation className='text-2xl text-red-400' />
            <div>
              <h2 className='text-red-400 text-xs'>Departure point:</h2>
              <h2 className='font-bold truncate w-40'>Bandung</h2>
            </div>
          </div>
          <div className='col-span-1 flex items-center gap-3'>
            <GrLocation className='text-2xl text-red-400' />
            <div>
              <h2 className='text-red-400 text-xs'>Arrival point:</h2>
              <h2 className='font-bold truncate w-40'>
                BSD, Tangerang Selatan
              </h2>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <h2 className='text-sm font-light text-gray-200'>09 Agustus 2025</h2>
          <GoDotFill className='text-xs text-gray-200' />
          <h2 className='text-sm font-light text-gray-200'>2 Kursi</h2>
        </div>
        <button className='btn bg-white border-gray w-full mt-3'>
          Ubah Pencarian
        </button>
      </div>

      {/* Section: Travel List */}
      <div className='bg-white m-3 p-3 rounded-md'>
        <div className='flex justify-between'>
          <h2 className='text-xs text-black'>Tipe Kendaraan:</h2>
          <h2 className='bg-red-500 py-1 px-2 rounded-full text-white text-sm w-fit'>
            Hiace
          </h2>
        </div>
        <div className='grid grid-cols-3 my-3'>
          <div className='col-span-1'>
            <h2 className='text-black text-xs'>15:30</h2>
            <h2 className='font-bold truncate w-40'>Bandung</h2>
          </div>
          <div className='col-span-1 flex justify-center items-center'>
            <IoIosArrowRoundForward />
          </div>
          <div className='col-span-1'>
            <h2 className='text-black text-xs'>17:45</h2>
            <h2 className='font-bold'>BSD, Tangerang Selatan</h2>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-end'>
            <h2 className='text-xs text-gray-700'>Total Seat:</h2>
            <h2 className='text-xs text-gray-700 font-bold'>36</h2>
          </div>
          <div className='flex flex-col justify-end'>
            <h2 className='text-right font-black text-red-800'>
              Rp. 97.500 <span className='text-xs text-white'>/seat</span>
            </h2>
            <Link href='/reservation/detail'>
              <button className='btn bg-red-800 text-white'>
                Select Schedule
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
