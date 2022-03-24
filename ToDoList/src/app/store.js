import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/toDoSlice';
import filterReducer from '../features/filterSlice';

export default configureStore({
  reducer: {
    todos: toDoReducer,
    filters: filterReducer,
  },
});
