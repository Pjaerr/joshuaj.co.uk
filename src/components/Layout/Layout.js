import React from "react"
import PropTypes from "prop-types"

import Navigation from "../Navigation/Navigation"

import "./Layout.scss"

const Layout = ({ activePage, children }) => {
  return (
    <>
      <Navigation activePage={activePage} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
