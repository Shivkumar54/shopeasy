import React from "react"
import { BsQuestionOctagon } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"
const UserSettings = () => {
  return (
    <div className="background commonfilterer usersettings">
      <ul>
        <li className="commonlists">
          <BsQuestionOctagon size={25} /> Help & Support
        </li>
        <br />
        <li className="commonlists">
          <IoSettingsOutline size={25} /> Settings
        </li>
      </ul>
    </div>
  )
}

export default UserSettings
