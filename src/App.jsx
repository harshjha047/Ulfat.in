import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MainNavigationBar from "./Components/Nav/MainNavigationBar";
import MainFooter from "./Components/Footer/MainFooter";
import { Toaster } from "react-hot-toast";
import Menu from "./Components/Menu/Menu";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-E2KPCSKD5V");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.path,
      title: "App.jsx",
    });
  }, []);
  return (
    <>
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
