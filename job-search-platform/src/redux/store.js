import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';
import profileReducer from './profileSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
  reducer: {
    jobSearch: jobReducer,
    userProfile: profileReducer,
    notifications: notificationReducer,
  },
});

export default store;