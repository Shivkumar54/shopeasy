import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  clearCart,
  removeItem,
  totalItemCost,
  updataQuantity,
} from "../Redux-Store/cartSlice"
import { LuTrash2 } from "react-icons/lu"
import Payment from "../Components/Payment"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const totalprice = useSelector((store) => totalItemCost(store))
  const dispatch = useDispatch()
  const clearCartItems = () => {
    dispatch(clearCart())
  }

  const deleteItems = (itemToDelete) => {
    dispatch(removeItem({ id: itemToDelete.id }))
  }

  const updaateItems = (item, newQuantity) => {
    dispatch(updataQuantity({ id: item.id, newQuantity }))
  }

  return (
    <div className="CartLayoutandPayment">
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
              {cartItems.map((item) => {
                return (
                  <div className="cartLists" key={item.id}>
                    <div className="cartImg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cartImgaes"
                      />
                    </div>
                    <div className="cartdetailstxt">
                      <span className="cartItemTitle">{item.title}</span>
                      <br />
                      <span className="cartItemPrice">
                        ₹ {(item.price * 10).toFixed(2)}
                      </span>

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
              })}
            </div>
          )}
        </div>
      </div>
      <Payment totalprice={totalprice} />
    </div>
  )
}

export default Cart
