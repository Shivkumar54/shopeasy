import React from "react"
import { useRouteError, Link } from "react-router-dom"
import NotFound from "../Images/notfound.jpg"
const Error = () => {
  const err = useRouteError()
  return (
    <div className="errorpageLayout">
      <div className="errorContent">
        <img src={NotFound} className="notfoundImage" />
        <span>
          <Link to="/">Go Back to Home</Link>
        </span>
      </div>
    </div>
  )
}

export default Error
