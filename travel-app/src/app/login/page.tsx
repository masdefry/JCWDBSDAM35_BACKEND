'use client';
import { MdOutlineMail } from 'react-icons/md';
import { PiPasswordBold } from 'react-icons/pi';
import Link from 'next/link';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await signIn('credentials', {
        email: values?.email,
        password: values?.password,
      });
    },
  });

  return (
    <div>
      {/* Section: Header */}
      <div className='bg-white shadow-xl flex items-center'>
        <Link
          href='/login'
          className='flex-1 '
        >
          <h1 className='font-black text-center py-3'>Login</h1>
        </Link>
        <Link
          href='/register'
          className='flex-1 '
        >
          <h1 className='font-black text-center border-b-3 border-red-800 py-3'>
            Register
          </h1>
        </Link>
      </div>

      {/* Section: Form Login */}
      <div className='px-3 py-10'>
        <form
          className='w-full flex flex-col gap-5'
          onSubmit={formik?.handleSubmit}
        >
          <fieldset className='flex items-center gap-2 border-b-1 border-gray-300 w-full'>
            <MdOutlineMail className='text-xl text-red-800' />
            <input
              name='email'
              onChange={formik?.handleChange}
              value={formik?.values?.email}
              type='text'
              placeholder='Enter your registered email'
              className='input border-none focus:outline-none focus:ring-0 text-black bg-transparent'
            />
          </fieldset>
          <p className='text-xs text-red-500'>Error message here</p>

          <fieldset className='flex items-center gap-2 border-b-1 border-gray-300 w-full'>
            <PiPasswordBold className='text-xl text-red-800' />
            <input
              name='password'
              onChange={formik?.handleChange}
              value={formik?.values?.password}
              type='password'
              placeholder='Enter your password'
              className='input border-none focus:outline-none focus:ring-0 text-black bg-transparent'
            />
          </fieldset>
          <p className='text-xs text-red-500'>Error message here</p>
          <button className='btn rounded-xl bg-white border border-red-800 text-red-800 w-full mt-3 hover:bg-red-800 hover:text-white'>
            Login Account
          </button>
        </form>
      </div>
    </div>
  );
}
