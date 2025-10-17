import { Seat } from './_components/seat';

const BusSeating = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
      {/* Baris 1 */}
      <div className='flex gap-10'>
        <Seat
          number={1}
          price='150,000'
        />
        <div className='flex flex-col items-center justify-center'>
          <div className='rounded-full border-2 border-red-500 text-red-500 px-3 py-1 text-sm'>
            SUPIR
          </div>
        </div>
      </div>

      {/* Baris 2 */}
      <div className='flex'>
        <Seat
          number={2}
          price='135,000'
        />
        <Seat
          number={3}
          price='102,500'
          promo
        />
        <Seat
          number={4}
          price='140,000'
        />
      </div>

      {/* Baris 3 */}
      <div className='flex'>
        <Seat
          number={5}
          price='135,000'
        />
        <Seat
          number={6}
          available={false}
        />
        <Seat
          number={7}
          price='102,500'
          promo
        />
      </div>

      {/* Baris 4 */}
      <div className='flex'>
        <Seat
          number={8}
          available={false}
        />
        <Seat
          number={9}
          price='102,500'
          promo
        />
        <Seat
          number={10}
          price='102,500'
          promo
        />
      </div>

      {/* Baris 5 */}
      <div className='flex flex-wrap justify-center gap-1 mt-2'>
        {[11, 12, 13, 14].map((num) => (
          <Seat
            key={num}
            number={num}
            price='102,500'
            promo
          />
        ))}
      </div>
    </div>
  );
};

export default BusSeating;
