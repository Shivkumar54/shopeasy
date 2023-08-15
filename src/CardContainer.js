import React, { useEffect, useState } from "react"
import Card from "../Components/Card"
import { Link } from "react-router-dom"
import HomeShimmer from "../Shimmers/HomeShimmer"
const CardContainer = () => {
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

  return (
    <div className="commoncontainer cardContainer background">
      {list.length === 0 ? (
        <HomeShimmer />
      ) : (
        list?.map((item) => {
          return (
            <Link
              className="commonlinks"
              key={item.id}
              to={"/product/" + item.id}
            >
              {" "}
              <Card product={item} />
            </Link>
          )
        })
      )}
    </div>
  )
}

export default CardContainer
