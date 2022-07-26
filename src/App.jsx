import React from 'react';
import { Provider } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { store } from '@/redux/store';
import { goods } from '@/goods/goods';

function App() {
  return (
    <div>
      <Provider store={store}>
        <p className="text-6xl">hello</p>
        {
          goods.map((good) => <img key={nanoid()} src={good.img} alt="" />)
        }
      </Provider>
    </div>
  );
}

export default App;
