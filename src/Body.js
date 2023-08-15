import React from "react"
import Leftsidebar from "./Leftsidebar"
import CardContainer from "./CardContainer"
import useOnlineStatus from "../Utils/usOnlineStatus"
import Internet from "../Components/Internet"

const Body = () => {
  const isOnline = useOnlineStatus()

  if (isOnline === false) return <Internet />

  return (
    <div className="bodyLayout">
      <Leftsidebar />
      <CardContainer />
    </div>
  )
}

export default Body
