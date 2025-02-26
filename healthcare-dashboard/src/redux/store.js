import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from "./appointmentsSlice";
import historyReducer from "./historySlice";
import prescriptionsReducer from "./prescriptionSlice";

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    history: historyReducer,
    prescriptions: prescriptionsReducer,
  },
});

export default store;
