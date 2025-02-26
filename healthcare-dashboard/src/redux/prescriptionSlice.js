import { createSlice } from "@reduxjs/toolkit";

const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState: [],
  reducers: {
    setPrescriptions: (state, action) => action.payload,
    addPrescription: (state, action) => [...state, action.payload],
  },
});

export const { setPrescriptions, addPrescription } = prescriptionsSlice.actions;
export default prescriptionsSlice.reducer;
