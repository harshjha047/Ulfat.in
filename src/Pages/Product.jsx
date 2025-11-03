
import ProductCard from "../Components/Products/ProductCard";
import SearchBar from "../Components/Products/SearchBar";
import { useProduct } from "../Context/ProductContext";

function Product() {
 const {productData, setProductData,filteredData}=useProduct()
 
  return (
    <div className="flex w-full flex-col">
      <div className="h-[20vh]  w-full border-black flex justify-end flex-col">
        <div className="w-full sm:hidden h-[10vh] border-black flex justify-between p-1"><SearchBar/></div>
        <div className="w-full h-[10vh] hidden border-black sm:flex justify-end px-4">
          <div className=""><SearchBar/></div>
        </div>
      </div>
      <section className="w-[97%] mx-auto mt-[2vh] grid sm:gap-5   grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-black">
    {filteredData?.map((e,i)=>{
      return ( 
        <ProductCard data={e} key={i} />
      )
    })}
      </section>
    </div>
  );
}

export default Product;
