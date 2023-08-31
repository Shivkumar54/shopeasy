import React from "react"
import { LiaShippingFastSolid } from "react-icons/lia"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../Redux-Store/cartSlice"
import { useNavigate } from "react-router-dom"
const Payment = ({ totalprice }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartList = useSelector((store) => store.cart.items)
  const taxes = (totalprice * 15) / 100
  const discountPercentage = 0.1
  const deliverycharges = Math.round((totalprice * 5) / 100)

  const discount = totalprice * discountPercentage

  const discountedPrice = totalprice - discount
  const delveryPrice = discountedPrice + deliverycharges

  const grandTotal = delveryPrice + taxes

  const roundedGrandTotal = grandTotal.toFixed(2)

  const checkOutNow = () => {
    alert("Thanks for Purchasing")
    dispatch(clearCart())
  }

  const navigateToHome = () => {
    navigate("/")
  }
  return (
    <div className="paymentAddressLayout">
      <div className="addressLayout">
        <h3 className="shippingaddress">
          <span>
            <LiaShippingFastSolid size={25} />
          </span>
          Shipping Address
        </h3>
        <hr className="addressLine" />
        <span className="addressdata">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          dolores necessitatibus ullam sequi voluptate
        </span>
      </div>
      <div className="paymentLayout">
        <h3 className="paymentHeading">Invoice</h3>
        <hr />
        <div className="total">
          <h5 className="productCalcSpan">
            <span className="costSpanner">Product cost </span>
            {totalprice}
          </h5>
          <h5 className="productCalcSpan">
            <span className="costSpanner">Taxes </span> {taxes.toFixed(2)}
          </h5>
          <h5 className="productCalcSpan">
            <span className="costSpanner">Discount </span> {discount.toFixed(2)}
          </h5>
          <h5 className="productCalcSpan">
            <span className="costSpanner">Delivery Charges </span>
            {deliverycharges.toFixed(2)}
          </h5>
          <hr className="grandtotalline" />
          <h5 className="productCalcSpan grandTotal">
            <span className="costSpanner grandTotal">Grand Total </span> ₹
            {roundedGrandTotal}
          </h5>
        </div>
      </div>
      <div className="checkoutLayout">
        <h3 className="paynowtitle">Buy Now</h3>
        <p className="paynowtxt">Pay to avoid contactless transaction</p>
        <hr />
        {cartList.length >= 1 ? (
          <button onClick={checkOutNow} className="paynowbtn">
            Paynow
          </button>
        ) : (
          <button className="paynowbtn" onClick={navigateToHome}>
            Continue Shopping
          </button>
        )}
      </div>
    </div>
  )
}

export default Payment
