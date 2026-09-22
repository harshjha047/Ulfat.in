import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { demoProducts } from "./demoData"; // Adjust path where you saved the demo data

const ProductContext = createContext();

export const ProductApi = ({ children }) => {
  const [productData, setProductData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);

  const FetchProductsData = async () => {
    try {
      // Simulating a fast API call with the demo data
      setProductData(demoProducts);
      setFilteredData(demoProducts); // Initialize filtered data so items show up instantly
    } catch (err) {
      console.log(err);
    }
  };

  const AddReview = async (e) => {
    try {
      // Mock success for demo purposes
      toast.success("Item added to cart!");
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    }
  };

  const RemoveReview = async (e) => {
    try {
      // Mock success for demo purposes
      toast.success("Item removed from cart!");
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    FetchProductsData();
  }, []);

  return (
    <ProductContext.Provider value={{
      AddReview, 
      RemoveReview, 
      FetchProductsData,
      filteredData, 
      setFilteredData, 
      productData, 
      setProductData
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);