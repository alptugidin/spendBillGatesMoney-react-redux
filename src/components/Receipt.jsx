import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Receipt() {
  const items = useSelector((state) => state.spendMoney.items);
  const total = useSelector((state) => state.spendMoney.total);
  // const [total, setTotal] = useState(0);

  return (
    <div className="w-80 h-52 bg-white fixed right-3 top-0 z-20 rounded-b-lg drop-shadow-lg p-1">
      <p className="text-2xl text-center text-gray-600">
        Your receipt
      </p>
      <div className="flex flex-col">
        {items.map((item) => (
          <div
            className="flex"
            key={item.name}
          >
            <div className="basis-2/5">
              <p>{item.name}</p>
            </div>
            <div className="basis-1/5">
              <p>
                x
                {item.quantity}
              </p>
            </div>
            <div className="basis-2/5 pr-1">
              <p className="text-right">
                {item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
        <div className="p1 flex justify-around">
          <p>TOTAL:</p>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
