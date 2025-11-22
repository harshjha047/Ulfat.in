import axios from "axios";

const api = axios.create({
  // baseURL: `http://localhost:5000/api`,
  baseURL: `https://ulfat.onrender.com/api` || import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});


export default api;
