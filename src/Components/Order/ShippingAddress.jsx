import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useOrder } from "../../Context/OrderContext";

function ShippingAddress() {
    const {orderData}=useOrder()
  
  return (
    <article className="md:w-[30vw] shadow rounded-lg p-4">
      <h1 className="flex text-2xl items-center my-2"><span><IoLocationOutline/></span> <span className="font-semibold px-1">Shipping Address</span></h1>
      <div className="flex flex-col">
        <span className="font-semibold">{orderData?.order?.shippingAddress?.name}</span>
        <span className=" text-[#494949] text-sm">{orderData?.order?.shippingAddress?.city}</span>
        <span className=" text-[#494949] text-sm">{orderData?.order?.shippingAddress?.street}</span>
        <span className=" text-[#494949] text-sm">{orderData?.order?.shippingAddress?.postalCode}</span>
        <span className=" text-[#494949] text-sm">{orderData?.order?.shippingAddress?.state}</span>
      </div>
      <div className="text-[#494949] my-2">
        <span>Contect: </span>
        <span>{orderData?.order?.shippingAddress?.phone}</span>
      </div>
    </article>
  );
}

export default ShippingAddress;
