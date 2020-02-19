import React, { useEffect, useRef } from "react"

import "./ScrollProgressBar.scss"

const ScrollProgressBar = () => {
  const scrollBar = useRef(null)

  const adjustScrollPosition = () => {
    const windowScroll = document.body.top || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    if (scrollBar.current) {
      scrollBar.current.style.width = `${(windowScroll / height) * 100}%`
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", adjustScrollPosition)
    return () => window.removeEventListener("scroll", adjustScrollPosition)
  }, [])

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" ref={scrollBar}></div>
    </div>
  )
}

export default ScrollProgressBar
