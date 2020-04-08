import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components/macro";
import { highlightColour, pagePadding, animationSpeed } from "../../constants";

import Navigation from "../Navigation/Navigation";

const GlobalStyles = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "IBM Plex Sans", sans-serif;
  }

  body {
    --background: #fff;
    --headingTextColour: #2a2f36;
    --bodyTextColour: #353b48;
    --overlayBackground: rgba(1, 163, 164, 0.99);
    --mobileNavTextColour: #fff;
    --mobileNavTextHoverColour: #2a2f36;

    font-weight: 500;
    background-color: var(--background);
    color: var(--bodyTextColour);
    transition-property: background-color, color;
    transition-duration: ${animationSpeed};
    transition-timing-function: ease-out;
  }

  body.dark {
    --background: #282c35;
    --headingTextColour: #fff;
    --bodyTextColour: #dcdde1;
    --overlayBackground: rgba(63, 67, 77, 0.99);
    --mobileNavTextHoverColour: rgba(1, 163, 164, 0.99);
  }

  html.menu-open,
  body.menu-open {
    height: 100%;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--headingTextColour);
  }

  a {
    color: ${highlightColour};
    text-decoration: none;
    transition: color ${animationSpeed} ease-out;

    &:hover {
      color: var(--bodyTextColour);
    }
  }

  main {
    padding-left: ${pagePadding};
    padding-right: ${pagePadding};
  }

  .layout-header {
    height: 80px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
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
