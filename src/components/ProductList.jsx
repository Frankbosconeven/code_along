
import axios from "axios";
import {useEffect, useState } from "react";
import Product from "./Product";

function ProductList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async ()=> {
            const results = await axios.get("https://api.escuelajs.co/api/v1/products");
            setProducts(results.data);
        } 
        getProducts();
    }, []);
    console.log(products)

    

    return(
        <div className="flex flex-wrap gap-10 justify-center pt-10">
        {products.map((product) => (
            <Product product={product} />
        ))}
        </div>
    )
}

export default ProductList;