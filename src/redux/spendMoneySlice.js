import { createSlice } from '@reduxjs/toolkit';

export const spendMoneySlice = createSlice({
  name: 'spendMoney',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      if (state.items.some((item) => item.name === action.payload.name)) {
        const index = state.items.findIndex((item) => item.name === action.payload.name);
        state.items[index].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { add } = spendMoneySlice.actions;
export default spendMoneySlice.reducer;
