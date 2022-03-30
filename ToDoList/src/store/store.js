import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../slicers/toDoSlice';
import filterReducer from '../slicers/filterSlice';

export default configureStore({
  reducer: {
    todos: toDoReducer,
    filters: filterReducer,
  },
});
