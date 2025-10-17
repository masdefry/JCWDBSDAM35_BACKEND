'use client';
import { GrLocation } from 'react-icons/gr';
import { GoDotFill } from 'react-icons/go';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const onHandlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/reservation/payment');
  };

  return (
    <div className='p-5'>
      <form onSubmit={onHandlePayment}>
        <h1 className='font-black text-lg'>Detail Pemesanan</h1>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-legend'>Nama Pemesan:</legend>
          <input
            type='text'
            className='input w-full'
            placeholder='Masukan nama pemesan'
          />
        </fieldset>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-legend'>Email Pemesan:</legend>
          <input
            type='text'
            className='input w-full'
            placeholder='Masukan nama pemesan'
          />
          <p className='label'>
            Email diperlukan untuk mengirim e-tiket & kode bayar
          </p>
        </fieldset>
        <h1 className='font-black text-lg'>Data Penumpang</h1>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-legend'>Nama Penumpang 1:</legend>
          <input
            type='text'
            className='input w-full'
            placeholder='Masukan nama penumpang 1'
          />
        </fieldset>
        <div className='mt-3 p-3 rounded-md bg-red-800 text-white'>
          <h1 className='font-black text-white'>Detail Keberangkatan:</h1>
          <div className='mt-3'>
            <h2 className='text-red-400 text-xs'>Departure point:</h2>
            <div className='flex items-center gap-1'>
              <GrLocation className='text-sm text-red-400' />
              <h2 className='font-bold truncate w-40'>Bandung</h2>
            </div>
          </div>
          <div className='mt-3'>
            <h2 className='text-red-400 text-xs'>Arrival point:</h2>
            <div className='flex items-center gap-1'>
              <GrLocation className='text-sm text-red-400' />
              <h2 className='font-bold truncate w-40'>
                BSD, Tangerang Selatan
              </h2>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-3'>
            <h2 className='text-sm font-light text-gray-200'>
              09 Agustus 2025
            </h2>
            <GoDotFill className='text-xs text-gray-200' />
            <h2 className='text-sm font-light text-gray-200'>2 Kursi</h2>
          </div>
        </div>
        <div className='flex justify-between mt-3'>
          <h2 className='font-black text-black'>Total Pembayaran:</h2>
          <h2 className='font-black text-red-800'>Rp. 450.000</h2>
        </div>
        <button className='btn bg-white border border-red-800 text-red-800 w-full mt-3 hover:bg-red-800 hover:text-white'>
          Pembayaran
        </button>
      </form>
    </div>
  );
}
