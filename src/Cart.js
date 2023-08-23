import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../Redux-Store/cartSlice"
import { LuTrash2 } from "react-icons/lu"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()

  const clearCartItems = () => {
    dispatch(clearCart())
  }

  return (
    <div className="cartLayout">
      <div className="cartSectionLayout">
        {cartItems.length === 0 ? (
          <div className="cartSection">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4150967-3437888.png"
              alt="Empty cart"
              className="emptycart"
            />
            <span className="noitemTxt">looks like Cart is empty</span>
          </div>
        ) : (
          <div className="cartdisplayer">
            <div className="cartheaders">
              <h2 className="cartHeading">Your Checkout List</h2>
              <button className="clearcartbtn" onClick={clearCartItems}>
                <LuTrash2 size={20} /> Clear
              </button>
            </div>
            <hr />
            {cartItems.map((items) => {
              return (
                <div className="cartLists">
                  <div className="cartImg">
                    <img
                      src={items.image}
                      alt={items.title}
                      className="cartImgaes"
                    />
                  </div>
                  <div className="cartdetailstxt">
                    <span className="cartItemTitle">{items.title}</span>
                    <br />
                    <span className="cartItemPrice">
                      ₹ {(items.price * 10).toFixed(2)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
