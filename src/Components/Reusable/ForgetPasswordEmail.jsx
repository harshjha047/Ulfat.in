import React, { useState } from "react";
import InputFields from "./InputFields";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function ForgetPasswordEmail() {
  const [email, setEmail] = useState();
  const { requestReset,sendOTP } = useAuth();
  const navigate=useNavigate()




  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await requestReset({ email: email });
      navigate("/auth/account/reset/validation");

    } catch (err) {
      toast.error("Server error");
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex w-full justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="md:w-[30%] w-[90%] border flex flex-col p-2 gap-2 shadow-2xl"
      >
        <label htmlFor="email" className="w-full text-xl text-center p-3">
          Enter Valid Email
        </label>
        <InputFields
          id={"email"}
          value={email}
          onChange={handleChange}
          type={"text"}
          placeholder={"Enter your valid email"}
        />
        <button
          type="submit"
          className="w-full p-2 border bg-blue-600 text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ForgetPasswordEmail;
