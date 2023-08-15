import React from "react"
import { GiBigDiamondRing } from "react-icons/gi"
import { PiHeadsetDuotone, PiDress } from "react-icons/pi"
import { IoShirtOutline } from "react-icons/io5"
import { BsSortNumericUpAlt, BsSortNumericUp } from "react-icons/bs"
const FilterItems = () => {
  return (
    <div className="background commonfilterer ">
      <h2 className="filterMain">Filter title</h2>
      <br />
      <h3 className="filterName">Filter Category</h3>{" "}
      <hr className="filterLine" />
      <ul>
        <li>
          <IoShirtOutline size={20} /> Men's Clothing
        </li>
        <li>
          <PiDress size={20} /> Women's Clothing
        </li>
        <li>
          <PiHeadsetDuotone size={20} /> Electronics
        </li>
        <li>
          <GiBigDiamondRing size={20} /> Jewelery
        </li>
      </ul>
      <br />
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
