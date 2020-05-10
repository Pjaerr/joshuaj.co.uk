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
    --colour-background: #fff;
    --colour-text-heading: #2a2f36;
    --colour-text-body: #353b48;
    --colour-highlight: #0097A7;
    --colour-mobile-menu-background: rgba(1, 163, 164, 0.99);
    --colour-mobile-menu-text: #fff;
    --colour-mobile-menu-text-hover: #2a2f36;
    --colour-code-highlight: #feb;
    --colour-code-highlight-sidebar: #f99;
    --colour-code-title: #F5F6FA;

    --fontsize-body: 0.75em;

    /*Small*/
    @media (min-width: 480px) {
      
    }

    /*Medium*/
    @media (min-width: 768px) {
      --fontsize-body: 0.875em;
    }

    /*Large*/
    @media (min-width: 980px) {
      --fontsize-body: 1em;
    }



    font-weight: 500;
    background-color: var(--colour-background);
    color: var(--colour-text-body);
    transition-property: background-color, color;
    transition-duration: ${animationSpeed};
    transition-timing-function: ease-out;

    font-size: var(--fontsize-body);
  }

  body.dark {
    --colour-background: #282c35;
    --colour-text-heading: #fff;
    --colour-text-body: #dcdde1;
    --colour-highlight: #01cbcb;
    --colour-mobile-menu-background: rgba(63, 67, 77, 0.99);
    --colour-mobile-menu-text-hover: rgba(1, 163, 164, 0.99);

    --colour-code-highlight: #1e2f3e;
    --colour-code-highlight-sidebar: #fbc531;
    --colour-code-title: #576574;
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
    color: var(--colour-text-heading);
  }

  a {
    color: var(----colour-highlight);
    text-decoration: none;
    transition: color ${animationSpeed} ease;

    &:hover {
      color: var(----colour-text-body);
    }
  }

  main {
    margin-left: ${pagePadding};
    margin-right: ${pagePadding};
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
