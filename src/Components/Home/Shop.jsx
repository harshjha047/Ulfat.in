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
    <div className=" border-black w-full ">
      <div className="w-[90%] flex justify-between items-center  text-xl font-semibold sego p-4 py-6">
        Special features
      </div>
      <div className="lg:flex w-full">
        <div className=" w-full  flex lg:w-[33%] lg:flex-col lg:justify-between">
          <ProductCardHome data={a} />
          <ProductCardHome data={b} />
        </div>
        <div className=" border-black w-full lg:w-[33%]  p-4 my-4">
          <div
            className="bg-cover bg-center h-[70vh] lg:h-[110vh] w-full  rounded-3xl "
            style={{ backgroundImage: `url("${banner}")` }}
          ></div>
        </div>
        <div className=" w-full lg:w-[33%]  flex lg:flex-col lg:justify-between">
          <ProductCardHome data={c} />
          <ProductCardHome data={d} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
