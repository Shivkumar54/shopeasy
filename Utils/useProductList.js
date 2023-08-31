import { useEffect, useState } from "react"

const useProductList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    ProductList()
  }, [])

  const ProductList = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setList(data)
    } catch (error) {
      console.log("Unable To fetch please try after some time" + error)
    }
  }

  return list
}

export default useProductList
