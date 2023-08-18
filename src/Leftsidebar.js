import React from "react"
import { useLocation } from "react-router-dom"
import UserSettings from "../Components/UserSettings"
import FilterItems from "../Components/FilterItems"
import OffersPage from "../Components/OffersPage"

const Leftsidebar = ({ filter }) => {
  const location = useLocation()

  const renderSIdeBarComponent = () => {
    if (location.pathname === "/") {
      return <FilterItems filter={filter} />
    } else if (location.pathname.startsWith("/product")) {
      return <OffersPage />
    }
    return null
  }

  return (
    <div className="leftsidebar">
      {renderSIdeBarComponent()}
      <UserSettings />
    </div>
  )
}

export default Leftsidebar
