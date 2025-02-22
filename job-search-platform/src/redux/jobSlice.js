import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [
    { id: 1, title: 'Frontend Developer', company: 'Google', location: 'California' },
    { id: 2, title: 'Backend Developer', company: 'Amazon', location: 'Seattle' },
    { id: 3, title: 'UX/UI Designer', company: 'Facebook', location: 'New York' },
    { id: 4, title: 'React Developer', company: 'Netflix', location: 'Los Angeles' },
    { id: 5, title: 'Full Stack Developer', company: 'Microsoft', location: 'Redmond' },
  ],
  searchQuery: '',
};

const jobSlice = createSlice({
  name: 'jobSearch',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = jobSlice.actions;
export default jobSlice.reducer;
