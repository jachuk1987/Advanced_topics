import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, message: 'You have a new job application!' },
  { id: 2, message: 'Your profile was updated successfully.' },
];

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
