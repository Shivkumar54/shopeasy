import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { BsCart2 } from "react-icons/bs"
import { MdOutlineCelebration } from "react-icons/md"
import Leftsidebar from "../src/Leftsidebar"
import CardDetailsShimmer from "../Shimmers/CardDetailsShimmer"
import useCarddetails from "../Utils/useCarddetails"
import { useDispatch } from "react-redux"
import { addItem } from "../Redux-Store/cartSlice"
const Carddetails = () => {
  const [isClicked, setIsClicked] = useState(false)

  const { id } = useParams()
  const details = useCarddetails(id)

  const dispacher = useDispatch()
  const addItemTocart = (details) => {
    dispacher(addItem(details))
    setIsClicked(true)
  }

  return (
    <div className="bodyLayout">
      <Leftsidebar />
      <div className="detail commoncontainer cardContainer background">
        {!details ? (
          <CardDetailsShimmer />
        ) : (
          <div className="details" key={details?.id}>
            <div className="dImg">
              <img
                src={details?.image}
                alt={details?.title}
                className="dImage"
              />
            </div>
            <div className="dText">
              <span className="dCategory">{details?.category}</span>
              <h1 className="detailTitle">{details?.title}</h1>
              <p className="detaildescription">
                {(details?.description).toLowerCase()}.
              </p>
              <br />
              <span className="detailSpanner">
                Rating - <strong>{details?.rating?.rate}⭐</strong>
              </span>
              <br />
              <span className="detailSpanner">
                Price - <strong>₹{(details?.price * 10).toFixed(2)}</strong>
              </span>
              <br />
              {!isClicked ? (
                <button
                  className="addtocart"
                  onClick={() => addItemTocart(details)}
                >
                  {" "}
                  <BsCart2 size={20} /> Add to Cart
                </button>
              ) : (
                <button className="addtocart addedtocart">
                  <MdOutlineCelebration size={20} /> Added To Cart
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carddetails
