import React from 'react'
import { MdOutlinePayment } from "react-icons/md";
import { useOrder } from '../../Context/OrderContext';

function PaymentMethod() {
      const {orderData}=useOrder()
  
  return (
            <article className="md:w-[30vw] shadow rounded-lg p-4">
              <h1 className="flex text-2xl items-center my-2"><span><MdOutlinePayment/></span> <span className="font-semibold px-1">Payment Status</span></h1>
              <div className="flex flex-col">
                <span className="text-[#494949] text-sm">{orderData?.order?.paymentInfo?.status}</span>
              </div>
            </article>
  )
}

export default PaymentMethod