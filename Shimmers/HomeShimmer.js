import React from "react"
import "./style.css"

const HomeShimmer = () => {
  return (
    <div className="shimmerContainer">
      <div className="shimmmerheading">
        <h4 className="shimmerheadingSpan shimmerLogo"></h4>
        <div className="searchShimmer"></div>
        <div className="listsShimmer">
          <h4 className="shimmerheadingSpan"></h4>
          <h4 className="shimmerheadingSpan"></h4>
          <h4 className="shimmerheadingSpan"></h4>
        </div>
      </div>
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
    </div>
  )
}

export default HomeShimmer
