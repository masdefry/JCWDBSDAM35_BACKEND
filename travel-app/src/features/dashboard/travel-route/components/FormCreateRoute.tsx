import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import useSelectorCity from '../../vehicle-types/hooks/useSelectorCity';
import axiosInstance from '@/utils/axiosInstance';

export default function FormCreateRoute() {
  const session = useSession();
  const {cityList} = useSelectorCity();
  const formik = useFormik({
    initialValues: {
      origin: '',
      destination: '',
      distance: '',
      duration: '',
    },
    validationSchema: null,
    onSubmit: async (values) => {
      await axiosInstance.post(
        '/api/travel-route',
        {
          originId: values?.origin,
          destinationId: values?.destination,
          durationMinutes: values?.duration,
          distanceKilometers: values?.distance,
        },
        {
          headers: {
            Authrorization: `Bearer ${session?.data?.user?.accessToken}`,
          },
        }
      );
    },
  });

  return (
    <form
      onSubmit={formik?.handleSubmit}
      className='grid grid-cols-2 gap-6'
    >
      {/* Origin */}
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Origin</legend>
        <select
          className='select select-bordered w-full text-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500'
          name='origin'
          onChange={formik?.handleChange}
          value={formik?.values?.origin}
        >
          <option>Select Origin</option>
          {cityList?.map((city: any, index: number) => (
            <option
              value={city?.id}
              key={index}
            >
              {city?.city}
            </option>
          ))}
        </select>
        <p className='label text-red-500'>Error message here</p>
      </fieldset>

      {/* Destination */}
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Destination</legend>
        <select
          className='select select-bordered w-full text-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500'
          name='destination'
          onChange={formik?.handleChange}
          value={formik?.values?.destination}
        >
          <option>Select Destination</option>
          {cityList?.map((city: any, index: number) => (
            <option
              value={city?.id}
              key={index}
            >
              {city?.city}
            </option>
          ))}
        </select>
        <p className='label text-red-500'>Error message here</p>
      </fieldset>

      {/* Distance */}
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Distance</legend>
        <input
          type='text'
          className='input w-full focus:outline-none focus:ring-0 focus:border-gray-500'
          placeholder='Type here'
          name='distance'
          onChange={formik?.handleChange}
          value={formik?.values?.distance}
        />
        <p className='label text-red-500'>Error message here</p>
      </fieldset>

      {/* Estimate Time */}
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Estimate Time (In Minutes)</legend>
        <input
          type='text'
          className='input w-full focus:outline-none focus:ring-0 focus:border-gray-500'
          placeholder='Type here'
          name='duration'
          onChange={formik?.handleChange}
          value={formik?.values?.duration}
        />
        <p className='label text-red-500'>Error message here</p>
      </fieldset>

      {/* Submit Button */}
      <div className='col-span-full flex justify-end mt-5'>
        <button
          type='submit'
          className='btn bg-red-700 text-white px-8 rounded-full hover:bg-red-800 transition'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
