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
        state.items[index].total = state.items[index].price * state.items[index].quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    remove: (state, action) => {
      if (state.items.some((item) => item.name === action.payload.name)) {
        console.log('sds');
      }
    },

    updateTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { add, updateTotal } = spendMoneySlice.actions;
export default spendMoneySlice.reducer;
