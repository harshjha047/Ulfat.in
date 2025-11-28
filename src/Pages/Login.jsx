import React from "react";
import InputFields from "../Components/Reusable/InputFields";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../Components/Reusable/AuthSchema";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";
import { useHome } from "../Context/HomeContext";
import { IoIosArrowBack } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
    const {see,setSee}=useHome()
  
  

  const onSubmit = async (values, actions) => {
    try {
      actions.resetForm();
      await login(values);
    } catch (err) {
      console.log(err);
      toast.error("User Login Failed");
    }
  };
  const {
    values,
    handleChange,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col h-screen justify-end items-center">
      <div className=" md:w-[25%] w-[90%] h-[90%] rounded-xl  relative">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col items-center p-1"
        >
          {/* <Link className="w-full text-xl"><IoIosArrowBack/></Link> */}
          <div className="w-full flex justify-center items-center text-3xl font-semibold  my-5">
            Welcome back! Glad to see you, Again!
          </div>
          <InputFields
            label={"Email"}
            id={"email"}
            classStyle={errors.email && touched.email ? "border-red-500" : "border-gray-600"}
            value={values.email}
            onChange={handleChange}
            type={"text"}
            placeholder={"Enter your email here"}
            err={errors.email}
            onBlur={handleBlur}
          />
          <InputFields
            label={"Password"}
            id={"password"}
            classStyle={
              errors.password && touched.password
                ? "border-red-500"
                : "border-gray-600"
            }
            value={values.password}
            onChange={handleChange}
            err={errors.password}
            type={see?"text":"password"}
            placeholder={"Enter your password here"}
            onBlur={handleBlur}
          />
          <div className="flex justify-end w-full  my-1">
            <Link to={"/auth/account/forgetpassword"} className="text-sm text-[#11111186]">Forget Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full py-3 border mt-4 rounded-lg bg-[#111] text-[#ffd7a2] text-xl font-semibold flex justify-center items-center"
          >
            Login
          </button>
          <div className="mt-8 w-full  flex flex-col justify-center items-center gap-2">
            <p className="text-[#11111186]">Contact us on</p>
            <div className="flex h-full items-center gap-4 w-full">
              <Link to={"https://wa.me/919999481555"} target="_blank" className="text-2xl p-3 flex-1 flex justify-center rounded-md px-4 border "><FaWhatsapp/></Link>
              <Link to={"https://ig.me/m/ulfat.e.odhani"} target="_blank" className="text-2xl flex-1 flex justify-center rounded-md p-3 px-4 border"><FaInstagram/></Link>
            </div>
          </div>
          <div className="flex justify-center w-full text-sm  absolute bottom-3">
            Don't have any account ?
            <Link to={"/register"} className="text-cyan-700">Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
