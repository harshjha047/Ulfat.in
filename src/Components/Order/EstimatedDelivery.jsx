import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";

function EstimatedDelivery() {
  return (
        <article className="md:w-[30vw] shadow rounded-lg p-4">
          <h1 className="flex text-2xl items-center my-2"><span><CiDeliveryTruck/></span> <span className="font-semibold px-1">Estimated Delivery</span></h1>
          <div className="flex flex-col">
            <span className="font-semibold">5-7 Business Days</span>
            <span className=" text-[#494949] text-sm">*Delivery time may vary based on location and product availability</span>
          </div>
        </article>
  )
}

export default EstimatedDelivery