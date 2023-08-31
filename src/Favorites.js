import React from "react"
import { LuTrash2 } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import CartItems from "../Components/CartItems"
import { clearFavItem, removeFavItem } from "../Redux-Store/WhishlistSlice"
import { Link } from "react-router-dom"
const Favorites = () => {
  const dispatch = useDispatch()
  const favLists = useSelector((store) => store.favorite.favItem)
  const clearFavItems = () => {
    dispatch(clearFavItem())
  }
  const deleteFavItems = (itemToDelete) => {
    dispatch(removeFavItem({ id: itemToDelete.id }))
  }
  return (
    <div className="CartLayoutandPayment">
      <div className="cartSectionLayout">
        {favLists.length >= 1 && (
          <div className="cartheaders">
            <h2 className="cartHeading">Your favorite List</h2>
            <button className="clearcartbtn" onClick={clearFavItems}>
              <LuTrash2 size={20} /> Clear
            </button>
          </div>
        )}
        {favLists.length === 0 && (
          <div className="cartSection">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png"
              alt="Empty cart"
              className="emptycart"
              width={350}
              height={350}
            />
            <span className="noitemTxt">no favorite Items</span>
            <Link to="/">
              <span>Go to home</span>
            </Link>
          </div>
        )}

        {favLists.map((item) => {
          return (
            <CartItems
              item={item}
              key={item?.id}
              deleteItems={deleteFavItems}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Favorites
