import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LuTrash2 } from "react-icons/lu"
import {
  clearCart,
  removeItem,
  totalItemCost,
  updataQuantity,
} from "../Redux-Store/cartSlice"

import Payment from "../Components/Payment"
import CartItems from "../Components/CartItems"

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
                  <CartItems
                    item={item}
                    key={item.id}
                    updaateItems={updaateItems}
                    deleteItems={deleteItems}
                  />
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
