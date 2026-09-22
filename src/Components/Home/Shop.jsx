import ProductCardHome from "../Products/ProductCardHome";
import banner from "../../../media/newbanner.avif";
import { useProduct } from "../../Context/ProductContext";

function Shop() {
  const { productData } = useProduct();
  const a = productData?.find((e) => e._id == "1");
  const b = productData?.find((e) => e._id == "2");
  const c = productData?.find((e) => e._id == "3");
  const d = productData?.find((e) => e._id == "4");

  return (
    <div className=" border-black w-full ">
      <div className="w-[90%] flex justify-between items-center  text-xl font-semibold p-4 py-6">
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
