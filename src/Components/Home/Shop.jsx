import React from "react";
import ProductCard from "../Products/ProductCard";
import ProductCardHome from "../Products/ProductCardHome";
import banner from "../../../media/newbanner.jpg";
import { useProduct } from "../../Context/ProductContext";

function Shop() {
  const { productData } = useProduct();
  const a = productData?.find((e) => e._id == "6902fd9f0edc3f4030993dff");
  const b = productData?.find((e) => e._id == "6903015b0edc3f4030993e4b");
  const c = productData?.find((e) => e._id == "6903023b0edc3f4030993e8d");
  const d = productData?.find((e) => e._id == "6903000b0edc3f4030993e32");

  return (
    // <div className=" w-full sm:h-[120vh]  flex flex-col justify-evenly items-center my-4 border">
    //   <div className="w-[90%] flex justify-between items-center  text-xl font-semibold sego">
    //     Special features Ulfat
    //   </div>
    //   <div className="sm:w-[97%] w-[100%] flex justify-evenly flex-col sm:flex-row items-center h-[100vh]">
    //     <div className="border  sm:w-[33%] w-[100%] border-black flex justify-between items-center sm:flex-col">
    //       <ProductCardHome data={a} />
    //       <ProductCardHome data={b} />
    //     </div>
    //     <div className="sm:h-full sm:w-[33%] border border-black rounded-2xl flex justify-center items-center">
    //       <div className="sm:h-[95%] sm:w-[95%] h-[100vh] w-[95vw] rounded-xl bg-slate-300 bg-center bg-cover border-black"
    //       style={{backgroundImage:`url("${banner}")`}}
    //       ></div>
    //     </div>
    //     <div className=" sm:w-[33%] w-[100%]  border-black flex justify-between items-center sm:flex-col">
    //       <ProductCardHome data={c} />
    //       <ProductCardHome data={d} />
    //     </div>
    //   </div>
    // </div>
    <div className=" border-black w-full ">
      <div className="w-[90%] flex justify-between items-center  text-xl font-semibold sego p-4 py-6">
        Special features Ulfat
      </div>
      <div className="sm:flex w-full">
        <div className=" w-full  flex sm:w-[33%] sm:flex-col sm:justify-between">
          <ProductCardHome data={a} />
          <ProductCardHome data={b} />
        </div>
        <div className=" border-black w-full sm:w-[33%]  p-4 my-4">
          <div
            className="bg-cover bg-center h-[70vh] sm:h-[110vh] w-full  rounded-3xl "
            style={{ backgroundImage: `url("${banner}")` }}
          ></div>
        </div>
        <div className=" w-full sm:w-[33%]  flex sm:flex-col sm:justify-between">
          <ProductCardHome data={c} />
          <ProductCardHome data={d} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
