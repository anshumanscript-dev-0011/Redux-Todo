import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";
import { loadState } from "../loader.js";

const preloadedState = loadState();
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state.todos.todos));
});

export { store };
