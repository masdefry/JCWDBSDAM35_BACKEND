import Drawer from './Drawer';

export default function Navbar() {
  return (
    <div className='p-3 bg-red-800 flex justify-between items-center'>
      <h1 className='text-xl text-white'>
        daily<span className='font-bold'>trans</span>
      </h1>
      <Drawer />
    </div>
  );
}
