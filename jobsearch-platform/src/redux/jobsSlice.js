import { createSlice } from '@reduxjs/toolkit';

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: [],
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    removeJob: (state, action) => {
      return state.filter(job => job.id !== action.payload);
    },
  },
});

export const { addJob, removeJob } = jobsSlice.actions;
export default jobsSlice.reducer;