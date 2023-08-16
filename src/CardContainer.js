import React from "react"
import Card, { withBestSellerLabel } from "../Components/Card"
import { Link } from "react-router-dom"
import HomeShimmer from "../Shimmers/HomeShimmer"
import useProductList from "../Utils/useProductList"
const CardContainer = () => {
  const list = useProductList()
  const Bestseller = withBestSellerLabel(Card)

  return (
    <div className="commoncontainer cardContainer background">
      {list.length === 0 ? (
        <HomeShimmer />
      ) : (
        list?.map((item) => {
          console.log(item.rating.count)
          return (
            <Link
              className="commonlinks"
              key={item.id}
              to={"/product/" + item.id}
            >
              {item.rating.count >= 300 ? (
                <Bestseller product={item} />
              ) : (
                <Card product={item} />
              )}
              {/* <Card product={item} /> */}
            </Link>
          )
        })
      )}
    </div>
  )
}

export default CardContainer
