import { CgMenuRight } from 'react-icons/cg';
import NavLinks from './NavLinks';
export default function Drawer() {
  return (
    <div className='drawer w-fit'>
      <input
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content'>
        <label htmlFor='my-drawer'>
          <CgMenuRight className='text-2xl text-white cursor-pointer' />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <NavLinks />
      </div>
    </div>
  );
}
