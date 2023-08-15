import React from "react"
import { MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md"
const Internet = () => {
  return (
    <div className="internetLayout">
      <div className="internetsection">
        <MdSignalWifiStatusbarConnectedNoInternet size={50} />
        <h2>Looks like You're Offline</h2>
      </div>
    </div>
  )
}

export default Internet
