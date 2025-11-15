import React from "react";
import { Link } from "react-router-dom";
import { useHome } from "../../Context/HomeContext";


function MenuButton({ path, name, icon }) {
  const { menu, setMenu } = useHome();
  return (<>

            <div className="flex relative transition-all items-center gap-2 group ">
              <Link  to={path}
      onClick={() => {
        setMenu(false);
      }} className="text-2xl border p-2 bg-white rounded-lg  transition-all hover:p-3 hover:text-4xl">
      {icon}
              </Link>
              <div className="text-sm hidden font-semibold bg-white group-hover:block transition-all px-1 rounded-md border  ">
                {name}
              </div> 
            </div>
    </>
  );
}

export default MenuButton;
