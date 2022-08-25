import {createContext, useContext, useState, } from "react";

export const ProductContext = createContext({
    products: [],
    setProducts: (products) => {}
})
export const ProductContextProvider = ({children}) => {
    const [products, setValue] = useState([]);
    const setProducts = (products) => setValue(products);

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
            </ProductContext.Provider>
    )

}

export const useProuctContext = () => useContext(ProductContext)

// export ProductContextProvider = ({children}) =>{
    
//         const {data, isLoading, error} =useAxios(
//             const [products, setProducts] = useState([])
//             "https://api.escuelajs.co/api/v1/products"
//       return (<ProductContext.Provider>
//         {children}
//         </ProductContext.Provider>
//         )  
// }