import React, { useState } from "react";
import { useProfile } from "../../Context/ProfileContext";
import { BiSolidEdit } from "react-icons/bi";
import EditProfile from "./EditProfile";
import { useHome } from "../../Context/HomeContext";
import { Link } from "react-router-dom";

function ProfileOverview() {
  const { getProfileData } = useProfile();
  const{editProfileToast,setEditProfileToast}=useHome()
  console.log(editProfileToast);
  
  return (<>
  {editProfileToast&&<EditProfile/>}
    <div className="h-full w-full ">
      <div className="  w-full md:flex items-center relative ">
        <div className="h-[30vh]  w-[30vh] flex justify-center items-center">
          <div className={`h-[90%] w-[90%] border rounded-full bg-[url('${getProfileData?.profilePhoto}')] bg-cover bg-center` }
            style={{ backgroundImage: `url(${getProfileData?.profilePhoto})` }}
          ></div>
        </div>
        <div className=" pl-4">
          <h2 className="text-3xl font-semibold">{getProfileData?.name}</h2>
          <p className="text-zinc-800">{getProfileData?.email}</p>
          <p>{getProfileData?.phone}</p>
          <p className="text-sm">Member since {getProfileData?.createdAt.split("T")[0]}</p>
        </div>
        <div className="text-xl absolute top-4 right-4 cursor-pointer z-10" onClick={()=>{setEditProfileToast(true)}}><BiSolidEdit/></div>
      </div>
      <div className="w-full flex flex-wrap gap-1 justify-center items-center mt-2">
        {/* <Link to={"wishlist"} className="border h-[24vh] w-[49%] text-xl bg-[#fffffe] flex justify-center rounded-xl items-center">My Wishlist ({getProfileData?.wishlist?.length}) </Link> */}
        <Link to={"/cart"} className="border h-[24vh] w-[49%] text-xl bg-[#fffffe] flex justify-center rounded-xl items-center">My Bag </Link>
        <Link to={"orders"} className="border h-[24vh] w-[49%] text-xl bg-[#fffffe] flex justify-center rounded-xl items-center">  Orders History</Link>
        <Link to={"addresses"} className="border h-[24vh] w-[49%] text-xl bg-[#fffffe] flex justify-center rounded-xl items-center">Addresses </Link>
      </div>
    </div>
  </>

  );
}

export default ProfileOverview;
