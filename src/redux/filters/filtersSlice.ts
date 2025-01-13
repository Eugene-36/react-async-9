import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'changeFilter',
  initialState: {
    status: '',
  },
  reducers: {
    selectNameFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { selectNameFilter } = slice.actions;
export default slice.reducer;
