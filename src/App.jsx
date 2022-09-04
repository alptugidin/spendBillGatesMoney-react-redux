import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@/components/Card';
import { goods } from '@/goods/goods';
import Receipt from '@/components/Receipt';

function App() {
  const wallet = useSelector((state) => state.spendMoney.wallet);
  const total = useSelector((state) => state.spendMoney.total);
  const [stick, setStick] = useState(false);

  const [money, setMoney] = useState(1000000000);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 205) {
        setStick(true);
      } else {
        setStick(false);
      }
    });
  }, []);

  useEffect(() => {
    setMoney(wallet - total);
  }, [total]);

  return (
    <div className="bg-gray-300 pb-56">
      <Receipt />
      <div className={`container mx-auto ${stick ? 'mt-[145px]' : ''}`}>
        <div className="py-10 flex flex-col">
          <div className="w-20 self-center">
            <img src="/billgates.jpg" alt="billgates" className="rounded-full border-2 border-green-500" />
          </div>
          <div className={`self-center text-4xl font-semibold text-gray-600 ${stick ? 'hidden' : ''}`}>
            <p>Spend Bill Gate's Money!</p>
          </div>
          <div className={`self-center z-20 ${stick ? 'fixed top-0' : 'relative mt-10 w-[400px] text-center'}`}>
            <div className="px-8 py-2 bg-white rounded-full drop-shadow-lg z-20">
              <p className="text-5xl text-green-600 font-semibold">
                $
                {new Intl.NumberFormat('en-US').format(money)}

              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-28 gap-y-28 justify-center">
          {goods.map((item, index) => (
            <Card total={total} wallet={wallet} key={`key${index.toString()}`} name={item.name} img={item.img} price={item.price} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
