import React, { useState } from 'react'
import AddAddress from './AddAddress'
import { useHome } from '../../Context/HomeContext'
import { useProfile } from '../../Context/ProfileContext'
import AddressCard from './AddressCard'

function Addresses() {
  const {AddField, setAddField} = useHome()
  const {getProfileData} = useProfile()
  console.log(getProfileData);
  

  return (
    <div className="h-full w-full customScroller border p-2 flex flex-col gap-2">
        <button className='w-full p-2 border bg-slate-200 border-slate-700 rounded-lg' onClick={()=>setAddField(true)}>Add new address</button>
        {AddField && <AddAddress/>}
        <div className="">
          {getProfileData?.addresses?.map((e,i)=>{
            return(<>
            <AddressCard data={e} user={getProfileData} key={i}/>
            </>)})}

        </div>
    </div>
  )
}

export default Addresses