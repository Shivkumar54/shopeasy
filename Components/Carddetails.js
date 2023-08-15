import React from "react"
import { useParams } from "react-router-dom"
import { BsCart2 } from "react-icons/bs"
import Leftsidebar from "../src/Leftsidebar"
import CardDetailsShimmer from "../Shimmers/CardDetailsShimmer"
import useCarddetails from "../Utils/useCarddetails"
const Carddetails = () => {
  const { id } = useParams()
  const details = useCarddetails(id)

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
              <p className="detaildescription">{details?.description}</p>
              <br />
              <span className="detailSpanner">
                Rating - <strong>{details?.rating?.rate}⭐</strong>
              </span>
              <br />
              <span className="detailSpanner">
                Price - <strong>{(details?.price * 10).toFixed(2)}</strong>
              </span>
              <br />
              <button className="addtocart">
                {" "}
                <BsCart2 size={25} /> Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carddetails
