import React from "react"

const Card = ({ product }) => {
  return (
    <div className="cardd">
      <div className="card">
        <div className="imager">
          <img src={product.image} alt={product.title} className="cardImage" />
          <div className="category">{product.category}</div>
        </div>
        <h5 className="cardTitle">{product.title}</h5>
        <span className="carddetails">
          Rating - <strong>{product.rating.rate} ⭐</strong>
        </span>
        <br />
        <span className="carddetails">
          Price - <strong>₹ {(product.price * 10).toFixed(2)}/-</strong>
        </span>
      </div>
    </div>
  )
}

export const withBestSellerLabel = (Card) => {
  return (props) => {
    return (
      <>
        <label className="bestsellertxt">Best Seller</label>
        <Card {...props} />
      </>
    )
  }
}

export default Card
