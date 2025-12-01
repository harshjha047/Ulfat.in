import React, { useEffect } from "react";
import { PiHandbagLight } from "react-icons/pi";
import OrderProductCard from "./OrderProductCard";
import { useOrder } from "../../Context/OrderContext";
import { useNavigate } from "react-router-dom";
import { useHome } from "../../Context/HomeContext";

function OrderSummary() {
  const navigate = useNavigate();
  const { orderData, payment, orderSuccess } = useOrder();
    let {order, setOrder} = useHome()

    useEffect(()=>{
      if(order != "payment"){
      navigate('/')
      }
    },[])
  const checkoutFunction = async () => {
    try {
      await payment(orderData);
    } catch (err) {
      console.log(err);
    }

  };
      useEffect(() => {
      if (orderSuccess) {
        navigate("/ordersuccess");
        setOrder("ordersuccess")
      }
    }, [orderSuccess]);

  return (
    <article className="md:w-[30vw] shadow rounded-lg p-4 flex flex-col gap-3">
      <h1 className="flex text-2xl items-center my-2">
        <span>
          <PiHandbagLight />
        </span>
        <span className="font-semibold px-1">Order Summary</span>
      </h1>
      <div className="flex flex-col gap-2">
        {orderData?.order?.items?.map((e, i) => {
          return <OrderProductCard data={e} key={i} />;
        })}
      </div>
      <div className="flex flex-col border-t border-b">
        <span className=" text-[#494949] text-sm w-full flex justify-between">
          <span>Subtotal({orderData?.order?.items?.length})</span>{" "}
          <span>₹{orderData?.order?.totalAmount}</span>
        </span>
        <span className=" text-[#494949] text-sm w-full flex justify-between">
          <span>Tax</span> <span>₹{orderData?.order?.totalAmount * 0.05}</span>
        </span>
        <span className=" text-[#494949] text-sm w-full flex justify-between">
          <span>Discount</span>{" "}
          <span>-₹{orderData?.order?.totalAmount * 0.05}</span>
        </span>
      </div>
      <span className=" text-[#494949] text-sm w-full flex justify-between">
        <span>Total Price</span> <span>₹{orderData?.order?.totalAmount}</span>
      </span>
      <button
        className="w-full border p-2 shadow rounded-md text-lg bg-[#111] text-[#ffd7a2] font-semibold"
        onClick={() => {checkoutFunction()}}
      >
        Pay Now
      </button>
    </article>
  );
}

export default OrderSummary;
