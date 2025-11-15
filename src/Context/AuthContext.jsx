import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import toast from "react-hot-toast";
import { useProfile } from "./ProfileContext";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthApi = ({ children }) => {
  const [authData, setAuthData] = useState();
  const [genratedOTP, setGeneratedOtp] = useState(0);
  const [userEnteredOtp, setUserEnterOtp] = useState(0);
  const [preRegisterUserData, setPreRegisterUserData] = useState(null);
  const [resetPasswordData, setResetPasswordData] = useState(null);
  const { getProfileData, setGetProfileData } = useProfile();

  let genrateOtp = () => {
    return Math.floor(Math.random() * 8999) + 1000;
  };

  const login = async (info) => {
    try {
      const data = await authService.login(info);
      setAuthData(data);
      setGetProfileData(data);
    } catch (err) {}
  };

  const register = async (info) => {
    try {
      const data = await authService.register(info);
      setAuthData(data);
      setGetProfileData(data);
    } catch (err) {}
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
      toast.success(`Otp has sent to ${inputBox.email}`);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
