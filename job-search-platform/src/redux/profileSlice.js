import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

const profileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
