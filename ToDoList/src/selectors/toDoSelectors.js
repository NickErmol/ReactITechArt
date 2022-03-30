import { createSelector } from '@reduxjs/toolkit';
import { StatusFilters } from '../slicers/filterSlice';

export const selectToDoList = state => state.todos.toDoList;
export const selectLastItemId = state => {
  if (!state.toDoList.length) {
    return -1;
  }
  return state.toDoList[state.toDoList.length - 1].id;
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
