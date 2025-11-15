import React from "react";
import { useHome } from "../../Context/HomeContext";

function InputFields(props) {
  const {see,setSee}=useHome()
  return (
    <div className="flex flex-col w-full mt-4">
      <label htmlFor={props?.id} className="text-sm px-2 p-1">
        {props?.label}
      </label>
      <div className=" relative flex items-center">
        <input
          id={props?.id}
          value={props?.value}
          onChange={props?.onChange}
          type={props?.type}
          placeholder={props?.placeholder}
          onBlur={props?.onBlur}
          name={props?.id}
          className={` outline-none border-b text-sm  p-2 w-full ${props?.classStyle}`}
          required
        />
        <div
          className={`text-xs right-1 cursor-pointer absolute text-[#575757]`}
          onClick={()=>{setSee(!see)}}
        >
          {props?.id == "password" || props?.id == "confirmPassword" ? (
            see?<span className="text-[#313131]">hide</span>:<span className="text-[#747474]">show</span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="text-xs">{props?.err == "Required" ? "" : props?.err}</div>
    </div>
  );
}

export default InputFields;
