import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import toast from "react-hot-toast";
import { useProfile } from "./ProfileContext";
import { useNavigate } from "react-router-dom";
import  emailjs  from "@emailjs/browser";

const AuthContext = createContext();

export const AuthApi = ({ children }) => {
  const [authData, setAuthData] = useState();
  const [genratedOTP, setGeneratedOtp] = useState(0);
  const [userEnteredOtp, setUserEnterOtp] = useState(0);
  const [preRegisterUserData, setPreRegisterUserData] = useState(null);
  const [resetPasswordData, setResetPasswordData] = useState(null);
  const { getProfileData, setGetProfileData } = useProfile();
  
  
    const sendOTP = async (e,i)=>{
    const templateParams = {
      email: e,
      otp_code: i,  // This matches {{otp_code}} in your template
    };
    // const data = await authService.sendotp(templateParams)
    
    await emailjs.send(
      'service_h5ksq2r',   // Replace with your Service ID
      'template_yllomij',  // Replace with your Template ID
      templateParams,
      '4xjhIM5gFBL8WVKJ9'    // Replace with your Public Key
    )
      toast.success(`Otp has sent to ${e}`);
  }

  let genrateOtp = () => {
    return Math.floor(Math.random() * 8999) + 1000;
  };

  const login = async (info) => {
    try {
      const data = await authService.login(info);
      setAuthData(data);
      setGetProfileData(data);
      toast.success("User Logind Successfully");
      window.location.replace("/");
    } catch (err) {
      console.log(err);
      toast.error("User Login Failed");
    }
  };

  const register = async (info) => {
    try {
      const data = await authService.register(info);
      setAuthData(data);
      setGetProfileData(data);
      window.location.replace("/");
    } catch (err) {
      toast.error("User Registration Failed");

    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setAuthData(null);
    } catch (err) {}
  };
  
  const requestReset = async (inputBox) => {
    try {
      const responce=await authService.requestreset(inputBox);
      setResetPasswordData(inputBox);
      console.log(responce.data);
      let genOtp = genrateOtp();
      setGeneratedOtp(genOtp);
      
      sendOTP(inputBox.email,genOtp)
    
    } catch (err) {
      toast.error("Server error");
      console.log(err);
    }
  };

    const resetPassword = async (inputBox) => {
    try {
      const responce=await authService.resetpassword(inputBox);
      toast.success("Password reset successful");
    } catch (err) {
      toast.error("Server error");
      console.log(err);
    }
  };




  useEffect(() => {}, []);
  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
        resetPassword,
        login,
        logout,
        register,
        genrateOtp,
        requestReset,
        genratedOTP,
        setGeneratedOtp,
        userEnteredOtp,
        setUserEnterOtp,
        preRegisterUserData,
        resetPasswordData,
        setPreRegisterUserData,
        sendOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
