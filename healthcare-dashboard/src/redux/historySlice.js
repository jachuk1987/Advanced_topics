import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    setHistory: (state, action) => action.payload,
    addHistoryEntry: (state, action) => [...state, action.payload],
  },
});

export const { setHistory, addHistoryEntry } = historySlice.actions;
export default historySlice.reducer;
