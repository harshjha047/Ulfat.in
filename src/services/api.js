import axios from "axios";

const api = axios.create({
  // baseURL: `http://localhost:5000/api`,
  baseURL: `https://ulfat.onrender.com/api` || import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // We send it in two places to be safe:
      // 1. Standard Authorization Header (Bearer)
      config.headers.Authorization = `Bearer ${token}`;
      // 2. Custom 'token' header (in case your middleware looks for this)
      config.headers.token = token; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
