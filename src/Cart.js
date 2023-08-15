import React from "react"

const Cart = () => {
  return (
    <div className="cartLayout">
      <div className="cartSection">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4150967-3437888.png"
          alt="Empty cart"
          className="emptycart"
        />
        <span className="noitemTxt">looks like Cart is empty</span>
      </div>
    </div>
  )
}

export default Cart
