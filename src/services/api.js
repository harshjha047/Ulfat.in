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
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.token = token; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
