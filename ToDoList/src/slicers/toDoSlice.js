import { createSlice } from '@reduxjs/toolkit';
import 'regenerator-runtime/runtime';
import { selectLastItemId } from '../selectors/toDoSelectors';

const initialState = {
  toDoList: [],
  isLoading: false,
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveToDo: (state, action) => {
      const lastItemId = selectLastItemId(state);
      state.toDoList.push({
        ...action.payload,
        id: lastItemId + 1,
      });
    },
    toggleCheck: (state, action) => {
      const toggledItem = state.toDoList[action.payload];
      toggledItem.done = !toggledItem.done;
    },
    todoDeleted(state, action) {
      state.toDoList = state.toDoList.filter(
        item => item.id !== action.payload,
      );
    },
    setStatus: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { saveToDo, toggleCheck, todoDeleted, setStatus } =
  toDoSlice.actions;

export const AddToDo = text => async dispatch => {
  dispatch(setStatus(true));
  const response = await new Promise(resolve => {
    setTimeout(() => resolve(true), 2000);
  });
  if (response) {
    dispatch(setStatus(false));
    dispatch(
      saveToDo({
        item: text,
        done: false,
        id: 0,
      }),
    );
  }
};

export default toDoSlice.reducer;
