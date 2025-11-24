import React from "react";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import { useHome } from "../../Context/HomeContext";
import { useProfile } from "../../Context/ProfileContext";
import { RiHome5Line } from "react-icons/ri";
import { VscTag } from "react-icons/vsc";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function Menu() {
  const { menu, setMenu } = useHome();
  const { getProfileData } = useProfile();

  return (
    <div
     onClick={() => {
              setMenu(false);
            }}
      className={`h-[100vh] w-full fixed ${
        menu ? "left-0" : "left-[-100%]"
      } z-50 bottom-0  p-5 `}
    >
      <div className="  flex flex-wrap items-start gap-2   customScrollerMini h-full flex-col justify-center  ">
        <MenuButton path={"/"} name={"Home"} icon={<RiHome5Line />} />
        <MenuButton path={"/product"} name={"Products"} icon={<VscTag />} />
        {getProfileData && (
          <>
            <MenuButton
              path={"/cart"}
              name={"My Bag"}
              icon={<PiHandbagSimpleLight />}
            />
            <MenuButton
              path={"/settings/orderstatus"}
              name={"Orders"}
              icon={<CiDeliveryTruck />}
            />
            {/* <MenuButton
              path={"/settings/wishlist"}
              name={"Wishlist"}
              icon={<CiHeart />}
            /> */}
            <MenuButton
              path={"/settings/addresses"}
              name={"Addresses"}
              icon={<CiLocationArrow1 />}
            />
            <MenuButton
              path={"/settings"}
              name={"Settings"}
              icon={<IoSettingsOutline />}
            />
          </>
        )}
        {!getProfileData && (
          <>
            <MenuButton path={"/login"} name={"Login"} icon={<CiLogin />} />
          </>
        )}

        {/* <MenuButton
          path={"/contectus"}
          name={"Contect Us"}
          icon={<IoMailOutline />}
        /> */}
        <div className="flex relative transition-all cursor-pointer items-center gap-2 group ">
          <div
            onClick={() => {
              setMenu(false);
            }}
            className="text-2xl border p-2 bg-[#fff5f5] rounded-lg  transition-all hover:p-3 hover:text-3xl"
          >
            <RxCross2 />
          </div>
          <div className="text-sm hidden font-semibold bg-white group-hover:block transition-all px-1 rounded-md border  ">
            close
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
