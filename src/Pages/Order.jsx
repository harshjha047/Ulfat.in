import React from 'react'
import OrderTitle from '../Components/Order/OrderTitle'
import OrderBody from '../Components/Order/OrderBody'

function Order() {
  return (
    <div>
        <div className="h-[12vh] w-[100%]"></div>
        <OrderTitle/>
        <OrderBody/>
    </div>
  )
}

export default Order