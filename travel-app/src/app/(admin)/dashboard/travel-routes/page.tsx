'use client';
import HeaderPageTitle from '@/components/Dashboard/HeaderPage';
import SummaryCards from '@/components/Dashboard/SummaryCards';

export default function Page() {
  return (
    <div>
      <HeaderPageTitle
        title='Travel Routes'
        createLabel='New Route'
        createUrl='/dashboard/travel-routes/create'
      />
      <SummaryCards />

      <div className='hidden md:grid grid-cols-5 gap-3'>
        <select
          defaultValue='Origin City'
          className='select select-bordered w-full text-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500'
        >
          <option disabled={true}>Origin City</option>
        </select>
        <select
          defaultValue='Destination City'
          className='select select-bordered w-full text-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500'
        >
          <option disabled={true}>Destination City</option>
        </select>
        <select
          defaultValue='Vehicle Type'
          className='select select-bordered w-full text-gray-300 focus:outline-none focus:ring-0 focus:border-gray-500'
        >
          <option disabled={true}>Vehicle Type</option>
        </select>
      </div>

      <div className='py-10'>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead className='text-md'>
              <tr>
                <th>
                  <label>
                    <input
                      type='checkbox'
                      className='checkbox'
                    />
                  </label>
                </th>
                <th>Route Name/Code</th>
                <th>Vehicle/Type</th>
                <th>Origin (Departure)</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <input
                      type='checkbox'
                      className='checkbox'
                    />
                  </label>
                </th>
                <td>TRV-BDO-BSD-001</td>
                <td>
                  <p className='px-3 py-1 w-fit bg-red-700 rounded-md text-white'>
                    Hiace
                  </p>
                </td>
                <td>
                  Bandung
                  <br />
                  <p className='text-gray-500'>Time: 09:00:00</p>
                </td>
                <td>
                  BSD
                  <br />
                  <p className='text-gray-500'>Time: 12:05:00</p>
                </td>
                <td>Draft</td>
                <td>2025-01-01</td>
                <th>
                  <button className='btn btn-ghost btn-xs'>details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex justify-center'>
          <div className='join flex items-center'>
            <button className='join-item btn btn-outline'>Prev</button>
            <button className='join-item btn btn-outline'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
