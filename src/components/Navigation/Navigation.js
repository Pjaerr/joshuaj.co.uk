import React from "react";

import { ThemeToggler } from "gatsby-plugin-dark-mode";

import {
  GithubSVGIcon,
  LinkedInSVGIcon,
  TwitterSVGIcon,
  ThemeSwitcherSVGIcon,
} from "../SVGIcon/SVGIcon";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="navigation-left">
        <a href="/">Josh Jackson</a>
      </span>
      <span className="navigation-right">
        <ul className="navigation-links">
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
              <GithubSVGIcon size="32" />
            </a>
          </li>

          <li>
            <a
              aria-label="LinkedIn Link"
              href="https://www.linkedin.com/in/joshua-jackson-53b9bb14b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInSVGIcon size="32" />
            </a>
          </li>

          <li>
            <a
              aria-label="Twitter Link"
              href="https://twitter.com/Pjaerr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterSVGIcon size="32" />
            </a>
          </li>
        </ul>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="theme-switcher-label">
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                className="theme-switcher-checkbox"
              ></input>
              <ThemeSwitcherSVGIcon theme={theme} />
            </label>
          )}
        </ThemeToggler>
      </span>
    </nav>
  );
};

export default Navigation;
