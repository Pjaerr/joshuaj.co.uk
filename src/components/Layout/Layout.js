import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import {
  pagePadding,
  animationSpeed,
  bodyFontSize,
  breakpoints,
} from "../../constants";

import Navigation from "../Navigation/Navigation";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";

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
    --highlightColour: #0097A7;
    --overlayBackground: rgba(1, 163, 164, 0.99);
    --mobileNavTextColour: #fff;
    --mobileNavTextHoverColour: #2a2f36;

    font-weight: 500;
    background-color: var(--background);
    color: var(--bodyTextColour);
    transition-property: background-color, color;
    transition-duration: ${animationSpeed};
    transition-timing-function: ease-out;

    font-size: ${bodyFontSize.large}
  }

  body.dark {
    --background: #282c35;
    --headingTextColour: #fff;
    --bodyTextColour: #dcdde1;
    --highlightColour: #01cbcb;
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
    margin: 0;
    color: var(--headingTextColour);
  }

  a {
    color: var(--highlightColour);
    text-decoration: none;
    transition: color ${animationSpeed} ease;

    &:hover {
      color: var(--bodyTextColour);
    }
  }

  main {
    padding-left: ${pagePadding};
    padding-right: ${pagePadding};
    margin-bottom: 120px;
  }

  main.blogpost-layout {

    @media (min-width: ${breakpoints.medium}) {

    display: flex;
    justify-content: center;
    }
  }

  .layout-header {
    height: 120px;
  }
`;

export const Layout = ({ children }) => {
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

export const BlogPostLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <header className="layout-header">
        <Navigation />
      </header>
      <ScrollProgressBar />
      <main className="blogpost-layout">{children}</main>
    </>
  );
};

BlogPostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
