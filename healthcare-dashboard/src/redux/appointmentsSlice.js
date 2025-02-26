import { createSlice } from "@reduxjs/toolkit";

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: [],
  reducers: {
    setAppointments: (state, action) => action.payload,
    addAppointment: (state, action) => [...state, action.payload],
    removeAppointment: (state, action) =>
      state.filter((appt) => appt.id !== action.payload),
  },
});

export const { setAppointments, addAppointment, removeAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
