import React from 'react'
import { useProduct } from '../../Context/ProductContext';

function OrderProductCard({data}) {
   const {productData}= useProduct()
   const product = productData.find((e)=>data?.productId== e._id)

    
  return (
    <section className='w-full shadow p-2 flex border rounded-md'>
        <div className="w-12 h-12 border">
            <img src={product?.images[0]?.url} className='h-full w-full object-cover object-center' alt={product?.images[0]?.alt} />
        </div>
        <div className=" h-full  flex flex-col ml-1 flex-1">
            <input type="text" className='outline-none w-full bg-transparent' value={data?.productName} disabled />
    <p className='text-xs text-[#303030] font-medium'>₹{data?.priceAtOrder} * {data?.quantity}</p>
        </div>
    </section>
  )
}

export default OrderProductCard