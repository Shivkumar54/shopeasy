import React, { useState } from "react"
import { BsShop } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/usOnlineStatus"
const Header = () => {
  const isOnline = useOnlineStatus()
  const [usrInput, setUsrInput] = useState("")

  const userEnteredValue = (e) => {
    const userVal = e.target.value
    setUsrInput(userVal)
  }

  return (
    <div className="headerLayout background">
      <div className="logo">
        <h4>
          <Link className="shoppie" to="/">
            <BsShop size={30} /> ShopEasy
          </Link>
        </h4>
      </div>
      <div className="navSearch">
        <BiSearch size={25} className="searchIcon" />
        <input
          className="search"
          type="text"
          placeholder="Search Products ...."
          value={usrInput}
          onChange={userEnteredValue}
        />
      </div>
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
