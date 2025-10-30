import useFormCreateVehicle from '../hooks/useFormCreateVehicle';

export default function FormCreateVehicle() {
  const { formik } = useFormCreateVehicle();

  return (
    <form
      onSubmit={formik?.handleSubmit}
      className='grid grid-cols-2 gap-6'
    >
      {/* Name */}
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Vehcile Name</legend>
        <input
          type='text'
          className='input w-full focus:outline-none focus:ring-0 focus:border-gray-500'
          placeholder='Type here'
          name='name'
          onChange={formik?.handleChange}
          value={formik?.values?.name}
        />
        <p className='label text-red-500'>{formik?.errors?.name}</p>
      </fieldset>

      {/* Total Seat */}
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Total Seat</legend>
        <input
          type='text'
          className='input w-full focus:outline-none focus:ring-0 focus:border-gray-500'
          placeholder='Type here'
          name='totalSeat'
          onChange={formik?.handleChange}
          value={formik?.values?.totalSeat}
        />
        <p className='label text-red-500'>{formik?.errors?.totalSeat}</p>
      </fieldset>

      {/* Images */}
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Select Max. 3 Images</legend>
        <input
          type='file'
          className='file-input focus:outline-none focus:ring-0 focus:border-gray-500'
          id='images'
          name='images'
          onChange={(e) => {
            //e.currentTarget.files merupakan struktur object. Harus disimpan kedalam array terlebih dahulu
            // sama dengan set ke initialValues bernama images dengan isi e.currentTarget.files
            console.log(e?.currentTarget?.files);
            if (e?.currentTarget?.files) {
              formik.setFieldValue(
                'images',
                Array.from(e.currentTarget.files) // [{file}, {file}]
              );
            }
          }}
          multiple
        />
        {formik?.touched?.images && formik?.errors?.images && (
          <p className='label text-red-500'>
            {Array.isArray(formik.errors.images)
              ? formik.errors.images.join(', ')
              : formik.errors.images}
          </p>
        )}
      </fieldset>

      <fieldset className='fieldset col-span-2'>
        <legend className='fieldset-legend'>Description</legend>
        <textarea
          className='textarea w-full h-24 focus:outline-none focus:ring-0 focus:border-gray-500'
          placeholder='Description'
          name='description'
          onChange={formik?.handleChange}
          value={formik?.values?.description}
        ></textarea>
        <p className='label text-red-500'>{formik?.errors?.description}</p>
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
