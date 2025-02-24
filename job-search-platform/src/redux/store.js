import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import userReducer from './userSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    notifications: notificationReducer,
  },
});

export default store;