import { createSlice } from '@reduxjs/toolkit';

const ipSlice = createSlice({
  name: 'ip',
  initialState: {
    data: [],
  },
  reducers: {
    setIPData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setIPData } = ipSlice.actions;
export default ipSlice.reducer;
