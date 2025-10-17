import { GrLocation } from 'react-icons/gr';
import { GoDotFill } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';

export default function Page() {
  return (
    <div className='p-5'>
      <form>
        <div className='flex items-center gap-1'>
          <GoCheckCircleFill className='text-green-600' />
          <h1 className='font-black text-lg text-green-600'>Pesanan Dibuat</h1>
        </div>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-legend'>Bayar Sebelum:</legend>
          <p className='font-black text-lg text-red-800'>xxx</p>
        </fieldset>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-legend'>Kode Booking:</legend>
          <p className='font-black text-lg text-red-800'>xxx</p>
        </fieldset>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-legend'>Kode Pembayaran:</legend>
          <p className='font-black text-lg text-red-800'>xxx</p>
        </fieldset>
        <div className='mt-3 p-3 rounded-xl bg-white'>
          <h1 className='font-black text-black'>Detail Pembayaran:</h1>
          <div className='mt-3 flex items-center justify-between'>
            <h2 className='text-gray-500 text-sm'>Harga Tiket:</h2>
            <h2 className='font-bold text-right'>Rp. 450.000</h2>
          </div>
          <div className='mt-3 flex items-center justify-between'>
            <h2 className='text-gray-500 text-sm'>Potongan Tiket:</h2>
            <h2 className='font-bold text-righ text-green-600'>Rp. 45.000</h2>
          </div>
          <hr className='text-gray-400 my-3' />
          <div className='flex justify-between mt-3'>
            <h2 className='font-black text-black'>Total Pembayaran:</h2>
            <h2 className='font-black text-red-800'>Rp. 450.000</h2>
          </div>
        </div>
        <button className='btn rounded-xl bg-white border border-red-800 text-red-800 w-full mt-3 hover:bg-red-800 hover:text-white'>
          Bayar
        </button>
      </form>
    </div>
  );
}
