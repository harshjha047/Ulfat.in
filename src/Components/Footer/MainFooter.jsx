import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// #F7E9CF

function MainFooter() {
  return (
    <footer className=" w-full relative flex  mt-2 justify-center items-center flex-col ">
      <div className="h-[5vh] flex items-end  w-full ">

      </div>
      <div className=" w-full bg-[#111] flex justify-center flex-col items-center pt-2">
        <div className="sego text-[#e2b376] text-[10rem] sm:text-[14rem] leading-[1] md:block hidden">Ulfat</div>
        <div className=" w-[90vw] ">
          <div className="w-full  justify-center items-center min-h-2 text-white text-2xl  sm:text-4xl  md:flex hidden">
            
          </div>
            <div className="w-full border-t border-b flex justify-between items-center text-white">
              <div className="flex gap-4">
                <div className="cursor-pointer leading-[1] py-3">
                &copy; Copyrights.
              </div>
                {/* <Link to={"/"} className="py-3 flex items-center">Connect <span><LuArrowUpRight/></span></Link> */}
              </div>
              <div className="flex h-full items-center gap-4">
                <Link to={"/"} target="_blank" className="text-xl"><FaWhatsapp/></Link>
                <Link to={"/"} target="_blank" className="text-xl"><FaInstagram/></Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-between w-full text-[#ffffffc2] gap-1 text-sm mb-6 sm:mt-1 py-1 ">
             
              <div className="cursor-pointer leading-[1] ">
              @ Developed by Harsh jha
              </div>
              <div className="cursor-pointer leading-[1]">
              {"</> Powerd by Div"}
              </div>
               
            </div>
         
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
