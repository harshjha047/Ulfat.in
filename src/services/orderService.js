import api from "./api";

const orderService = {
  addOrders: async (e) => {
    const data = await api.post("/orders", e);
    return data;
    //  add to header storage /create-order
  },
  getOrders: async () => {
    const data = await api.get(`/orders/myorders`);
    return data;
  },
  payment: async (e) => {
    const { data } = await api.post("/payment/create-order", e);
    return data;
  },
  verifyPayment: async (payload) => {
    const { data } = await api.post("/payment/verify", payload);
    console.log(data);
    return data;
  },
};

export default orderService;
