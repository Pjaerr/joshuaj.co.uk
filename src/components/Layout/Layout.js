import React from "react";
import PropTypes from "prop-types";

import Navigation from "../Navigation/Navigation";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <header className="layout-header">
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
