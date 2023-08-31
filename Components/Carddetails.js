import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BsCart2 } from "react-icons/bs"
import { MdOutlineCelebration } from "react-icons/md"
import { IoIosArrowBack } from "react-icons/io"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import Leftsidebar from "../src/Leftsidebar"
import CardDetailsShimmer from "../Shimmers/CardDetailsShimmer"
import useCarddetails from "../Utils/useCarddetails"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../Redux-Store/cartSlice"
import { addFavItem } from "../Redux-Store/WhishlistSlice"
const Carddetails = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isFavClicked, setIsFavClicked] = useState(false)

  const { id } = useParams()
  const details = useCarddetails(id)

  // Favorte Cart
  const favLists = useSelector((store) => store.favorite.favItem)
  const checkItemPresent = favLists.find((item) => item.id === details)
  const dispacher = useDispatch()
  const addItemTocart = (details) => {
    dispacher(addItem(details))
    setIsClicked(true)
  }

  const addToFavorite = (details) => {
    if (checkItemPresent) {
      setIsFavClicked(true)
      alert("Item Exist")
    } else {
      dispacher(addFavItem(details))
      setIsFavClicked(true)
    }
  }
  return (
    <div className="bodyLayout">
      <Leftsidebar />
      <div className="detail commoncontainer cardContainer background">
        {!details ? (
          <CardDetailsShimmer />
        ) : (
          <>
            <Link to="/">
              <span className="back">
                {" "}
                <IoIosArrowBack size={20} /> Back
              </span>
            </Link>
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
                {isFavClicked ? (
                  <Link to="/favorite">
                    <AiFillHeart size={25} />
                  </Link>
                ) : (
                  <AiOutlineHeart
                    size={25}
                    onClick={() => addToFavorite(details)}
                  />
                )}
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
                  <>
                    <button
                      className="addtocart"
                      onClick={() => addItemTocart(details)}
                    >
                      {" "}
                      <BsCart2 size={20} /> Add to Cart
                    </button>
                  </>
                ) : (
                  <Link to="/cart" className="addtocart addedtocart">
                    <MdOutlineCelebration size={20} /> Go To Cart
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Carddetails
