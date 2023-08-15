import React from "react"
import HomeShimmer from "../Shimmers/HomeShimmer"

const Card = ({ product }) => {
  return (
    <div>
      <div className="card">
        <div className="imager">
          <div className="category">{product.category}</div>
          <img src={product.image} alt="tshirt" className="cardImage" />
        </div>
        <h5 className="cardTitle">{product.title}</h5>
        <span className="carddetails">
          Rating - <strong>{product.rating.rate} ⭐</strong>
        </span>
        <br />
        <span className="carddetails">
          Price - <strong>Rs {(product.price * 10).toFixed(2)}/-</strong>
        </span>
      </div>
    </div>
  )
}

export default Card

{
  /* <div className="card">
        <div className="imager">
          <div className="category">Men Clothing</div>
          <img
            src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077"
            alt="tshirt"
            className="cardImage"
          />
        </div>
        <h5 className="cardTitle">
          Lorem ipsum dolor sit amet dolor sit amet.
        </h5>
        <span className="carddetails">
          Rating - <strong>4.0 ⭐</strong>
        </span>
        <br />
        <span className="carddetails">
          Price - <strong>Rs 390/-</strong>
        </span>
      </div> */
}
