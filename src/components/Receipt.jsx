import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotal } from '@/redux/spendMoneySlice';

function Receipt() {
  const items = useSelector((state) => state.spendMoney.items);
  const total = useSelector((state) => state.spendMoney.total);
  const dispatch = useDispatch();

  function nFormatter(num) {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
    }
    return num;
  }

  useEffect(() => {
    dispatch(updateTotal(items.reduce((a, b) => a + b.total, 0)));
  }, [items]);

  return (
    <div className="w-80 min-h-52 bg-white fixed right-3 top-0 z-20 rounded-b-lg drop-shadow-lg p-1">
      <p className="text-2xl text-center text-gray-600">
        Your receipt
      </p>
      <div className="flex flex-col">
        {items.map((item) => (
          <div
            className="flex"
            key={item.name}
          >
            <div className="basis-3/6">
              <p>{item.name}</p>
            </div>
            <div className="basis-1/6">
              <p>
                x
                {item.quantity}
              </p>
            </div>
            <div className="basis-2/6 pr-1">
              <p className="text-right text-green-600 font-semibold">
                $
                {nFormatter(item.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
        <hr className="h-0.5 my-1 bg-gray-800" />
      </div>
      <div className="flex pr-1">
        <p className="basis-1/2 text-right">
          Total:
          {' '}
        </p>
        <p className="text-right basis-1/2 text-green-700 font-semibold">
          $
          {new Intl.NumberFormat('en-US').format(items.reduce((a, b) => a + b.total, 0))}
        </p>
      </div>
    </div>
  );
}
export default Receipt;
