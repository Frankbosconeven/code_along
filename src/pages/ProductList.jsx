import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import {useProuctContext} from "../context/productContext"

function ProductList() {
  // const { data, isLoading, error } = useAxios(
  //   "https://api.escuelajs.co/api/v1/products"
  // );
  const { data, isLoading, error } = useAxios(
    "http://fakestoreapi.com/products"
  );

  useEffect(() => {
    setProducts(data)
  }, [data])


  const {products, setProducts } = useProuctContext();

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  
  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
      {products?.map((data) => (
        <Product product={data} />
      ))}
    </div>
  );
}

export default ProductList;
