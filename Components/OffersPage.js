import React from "react"
import { TbDiscount2 } from "react-icons/tb"
// import { FaGooglePay } from "react-icons/fa"
import { LiaCreditCard } from "react-icons/lia"
import { CiCreditCard1 } from "react-icons/ci"
import { SiPhonepe, SiApplepay } from "react-icons/si"

const OffersPage = () => {
  const list = [
    {
      title: "Visa Credit Card",
      desc: "Get 15% off on selected IIDC visa credit cards.",
      offerIcon: <CiCreditCard1 size={30} />,
      valid: "09/23",
    },
    {
      title: "Apple Pay ",
      desc: "Get flat 10% off when you pay with GooglePay.",
      offerIcon: <SiApplepay size={30} />,
      valid: "11/23",
    },
    {
      title: "PhonePe ",
      desc: "Get flat 8% off when you pay with PhonePe.",
      offerIcon: <SiPhonepe size={30} />,
      valid: "02/24",
    },
  ]

  return (
    <div className="background commonfilterer ">
      <div className="filterTitlers">
        <h2 className="filterMain">Offers </h2>
        <span>
          <TbDiscount2 size={25} />
        </span>
      </div>
      <div className="offersContents">
        {list.map((item, i) => {
          return (
            <div className="offercontent" key={i}>
              <div className="offersTitler">
                <span>{item.offerIcon}</span>
                <span className="offertitle">{item.title}</span>
              </div>
              <p className="offerdesc">{item.desc}</p>
              <span className="valid"> Valid until - {item.valid}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OffersPage
