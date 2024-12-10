import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((item) => item.id === id);
      if (todo) {
        todo.text = text; // Update the text of the matched todo
      }
    },
  },
});

// Export actions
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

// Export reducer as default
export default todoSlice.reducer;
