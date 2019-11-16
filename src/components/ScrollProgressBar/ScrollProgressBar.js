import React from "react"

import "./ScrollProgressBar.scss"

const ScrollProgressBar = ({ width }) => {
  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{
          width: width + "%",
        }}
      ></div>
    </div>
  )
}

export default ScrollProgressBar
