import React from "react"
import { TbDiscount2 } from "react-icons/tb"

const OffersPage = () => {
  return (
    <div className="background commonfilterer ">
      <div className="filterTitlers">
        <h2 className="filterMain">Offers </h2>
        <span>
          <TbDiscount2 size={25} />
        </span>
      </div>
      <div className="offersContents">
        <span className="offertitle"> Visa Credit Card</span>
        <p className="offerdesc">
          Get 15% off on selected IIDC visa credit cards{" "}
        </p>
        <span>VALID - 09/23</span>
        <hr />
        <span className="offertitle"> Visa Credit Card</span>
        <p className="offerdesc">
          Get 15% off on selected IIDC visa credit cards{" "}
        </p>
        <span>VALID - 09/23</span>
        <hr />
        <span className="offertitle"> Visa Credit Card</span>
        <p className="offerdesc">
          Get 15% off on selected IIDC visa credit cards{" "}
        </p>
        <span>VALID - 09/23</span>
      </div>
    </div>
  )
}

export default OffersPage
