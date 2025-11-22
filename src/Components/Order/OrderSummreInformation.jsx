    import React from 'react'
import ShippingAddress from './ShippingAddress'
import PaymentMethod from './PaymentMethod'
import EstimatedDelivery from './EstimatedDelivery'
import OrderSummary from './OrderSummary'
    
    function OrderSummreInformation() {
      return (
        <section className='flex flex-col items-center  gap-4'>
          <div className="h-[12vh]"></div>
          <section className='mb:flex justify-center gap-4'>
            <article>
              <OrderSummary/>
            </article>
            <article className='flex flex-col gap-4'>
          <ShippingAddress/>
          <EstimatedDelivery/>
          <PaymentMethod/>

            </article>
          </section>
        </section>
      )
    }
    
    export default OrderSummreInformation