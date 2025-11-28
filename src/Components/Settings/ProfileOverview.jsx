import React, { useState } from "react";
import { useProfile } from "../../Context/ProfileContext";
import { BiSolidEdit } from "react-icons/bi";
import EditProfile from "./EditProfile";
import { useHome } from "../../Context/HomeContext";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

function ProfileOverview() {
  const { getProfileData } = useProfile();
    let { cartData } = useCart();
  const{editProfileToast,setEditProfileToast}=useHome()
  const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const createdDate= getProfileData?.createdAt.split("T")[0]
  console.log(getProfileData);
  
  
  return (<>
  {editProfileToast&&<EditProfile/>}
    <div className="h-full w-full">
      <div className="  w-full md:flex items-center relative ">
        <div className="md:h-[30vh] h-[55vh]  md:w-[30vh] w-full flex justify-center items-center">
          <div className={`h-[95%] w-[95%] border md:rounded-full rounded-3xl bg-[url('${getProfileData?.profilePhoto}')] bg-cover bg-center` }
            style={{ backgroundImage: `url(${getProfileData?.profilePhoto})` }}
          ></div>
        </div>
        <div className=" pl-4 ">
          <h2 className="text-3xl font-semibold">{getProfileData?.name}</h2>
          <p className="text-zinc-800">{getProfileData?.email}</p>
          <p>{getProfileData?.phone}</p>
          <p className="text-sm">Member since {months[createdDate?.split("-")[1]-1]+" "+createdDate?.split("-")[0]}</p>
        </div>
        <div className="text-xl absolute top-5 right-5 cursor-pointer z-10 invert-0" onClick={()=>{setEditProfileToast(true)}}><BiSolidEdit/></div>
      </div>
      <div className="w-full flex flex-wrap  gap-1 items-center mt-2 p-2">
        <Link to={cartData?.length>0?"/cart":"/nothingincart"} className="border p-1 px-4 bg-[#fffffe] flex md:justify-center rounded items-center">My Bag </Link>
        <Link to={"orders"} className="border p-1 px-4 bg-[#fffffe] flex md:justify-center rounded items-center">  Orders History</Link>
        <Link to={"addresses"} className="border p-1 px-4 bg-[#fffffe] flex md:justify-center rounded items-center">Addresses </Link>
        <div onClick={()=>{setEditProfileToast(true)}} className="cursor-pointer border p-1 px-4 bg-[#fffffe] flex md:justify-center rounded items-center">Edit </div>
      </div>
    </div>
  </>

  );
}

export default ProfileOverview;
