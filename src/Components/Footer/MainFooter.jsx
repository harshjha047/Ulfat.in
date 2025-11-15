import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

// #F7E9CF

function MainFooter() {
  return (
    <footer className=" w-full relative flex justify-center items-center flex-col">
      <div className="h-[50vh] flex items-end  w-full ">

      </div>
      <div className=" w-full bg-[#111] flex justify-center flex-col items-center">
        <div className="sego text-[#e2b376] text-[10rem] sm:text-[14rem] leading-[1]">Ulfat</div>
        <div className=" w-[90vw]">
          <div className="w-full flex justify-center items-center text-white text-2xl  sm:text-4xl">
            BY BANIYA BHAIYALOG
          </div>
            <div className="w-full border-t border-b flex justify-between items-center text-white">
              <div className="flex gap-4">
                <Link to={"/"} className="py-3">Home</Link>
                <Link to={"/product"} className="py-3">Products</Link>
                <Link to={"/"} className="py-3 flex items-center">Connect <span><LuArrowUpRight/></span></Link>
              </div>
              <div className="flex h-full items-center gap-4">
                <Link className="text-xl"><FaWhatsapp/></Link>
                <Link className="text-xl"><FaInstagram/></Link>
              </div>
            </div>
            <div className="flex justify-between w-full text-[#ffffffc2] text-sm mb-3">
              <div className="">
                &copy; Copyrights.
              </div>
              <div className="">
              {"</> Powerd by Team Div"}
              </div>
            </div>
         
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
