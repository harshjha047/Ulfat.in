import React, { useEffect } from "react";
import { useOrder } from "../../Context/OrderContext";
import OrderCard from "./OrderCard";

function OrderStatus() {
  const { getUserOrders, getOrder } = useOrder();
  useEffect(() => {
    getUserOrders();
  }, []);
  console.log(getOrder);
  

  return <div className="p-3 border h-full border-black  customScroller">
    <div className="flex flex-col gap-3 h-full w-full">
    {getOrder?.orders?.map((e,i)=>{
      return(
    <OrderCard data={e} key={i}/>

        
      )
    })}
</div>
  </div>;
}

export default OrderStatus;
