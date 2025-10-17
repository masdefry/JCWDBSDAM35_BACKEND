'use client';
import { RiUserLocationLine } from 'react-icons/ri';
import { GrLocation } from 'react-icons/gr';
import { BsPeople } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  const onHandleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/reservation/search');
  };

  return (
    <div>
      {/* Section: Jumbotron */}
      <div className='relative h-[400px] w-full bg-cover bg-center bg-no-repeat bg-[url(/banner.jpeg)]'>
        <div className='absolute inset-0 bg-black opacity-50 z-0' />

        {/* Content & Form Search */}
        <div className='relative h-full w-full flex flex-col items-center px-10 py-5 z-10'>
          <h1 className='text-white text-2xl font-bold text-center px-10'>
            Mulai perjalanan dengan mudah dan nyaman
          </h1>

          <form
            className='w-full'
            onSubmit={onHandleSearch}
          >
            <fieldset className='flex items-center gap-2 border-b-2 border-gray-300 w-full'>
              <RiUserLocationLine className='text-xl text-white' />
              <input
                type='text'
                placeholder='Departure City'
                className='input border-none focus:outline-none focus:ring-0 text-white bg-transparent'
              />
            </fieldset>
            <fieldset className='flex items-center gap-2 border-b-2 border-gray-300 w-full'>
              <GrLocation className='text-xl text-white' />
              <input
                type='text'
                placeholder='Destination City'
                className='input border-none focus:outline-none focus:ring-0 text-white bg-transparent'
              />
            </fieldset>
            <fieldset className='flex items-center gap-2 border-b-2 border-gray-300 w-full'>
              <BsPeople className='text-xl text-white' />
              <select
                defaultValue='Pick a color'
                className='select w-full border-none focus:outline-none focus:ring-0 text-white bg-transparent'
              >
                <option>Total Passengers</option>
              </select>
            </fieldset>
            <button className='btn bg-white w-full mt-3 shadow-none'>
              Search Travel
            </button>
          </form>
        </div>
      </div>

      {/* Section: Promos */}
      <div className='p-3'>
        <h2 className='text-xl font-bold text-red-700'>Promo Terbaru</h2>
        <div className='py-3 grid grid-cols-1 gap-3'>
          <div className='bg-gray-500 w-full h-25 rounded-md'></div>
          <div className='bg-gray-500 w-full h-25 rounded-md'></div>
          <div className='bg-gray-500 w-full h-25 rounded-md'></div>
        </div>
      </div>
    </div>
  );
}
