import React from "react"
import { LuTrash2 } from "react-icons/lu"
const CartItems = ({ item, updaateItems, deleteItems }) => {
  return (
    <div className="cartLists" key={item.id}>
      <div className="cartImg">
        <img src={item.image} alt={item.title} className="cartImgaes" />
      </div>
      <div className="cartdetailstxt">
        <span className="cartItemTitle">{item.title}</span>
        <br />
        <span className="cartItemPrice">₹ {(item.price * 10).toFixed(2)}</span>

        {item.quantity && (
          <>
            <button
              className="cartButton"
              onClick={() => {
                updaateItems(item, item.quantity - 1)
              }}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="cartQuantity">{item.quantity}</span>
            <button
              className="cartButton"
              onClick={() => {
                updaateItems(item, item.quantity + 1)
              }}
            >
              +
            </button>
          </>
        )}
      </div>
      <span className="deleter" onClick={() => deleteItems(item)}>
        <LuTrash2 size={25} />
      </span>
    </div>
  )
}

export default CartItems
