import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigationBar from "./Components/Nav/MainNavigationBar";
import MainFooter from "./Components/Footer/MainFooter";
import { Toaster } from "react-hot-toast";
import Menu from "./Components/Menu/Menu";
import ReactGA from "react-ga4";
import { useHome } from "./Context/HomeContext";
import Loader from "./Components/Reusable/Loader";

function App() {
    const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    ReactGA.initialize("G-WGPVJTCW02");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.path,
      title: "App.jsx",
    });
  }, []);
  
  useEffect(() => {
    //wait for the window to fully load (images, scripts, etc.)
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <>
    {loading&&<Loader/>}
    
      <div className="bg-[#fffdfa]">
        <MainNavigationBar />
        <Toaster />
        <Menu />
        <Outlet />
        <MainFooter />
      </div>
    </>
  );
}

export default App;
