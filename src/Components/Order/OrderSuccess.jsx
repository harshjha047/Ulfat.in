import React from 'react'
import { Link } from 'react-router-dom'

function OrderSuccess() {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-2'>
        <h1 className='text-green-600 mb:text-6xl text-4xl font-bold text-center'>Order Confirmed!</h1>
        <p className='text-gray-700 text-2xl  text-center'>Thank you for your purchase</p>
        <p className='text-gray-500 mb:text-lg text  text-center'>Your order has been successfully placed and is being processed</p>
        <Link to={"/settings/orderstatus"} className='border p-2 px-4 rounded-md bg-green-600 text-white'>Order Status</Link>
        
    </div>
  )
}

export default OrderSuccess