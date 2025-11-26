'use client';
import HeaderPageTitle from '@/components/Dashboard/HeaderPage';
import FormCreateRoute from '@/features/dashboard/travel-route/components/FormCreateRoute';

export default function Page() {
  return (
    <div>
      <HeaderPageTitle title='Create New Route' />

      <div className='bg-white p-10 rounded-md shadow-sm border border-gray-100 my-5'>
        <h2 className='text-xl font-bold text-gray-500 mb-5'>
          Form Create Route
        </h2>
        <FormCreateRoute />
      </div>
    </div>
  );
}
