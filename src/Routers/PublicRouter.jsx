import React from 'react'
import Loader from '../Components/Reusable/Loader';
import { useProfile } from '../Context/ProfileContext';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = () => {
    const { getProfileData ,loading} = useProfile();

  if(loading){
    return <Loader/>
  }
  if (getProfileData) {
   return <Navigate to="/" replace />;
  } else {
    return <><Outlet/></>;
  }
};

export default PublicRouter;