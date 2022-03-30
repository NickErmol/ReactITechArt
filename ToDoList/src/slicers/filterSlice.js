import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const initialState = {
  status: StatusFilters.All,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeFilterStatus } = filterSlice.actions;

export default filterSlice.reducer;
