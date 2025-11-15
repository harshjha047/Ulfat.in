import React, { Children, createContext, useContext, useEffect, useState } from "react";
import orderService from "../services/orderService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OrderProvider = createContext();

export const OrderContextApi = ({ children }) => {
  
  const [orderData, setOrderData] = useState();
  const [orderSuccess, setOrderSuccess] = useState();
  const [getOrder, setOrder] = useState();

  const addOrder = async (e) => {
    try {
      const { data } = await orderService.addOrders(e);
      setOrderData(data);
    } catch (err) {
      console.log(err);
    }
  };
  const getUserOrders = async () =>{
    try{
      const { data } = await orderService.getOrders();
      setOrder(data)
    }catch(err){
      console.log(err);
    }
  }
  const payment = async (e) => {
    try {
      const data = await orderService.payment(e);

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "Ulfat",
        description: "Order Payment",
        order_id: data.razorpayOrderId,

        handler: async (response) => {
          const verify = await orderService.verifyPayment({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verify.success) {
            toast.success("Payment success")
            setOrderSuccess(verify.success)
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };
useEffect(()=>{
  getUserOrders()
},[])


  return (
    <OrderProvider.Provider value={{ addOrder, orderData, payment,getUserOrders,getOrder,orderSuccess }}>
      {children}
    </OrderProvider.Provider>
  );
};

export const useOrder = () => useContext(OrderProvider);
