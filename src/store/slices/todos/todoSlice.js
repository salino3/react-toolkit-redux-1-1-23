import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    counter: 10,
    timer: 0
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      console.log(action)
      state.counter += action.payload;
    }
   
  }
});
export const { decrement, increment, incrementBy } = todoSlice.actions;


