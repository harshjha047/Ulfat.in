import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigationBar from "./Components/Nav/MainNavigationBar";
import MainFooter from "./Components/Footer/MainFooter";
import { Toaster } from "react-hot-toast";
import Menu from "./Components/Menu/Menu";
import ReactGA from "react-ga4";
import { useHome } from "./Context/HomeContext";
import Loader from "./Components/Reusable/Loader";
import ScrollToTop from "./Components/Reusable/ScrolltoTop";

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
  return (
    <>
    
      <div className="bg-[#fffdfa]">
        <ScrollToTop/>
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
