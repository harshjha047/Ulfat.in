import React from 'react'
import IMG from '../../media/ulfat.e.odhani.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

function AuthEntrence() {
  return (
    <div className='h-screen flex justify-end items-center flex-col md:w-[33vw] m-auto'>
        <div className="w-full flex flex-col items-center h-[25vh]">
            <h1 className='sego text-9xl '>Ulfat</h1>
            <p className='text-[#a0743b]'>@ulfat.e.odhani</p>
        </div>
        <div className={` p-3 border-b-transparent border-[#00000091] w-full h-[45vh] rounded-t-[30px] flex gap-5 items-center justify-center relative flex-col`} >
            <div className="border border-[#00000091] w-10 absolute top-3"></div>
            <div className="w-full flex flex-col gap-3">
                <Link to={"/login"} className='bg-[#111] w-full font-semibold text-[#ffd7a2] p-3 flex justify-center rounded-md items-center text-xl'>Login</Link>
                <Link to={"/register"} className='bg-[#fff] border font-semibold border-[#111] w-full text-[#111] p-3 flex justify-center rounded-md items-center text-xl'>Register</Link>
                <Link to={"/"} className=' w-full text-[#00b7ff]  flex justify-center rounded-md items-center '>Continue as a guest</Link>
            </div>


        </div>
    </div>
  )
}

export default AuthEntrence