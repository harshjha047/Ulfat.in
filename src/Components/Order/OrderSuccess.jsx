import React from 'react'
import { Link } from 'react-router-dom'

function OrderSuccess() {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-2'>
        <h1 className='text-green-600 text-6xl font-bold'>Order Confirmed!</h1>
        <p className='text-gray-700 text-2xl'>Thank you for your purchase</p>
        <p className='text-gray-500 text-lg'>Your order has been successfully placed and is being processed</p>
        <Link to={"/settings/orderstatus"} className='border p-2 px-4 rounded-md bg-green-600 text-white'>Order Status</Link>
        
    </div>
  )
}

export default OrderSuccess