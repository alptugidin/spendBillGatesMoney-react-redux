import { configureStore } from '@reduxjs/toolkit';
import spendMoneyReducer from './spendMoneySlice';

export const store = configureStore({
  reducer: {
    spendMoney: spendMoneyReducer,
  },
});
