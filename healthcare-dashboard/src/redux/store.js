import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from "./slices/appointmentsSlice";
import historyReducer from "./slices/historySlice";
import prescriptionsReducer from "./slices/prescriptionsSlice";

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    history: historyReducer,
    prescriptions: prescriptionsReducer,
  },
});

export default store;
