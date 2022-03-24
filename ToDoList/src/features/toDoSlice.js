/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { StatusFilters } from './filterSlice';
import 'regenerator-runtime/runtime';

const initialState = {
  toDoList: [],
  status: 'idle',
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveToDo: (state, action) => {
      state.toDoList.push(action.payload);
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
      state.status = action.payload;
    },
  },
});

export const { saveToDo, toggleCheck, todoDeleted, setStatus } =
  toDoSlice.actions;

export const selectToDoList = state => state.todos.toDoList;
export const selectLastToDoId = state => {
  if (!state.todos.toDoList.length) {
    return -1;
  }
  return state.todos.toDoList[state.todos.toDoList.length - 1].id;
};

export const selectFilteredTodos = createSelector(
  selectToDoList,
  state => state.filters,
  (todos, filters) => {
    const { status } = filters;
    const showAllCompletions = status === StatusFilters.All;
    if (showAllCompletions) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    return todos.filter(todo => {
      const statusMatches = todo.done === completedStatus;
      return statusMatches;
    });
  },
);

export const AddToDo = (text, lastId) => async dispatch => {
  dispatch(setStatus('loading'));
  const response = await new Promise(resolve => {
    setTimeout(() => {
      const success = true;
      resolve(success);
    }, 2000);
  });
  if (response) {
    dispatch(setStatus('idle'));
    dispatch(
      saveToDo({
        item: text,
        done: false,
        id: lastId + 1,
      }),
    );
  }
};

export default toDoSlice.reducer;
