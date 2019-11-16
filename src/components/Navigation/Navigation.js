import React from "react"
import { Link } from "gatsby"

import "./Navigation.scss"

const Navigation = ({ activePage }) => {
  const classNames = {
    home: activePage === "Home" ? "link-active" : "",
    blog: activePage === "Blog" ? "link-active" : "",
  }

  return (
    <div className="navigation">
      <Link to="/" className={classNames.home}>
        Home
      </Link>
      <Link to="/blog" className={classNames.blog}>
        Blog
      </Link>
    </div>
  )
}

export default Navigation
