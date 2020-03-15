import React from "react"
import PropTypes from "prop-types"

import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
