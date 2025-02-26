import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://api.example.com";

export const fetchAppointments = async () => {
  const response = await axios.get(`${API_URL}/appointments`);
  return response.data;
};
