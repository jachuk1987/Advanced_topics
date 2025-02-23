import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './features/jobsSlice';
import userReducer from './features/userSlice';
import notificationReducer from './features/notificationSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    notifications: notificationReducer,
  },
});

export default store;