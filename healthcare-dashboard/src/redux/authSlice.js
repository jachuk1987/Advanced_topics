import { createSlice } from "@reduxjs/toolkit";

// Function to safely retrieve user data from localStorage
const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem("user");

    // Ensure it's not null, undefined, or invalid JSON
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
  isAuthenticated: !!getStoredUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Store valid JSON
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // ✅ Clear storage on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
