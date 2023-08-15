import React from "react"

import UserSettings from "../Components/UserSettings"
import FilterItems from "../Components/FilterItems"

const Leftsidebar = () => {
  return (
    <div className="leftsidebar">
      <FilterItems />
      <UserSettings />
    </div>
  )
}

export default Leftsidebar
