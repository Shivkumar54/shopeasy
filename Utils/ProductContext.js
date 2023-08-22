import { createContext, useContext, useState, useEffect } from "react"
import useProductList from "./useProductList"

// For creatingthe context
const ProductContext = createContext()

// For Accesing Data all over the application
export const useProductContext = () => useContext(ProductContext)

// creating and setting the value
export const ProductsHolder = ({ children }) => {
  const productList = useProductList()
  const [product, setProduct] = useState(productList)
  useEffect(() => {
    setProduct(productList)
  }, [productList])

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  )
}
