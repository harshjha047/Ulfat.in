// src/services/authService.js
import api from "./api";

const authService = {
  register: async (payload) => {
    const { data } = await api.post("/users/register", payload, {
      withCredentials: true,
    });
    return data;
  },

  login: async (credentials) => {
    const { data } = await api.post("/users/login", credentials);
    return data;
  },

  requestreset: async (credentials) => {
    const responce = await api.post(
        "/users/request-reset",
        credentials,{ withCredentials: true }
      );
    return responce;
  },
    resetpassword: async (credentials) => {
   const responce = await api.patch("/users/reset-password",credentials,{ withCredentials: true });
    return responce;
  },

  //profile

  logout: async () => {
    try{await api.post("/users/logout")}
    catch(err){}
    finally{
      localStorage.removeItem("token")
      window.location.href = "/"
    }
      
  },

  getProfile: async () => {
    const { data } = await api.get("/users/me");
    return data;
  },

  editProfile: async (info) => {
    const { data } = await api.put("/users/me", info);
    return data;
  },

  getWishlist: async () => {
    const { data } = await api.get("/users/wishlist");
    return data;
  },

  addToWishlist: async (productId) => {
    const { data } = await api.post(`/users/wishlist/${productId}`);
    return data;
  },

  removeFromWishlist: async (productId) => {
    const { data } = await api.delete(`/users/wishlist/${productId}`);
    return data;
  },
  //admin

  //users
  deleteUser: async (productId) => {
    const { data } = await api.delete(`admin/users/${productId}`);
    return data;
  },
  getAllUsers: async () => {
    const { data } = await api.get(`admin/users`);
    return data;
  },

  //products
  createProduct: async (e) => {
    const { data } = await api.post(`admin/products`, e);
    return data;
  },
  updateProduct: async (e) => {
    const { data } = await api.patch(`admin/products/${e}`);
    return data;
  },
  deleteProduct: async (e) => {
    const { data } = await api.delete(`admin/products/${e}`);
    return data;
  },
};

export default authService;
