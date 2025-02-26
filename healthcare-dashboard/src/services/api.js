import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://api.example.com";

const api = axios.create({
  baseURL: API_URL,
});

// Add Authorization Token to Requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
