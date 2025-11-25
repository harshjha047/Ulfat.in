import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const HomeContext = createContext();

export const HomeApi = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [AddField, setAddField] = useState(false);
  const [editProfileToast,setEditProfileToast] =useState(false)
  const [loading,setLoading] = useState(false)
  const [see,setSee] = useState(false)
  const [order,setOrder] = useState()



  return (
    <HomeContext.Provider value={{see,setSee, menu, setMenu, AddField, setAddField,editProfileToast,setEditProfileToast,loading,setLoading,order,setOrder }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);
