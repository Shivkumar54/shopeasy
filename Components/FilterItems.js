import React, { useState } from "react"
import { GiBigDiamondRing } from "react-icons/gi"
import { PiHeadsetDuotone, PiDress } from "react-icons/pi"
import { IoShirtOutline } from "react-icons/io5"
import { GrInstall } from "react-icons/gr"
import { BiFilterAlt } from "react-icons/bi"
import { BsSortNumericUpAlt, BsSortNumericUp } from "react-icons/bs"
const FilterItems = ({ filter }) => {
  return (
    <div className="background commonfilterer ">
      <div className="filterTitlers">
        <h2 className="filterMain">Filter </h2>
        <span>
          <BiFilterAlt size={25} />
        </span>
      </div>
      <br />
      <h3 className="filterName">Filter Category</h3>{" "}
      <hr className="filterLine" />
      <ul>
        <li onClick={() => filter("all")}>
          <GrInstall size={20} /> All Products
        </li>
        <li onClick={() => filter("men's clothing")}>
          <IoShirtOutline size={20} /> Men's Clothing
        </li>
        <li onClick={() => filter("women's clothing")}>
          <PiDress size={20} /> Women's Clothing
        </li>
        <li onClick={() => filter("electronics")}>
          <PiHeadsetDuotone size={20} /> Electronics
        </li>
        <li onClick={() => filter("jewelery")}>
          <GiBigDiamondRing size={20} /> Jewelery
        </li>
      </ul>
      <h3 className="filterName">Filter Price</h3> <hr className="filterLine" />
      <ul>
        <li>
          <BsSortNumericUp size={20} /> Low to high
        </li>
        <li>
          <BsSortNumericUpAlt size={20} />
          High to low
        </li>
      </ul>
    </div>
  )
}

export default FilterItems
