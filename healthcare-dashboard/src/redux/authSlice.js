import { createSlice } from "@reduxjs/toolkit";

// Function to safely retrieve user data from localStorage
const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem("user");

    // Ensure it's not "undefined" or "null" as a string
    if (!storedUser || storedUser === "undefined" || storedUser === "null") {
      return null;
    }

    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

const initialState = {
  user: getStoredUser(),
  isAuthenticated: Boolean(getStoredUser()),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Store user in localStorage
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // Remove user from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
