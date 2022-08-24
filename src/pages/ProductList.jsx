import React from "react";
import useAxios from "../hooks/useAxios";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

function ProductList() {
  const { data, isLoading, error } = useAxios(
    "https://api.escuelajs.co/api/v1/products"
  );

  //   useEffect(() => {
  //     const getProduct = async () => {
  //       const results = await axios.get(
  //         "https://api.escuelajs.co/api/v1/products"
  //       );
  //       console.log(results);

  //       setProducts(results.data);
  //     };

  //     getProduct();
  //   }, []);

  //   console.log(data);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  console.log(data);

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
      {data.map((data) => (
        <Product product={data} />
      ))}
    </div>
  );
}

export default ProductList;