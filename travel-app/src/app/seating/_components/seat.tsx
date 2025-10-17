type SeatProps = {
  number: number | string;
  price?: string;
  promo?: boolean;
  available?: boolean;
};

export const Seat = ({ number, price, promo, available = true }: SeatProps) => {
  const baseClass =
    'w-16 h-20 rounded-md border flex flex-col items-center justify-center m-1 text-xs';
  const colorClass = available
    ? 'bg-white text-black'
    : 'bg-gray-400 text-white';

  return (
    <div className={`${baseClass} ${colorClass}`}>
      {promo && (
        <div className='bg-red-500 text-white text-[10px] px-1 rounded-full mb-1'>
          Promo
        </div>
      )}
      <div className='font-bold text-base'>{number}</div>
      {price && <div className='bg-yellow-300 rounded px-1 mt-1'>{price}</div>}
    </div>
  );
};
