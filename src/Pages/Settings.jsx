import React from 'react'
import SideBar from '../Components/Settings/SideBar'
import ProfileOverview from '../Components/Settings/ProfileOverview'
import { Outlet } from 'react-router-dom'

function Settings() {
  return (
    <div className='h-screen w-full '>
        <div className="h-[12vh] w-full "></div>
        <div className="flex justify-evenly h-[88vh]  w-full ">
          <div className="h-full sm:flex-[1] "><SideBar/></div>
          <div className="sm:h-full flex-[3] "><Outlet/></div>
            
        </div>


        
    </div>
  )
}

export default Settings