import React, { useState } from "react";
import InputFields from "./InputFields";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useHome } from "../../Context/HomeContext";

function ResetPassword() {
  const { resetPassword } = useAuth();
  const initState = { email: "", password: "", confirmPassword: "" };
  const [inputBox, setInputBox] = useState(initState); 
  const { email, password, confirmPassword } = inputBox;
  const {see}=useHome()
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputBox({ ...inputBox, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password != confirmPassword) {
        toast.error("Password must match");
      } else {
        await resetPassword(inputBox);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <form
          action=""
          className="md:w-[33%] w-[93%] flex flex-col p-2 shadow-2xl border-[#858585] gap-2"
          onSubmit={handleSubmit}
        >
          <div className="w-full text-center text-xl p-3 ">
            Create New password
          </div>
          <InputFields
            label={"Email"}
            id={"email"}
            value={email}
            onChange={handleChange}
            type={"email"}
            placeholder={"Enter your email here"}
          />
          <InputFields
            label={"Create Password"}
            id={"password"}
            value={password}
            onChange={handleChange}
            type={see ? "text" : "password"}
            placeholder={"Create a strong password"}
          />
          <InputFields
            label={"Conform Password"}
            id={"confirmPassword"}
            type={see ? "text" : "password"}
            placeholder={"Conform your password"}
            value={confirmPassword}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-medium text-lg"
          >
            Change
          </button>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
