import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProduct } from '../../Context/ProductContext'
import { useProfile } from '../../Context/ProfileContext'
import { useCart } from '../../Context/CartContext'
import ProductVariants from './ProductVariants'

function ProductDetailsInformation() {
  const {ProductId}=useParams()
  const navigator = useNavigate()
  const {productData, setProductData}= useProduct()
  const product = productData?.find((e)=>e?._id===ProductId)
  const { getProfileData } = useProfile();
  const {cartData, setCartData, RemoveFromCart, AddToCart}=useCart()

  console.log(product);
  

const [cartItem, setCartItem] = useState({
  productId: "",
  productName: "",
  priceAtAddTime: 0,
  size: "XXS",
  quantity: 1,
  subtotal: 0,
});

useEffect(() => {
  if (product) {
    setCartItem({
      productId: ProductId,
      productName: product.name,
      priceAtAddTime: product.new_price,
      size: "",
      quantity: 1,
      subtotal: product.new_price,
    });
  }
  setImgIndex(product?.images[0])
}, [product]);


const handleChange = (e) => {
  const { name, value } = e.target;
    setCartItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  
};

const average = product?.reviews?.length > 0? product?.reviews?.reduce((sum, num) => sum + num?.rating, 0) / product?.reviews?.length: 0;

   const [units] = cartData?.filter((i)=>i?.productId==ProductId)
   const BuyNow=()=>{
    AddToCart(cartItem)
    navigator("/cart")
   }
  const [imgIndex,setImgIndex]=useState(product?.images[0])

  const setImage=(id)=>{
    const imagebyid = product?.images.find((e)=>id==e._id)
    setImgIndex(imagebyid)
  }



  return (
        <div className="lg:flex lg:gap-12">
      {/* <!-- Product Images --> */}
      <div className="lg:w-1/2">
        <div className="mb-4">
          <img id="main-image" src={imgIndex?.url} alt={imgIndex?.alt} className="w-full rounded-lg"/>
        </div>
        
        {/* <!-- Thumbnail Images --> */}
        <div className="flex space-x-2">
          {product?.images?.map((e,i)=>
          <img src={e?.url} alt={e?.alt} key={i} onClick={()=>{setImage(e._id)}}  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-blue-500"  />
          )}
        </div>
      </div>

      {/* <!-- Product Info --> */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold text-[#181818] mb-4">{product?.name}</h1>
        
        {/* <!-- Price --> */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-[#181818]">₹ {product?.new_price}</span>
          <span className="text-lg text-gray-400 line-through ml-2">₹{product?.old_price}</span>
          <span className="bg-green-600 text-[#ffffff] px-2 py-1 rounded-full text-sm ml-2">{Math.round(-(((product?.new_price/product?.old_price)*100)-100))}% OFF</span>
        </div>

        {/* <!-- Rating --> */}
        {/* <div className="flex items-center mb-6">
          <div className="flex ">
            <svg className={`w-5 h-5 fill-current ${average>=1?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=2?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=3?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=4?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average==5?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          </div>
          <span className="text-gray-400 ml-2">{average} ({product?.reviews?.length} reviews)</span>
        </div> */}

        {/* <!-- Description --> */}
        <div className="mb-6">
          <p className="text-gray-700">{product?.description}</p>
        </div>

        {/* <!-- Color Options --> */}
        <div className="mb-6">
          {/* <h3 className="text-lg font-semibold text-[#181818] mb-3">Color</h3> */}
          <div className="flex space-x-3">
            
            {product?.variants?.map((e,i)=> <ProductVariants key={i} data={e}/>)} 
          </div>
        </div>

        {/* <!-- Size Selection --> */}
        {product?.size != 0 && <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#181818] mb-3">Size</h3>
          <div className="">
            <select onChange={handleChange} className='border p-2 uppercase' name="size" id="">
              {product?.size?.map((e,i)=><option key={i} value={e?.Size}>{e?.Size}</option>)}
            </select>
          </div>
        </div>}
        

        {/* <!-- Quantity --> */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#181818] mb-3">Quantity</h3>
          <div className="flex items-center bg-gray-800 rounded-lg w-fit">
            <button className="px-4 py-2 text-[#fafafa] hover:bg-gray-700 rounded-l-lg" onClick={()=>{RemoveFromCart(cartItem)}}>-</button>
            <span className="px-6 py-2 text-[#ffffff]">{units?units?.quantity:"0"}</span>
            <button className="px-4 py-2 text-[#f0f0f0] hover:bg-gray-700 rounded-r-lg" onClick={()=>{
              AddToCart(cartItem) 
            }}>+</button>
          </div>
        </div>

        {/* <!-- Action Buttons --> */}
        <div className="space-y-4">
          <button onClick={()=>{AddToCart(cartItem)}} className="w-full bg-[#568862d8] text-[#ffffff] py-3 rounded-lg font-semibold hover:bg-green-700 ">
            Add to Cart
          </button>
          <button onClick={BuyNow} className="w-full bg-blue-800 text-[#ffffff] py-3 rounded-lg font-semibold hover:bg-yellow-700">
            Buy Now
          </button>
        </div>

       

      </div>
    </div>
  )
}

export default ProductDetailsInformation