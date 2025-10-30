'use client';
import HeaderPageTitle from '@/components/Dashboard/HeaderPage';
import FormCreateVehicle from '@/features/dashboard/vehicle-types/components/FormCreateVehicle';

export default function Page() {
  return (
    <div>
      <HeaderPageTitle title='Create New Vehicle Type' />
      <div className='bg-white p-10 rounded-md shadow-sm border border-gray-100 my-5'>
        <h2 className='text-xl font-bold text-gray-500 mb-5'>
          Form Create Vehicle Type
        </h2>
        <FormCreateVehicle />
      </div>
    </div>
  );
}
