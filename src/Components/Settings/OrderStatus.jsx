import React, { useEffect } from "react";
import { useOrder } from "../../Context/OrderContext";
import OrderCard from "./OrderCard";
import { useProfile } from "../../Context/ProfileContext";

function OrderStatus() {
  const { getUserOrders, getOrder } = useOrder();
  const {getProfileData}=useProfile()
  useEffect(() => {
    getUserOrders();
  }, []);
  const filteredOrders= getOrder?.orders?.filter((e)=>e?.userId==getProfileData?._id)
    
  

  return <div className="p-3  h-full border-black  customScroller">
    <div className="flex flex-col gap-3 h-full w-full">
    {filteredOrders?.map((e,i)=>{
      return(
    <OrderCard data={e} key={i}/>

        
      )
    })}
</div>
  </div>;
}

export default OrderStatus;
