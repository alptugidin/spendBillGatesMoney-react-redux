import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  add, remove, update, updateWallet,
} from '@/redux/spendMoneySlice';

function Card({
  name, price, img, total, wallet,
}) {
  // const len = Math.floor((wallet - total) / price);
  const [value, setValue] = useState(0);
  const [lock, setLock] = useState(false);
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

  const handleOnChange = (e) => {
    if (Number(e.target.value) || e.target.value === '0') {
      const item = {
        name,
        price,
        quantity: parseInt(e.target.value),
        total: 0,
      };

      if (Math.floor((wallet - total) / price) >= parseInt(e.target.value)) {
        dispatch(update(item));
        console.log('over');
        setValue(parseInt(e.target.value));
      } else {
        console.log('ok');
        console.log(Math.floor((wallet - total) / price));
        // const item2 = { ...item, quantity: Math.floor((wallet - total) / price) };
        // dispatch(update(item2));
        // setValue(Math.floor((wallet - total) / price));
      }
    }
  };

  return (
    <div className="bg-white rounded-lg drop-shadow-lg w-80">
      {Math.floor((wallet - total) / price)}
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
        {/* <input */}
        {/*  type="text" */}
        {/*  value={value} */}
        {/*  onChange={handleOnChange} */}
        {/*  className="w-1/3 outline-none rounded-lg pl-1 text-center text-lg font-semibold" */}
        {/* /> */}
        <select className="outline-none rounded-lg">
          {[...Array(10).keys()].map((i) => <option key={i}>{i + 1}</option>)}
        </select>
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
