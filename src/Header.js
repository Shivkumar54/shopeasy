import React from "react"
import { useLocation } from "react-router-dom"
import Logo from "../Images/logoo.png"
import { BiSearch } from "react-icons/bi"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/usOnlineStatus"
const Header = ({ inputVal, filterItems, searchChange, data }) => {
  const isOnline = useOnlineStatus()
  const location = useLocation()
  const handleFilterClick = () => {
    filterItems(inputVal, data)
  }

  const inputComponent = () => {
    if (location.pathname === "/") {
      return (
        <div className="navSearch">
          <BiSearch
            size={25}
            onClick={handleFilterClick}
            className="searchIcon"
          />
          <input
            className="search"
            type="text"
            placeholder="Search Products ...."
            value={inputVal}
            onChange={searchChange}
          />
        </div>
      )
    }
    if (location.pathname.startsWith("/product")) {
      return <div className="navSearchdisplayNone"></div>
    }
  }

  return (
    <div className="headerLayout background">
      <div className="logo">
        <h4>
          <Link className="shoppie" to="/">
            <img src={Logo} alt="shopeasy" width={200} />
          </Link>
        </h4>
      </div>
      {inputComponent()}
      <div className="navlists">
        <span>{isOnline ? "🟢" : "🔴"}</span>
        <span>
          <Link className="navSpan" to="/cart">
            <AiOutlineShoppingCart size={20} /> Cart
          </Link>
        </span>
        <span>
          <Link className="navSpan" to="/login">
            <AiOutlineUser size={20} /> Login
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Header
