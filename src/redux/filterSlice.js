import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
