import React, { useState } from "react";

import { ThemeToggler } from "gatsby-plugin-dark-mode";

import * as styled from "./NavigationStyles";

import {
  GithubSVGIcon,
  LinkedInSVGIcon,
  TwitterSVGIcon,
  ThemeSwitcherSVGIcon,
} from "../SVGIcon/SVGIcon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    !isMenuOpen
      ? [document.body, document.documentElement].forEach(elem =>
          elem.classList.add("menu-open")
        )
      : [document.body, document.documentElement].forEach(elem =>
          elem.classList.remove("menu-open")
        );

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <styled.Nav isMenuOpen={isMenuOpen}>
      <styled.NavHeader isMenuOpen={isMenuOpen}>
        <a href="/">Josh Jackson</a>
        <button onClick={toggleMenu}>
          <svg viewBox="0 0 24 24">
            <path
              d={
                isMenuOpen
                  ? "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                  : "M3,6H21V9H3V6M3,15H21V18H3V16Z"
              }
            />
          </svg>
        </button>
      </styled.NavHeader>
      <styled.NavLinks isMenuOpen={isMenuOpen}>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a
              aria-label="Github Link"
              href="https://github.com/pjaerr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubSVGIcon size="48" />
            </a>
          </li>

          <li>
            <a
              aria-label="LinkedIn Link"
              href="https://www.linkedin.com/in/joshua-jackson-53b9bb14b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInSVGIcon size="48" />
            </a>
          </li>

          <li>
            <a
              aria-label="Twitter Link"
              href="https://twitter.com/Pjaerr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterSVGIcon size="48" />
            </a>
          </li>
        </ul>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <styled.ThemeSwitcherLabel>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                className="theme-switcher-checkbox"
              ></input>
              <ThemeSwitcherSVGIcon theme={theme} />
            </styled.ThemeSwitcherLabel>
          )}
        </ThemeToggler>
      </styled.NavLinks>
    </styled.Nav>
  );
};

export default Navigation;
