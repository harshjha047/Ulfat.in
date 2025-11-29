import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useHome } from '../../Context/HomeContext'

function OrderSuccess() {
      let {order, setOrder} = useHome()
    const navigate= useNavigate()
      useEffect(()=>{
        if(order != "ordersuccess"){
        navigate('/')
        }
      },[])
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-2'>
        <h1 className='text-[#f8a942] mb:text-6xl text-4xl font-bold text-center'>Order Confirmed!</h1>
        <p className='text-gray-700 text-2xl  text-center'>Thank you for your purchase</p>
        <p className='text-gray-500 mb:text-lg text  text-center'>Your order has been successfully placed and is being processed</p>
        <Link to={"/settings/orderstatus"} onClick={()=>{setOrder()}} className='border p-2 px-4 rounded-md bg-[#111] text-[#ffd7a2]'>Order Status</Link>
        
    </div>
  )
}

export default OrderSuccess