import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsListCheck } from 'react-icons/bs';
import { GoXCircle } from 'react-icons/go';

export default function SummaryCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-5'>
      <div className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-green-50'>
          <HiOutlineLocationMarker className='text-2xl text-green-600' />
        </div>
        <div>
          <p className='text-sm text-gray-500'>Jumlah Routes</p>
          <h2 className='text-2xl font-semibold text-gray-800'>105</h2>
        </div>
      </div>

      <div className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-blue-50'>
          <BsListCheck className='text-2xl text-blue-600' />
        </div>
        <div>
          <p className='text-sm text-gray-500'>Active Routes</p>
          <h2 className='text-2xl font-semibold text-gray-800'>90</h2>
        </div>
      </div>

      <div className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-red-50'>
          <GoXCircle className='text-2xl text-red-600' />
        </div>
        <div>
          <p className='text-sm text-gray-500'>Deactive Routes</p>
          <h2 className='text-2xl font-semibold text-gray-800'>15</h2>
        </div>
      </div>
    </div>
  );
}
