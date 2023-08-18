import React from "react"
import "./style.css"

const HomeShimmer = () => {
  return (
    <div>
      {[...Array(10)].map((_, i) => {
        return (
          <div key={i + 1} className="shimmers">
            <div className="shimmerCard">
              <div className="shimmerimg"></div>
              <h4 className="shimmerSpan"></h4>
              <h4 className="shimmerheading"></h4>
              <h4 className="shimmerheading"></h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomeShimmer
