import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  add, remove,
} from '@/redux/spendMoneySlice';

function Card({
  name, price, img, total, wallet,
}) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    const item = {
      name,
      price,
      quantity: 1,
      total: 0,
    };
    dispatch(add(item));
    setValue(value + 1);
  };

  const decrement = () => {
    dispatch(remove(name));
    setValue(value - 1);
  };

  return (
    <div className="bg-white rounded-lg drop-shadow-lg w-80">
      <div className="p-2 h-56 w-full bg-white rounded-t-lg  flex flex-col justify-center">
        <img
          src={img}
          alt={name}
          className="max-h-52 mx-auto"
        />

      </div>
      <div>
        <p className="text-center text-xl">{name}</p>
        <p className="text-center text-xl font-semibold text-green-600">
          $
          {new Intl.NumberFormat('en-US').format(price)}
        </p>
      </div>
      <div className="flex justify-evenly gap-2 p-2 bg-gray-600 rounded-b-lg">
        <button
          onClick={decrement}
          type="button"
          className={`bg-red-500 px-3 py-1 w-1/3 text-white rounded-full transition-all hover:bg-red-600 ${value > 0 ? '' : 'pointer-events-none opacity-50'}`}
        >
          Sell
        </button>
        <div className="w-1/3 outline-none rounded-lg pl-1 text-center text-lg font-semibold bg-white">
          <p>{value}</p>
        </div>
        <button
          onClick={increment}
          type="button"
          className={`bg-green-500 px-3 py-1 w-1/3 text-white rounded-full transition-all hover:bg-green-600 ${wallet - total >= price ? '' : 'pointer-events-none opacity-50'}`}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
