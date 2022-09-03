import { createSlice } from '@reduxjs/toolkit';

export const spendMoneySlice = createSlice({
  name: 'spendMoney',
  initialState: {
    items: [],
    wallet: 1000000000,
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
      const index = state.items.findIndex((item) => item.name === action.payload.name);
      state.items[index].total = state.items[index].price * state.items[index].quantity;
    },

    remove: (state, action) => {
      if (state.items.some((item) => item.name === action.payload)) {
        const index = state.items.findIndex((item) => item.name === action.payload);
        if (state.items[index].quantity === 1) {
          state.items[index].quantity -= 1;
          state.items[index].total = state.items[index].price * state.items[index].quantity;
          state.items = state.items.filter((item) => item.name !== action.payload);
        } else {
          state.items[index].quantity -= 1;
          state.items[index].total = state.items[index].price * state.items[index].quantity;
        }
      }
    },

    update: (state, action) => {
      if (state.items.some((item) => item.name === action.payload.name)) {
        if (action.payload.quantity === 0) {
          state.items = state.items.filter((item) => item.name !== action.payload.name);
        } else {
          const index = state.items.findIndex((item) => item.name === action.payload.name);
          state.items[index].quantity = action.payload.quantity;
          state.items[index].total = state.items[index].price * state.items[index].quantity;
        }
      } else {
        state.items.push(action.payload);
        const index = state.items.findIndex((item) => item.name === action.payload.name);
        state.items[index].total = state.items[index].price * state.items[index].quantity;
      }
    },

    updateTotal: (state) => {
      state.total = state.items.reduce((a, b) => a + b.total, 0);
    },

    updateWallet: (state, action) => {
      state.wallet -= state.total;
    },
  },
});

export const {
  add, remove, update, updateTotal, updateWallet,
} = spendMoneySlice.actions;
export default spendMoneySlice.reducer;
