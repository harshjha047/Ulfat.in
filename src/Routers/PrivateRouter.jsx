import React, { useEffect } from "react";
import { useProfile } from "../Context/ProfileContext";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Components/Reusable/Loader";

function PrivateRouter() {
  const { getProfileData, loading } = useProfile();

  useEffect(()=>{

  },[])
  if(loading){
    <Loader/>
  }
  else if(!getProfileData){
    return <Navigate to={"/login"}  replace/>
  }
  return <Outlet/>
}

export default PrivateRouter;
