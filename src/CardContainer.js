import React from "react"
import Card, { withBestSellerLabel } from "../Components/Card"
import { Link } from "react-router-dom"
import HomeShimmer from "../Shimmers/HomeShimmer"

const CardContainer = ({ list }) => {
  const Bestseller = withBestSellerLabel(Card)
  return (
    <div className="commoncontainer homeContainer cardContainer background">
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
              {item ? (
                item.rating.rate >= 4 ? (
                  <Bestseller product={item} />
                ) : (
                  <Card product={item} />
                )
              ) : (
                <div className="shimmer-effect">Loading...</div>
              )}
            </Link>
          )
        })
      )}
    </div>
  )
}

export default CardContainer
