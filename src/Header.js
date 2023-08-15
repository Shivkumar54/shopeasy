import React from "react"
import { BsShop } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom"
const Header = () => {
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
        />
      </div>
      <div className="navlists">
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
