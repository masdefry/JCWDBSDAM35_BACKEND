import HeaderPageTitle from '@/components/Dashboard/HeaderPage';

export default function Page() {
  return (
    <div>
      <HeaderPageTitle title='Create New Route' />

      <div className='bg-white p-10 rounded-md shadow-sm border border-gray-100 my-5'>
        <h2 className='text-xl font-bold text-gray-500 mb-5'>
          Form Create Route
        </h2>

        <form className='grid grid-cols-2 gap-6'>
          {/* Origin */}
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Origin</legend>
            <select
              defaultValue='Select Origin'
              className='select select-bordered w-full text-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500'
            >
              <option disabled={true}>Select Origin</option>
            </select>
            <p className='label text-red-500'>Error message here</p>
          </fieldset>

          {/* Destination */}
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Destination</legend>
            <select
              defaultValue='Select Destination'
              className='select select-bordered w-full text-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500'
            >
              <option disabled={true}>Select Destination</option>
            </select>
            <p className='label text-red-500'>Error message here</p>
          </fieldset>

          {/* Name */}
          <fieldset className='fieldset col-span-2'>
            <legend className='fieldset-legend'>What is your name?</legend>
            <input
              type='text'
              className='input w-full focus:outline-none focus:ring-0 focus:border-gray-500'
              placeholder='Type here'
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
      </div>
    </div>
  );
}
