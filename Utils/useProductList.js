import { useEffect, useState } from "react"

const useProductList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    setTimeout(() => {
      ProductList()
    }, 1000)
  }, [])

  const ProductList = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    setList(data)
  }

  return list
}

export default useProductList
