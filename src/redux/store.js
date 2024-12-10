// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice.js"

const store = configureStore({
  reducer: {
    todo: todoReducer, // Add the todo reducer
  },
});

export default store;
