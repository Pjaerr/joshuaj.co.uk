import styled from "styled-components";
import {
  headingFontSize,
  highlightColour,
  breakpoints,
  pagePadding,
  animationSpeed,
} from "../../constants";

export const Nav = styled.nav`
  transition: background-color ${animationSpeed} ease-out;
  background-color: ${props =>
    props.isMenuOpen ? `var(--overlayBackground)` : "initial"};

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  padding: 0;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 20px;

  /**Desktop Navigation */
  @media (min-width: ${breakpoints.medium}) {
    transition: background-color 0s ease-out;
    background-color: initial;
    position: relative;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 20px ${pagePadding} 20px ${pagePadding};
  }
`;

export const NavHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;

  padding: 20px ${pagePadding} 20px ${pagePadding};

  a {
    justify-self: start;
    font-size: ${headingFontSize.small};
    text-decoration: underline;
    font-weight: bold;
    color: ${props =>
      props.isMenuOpen
        ? `var(--mobileNavTextColour)`
        : `var(--headingTextColour)`};

    font-weight: bold;

    &:hover {
      color: ${props =>
        props.isMenuOpen ? `var(--mobileNavTextHoverColour)` : highlightColour};
    }
  }

  button {
    justify-self: end;

    background: none;
    outline: none;
    border: none;

    width: 32px;
    height: 32px;

    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
      fill: ${props =>
        props.isMenuOpen
          ? `var(--mobileNavTextColour)`
          : `var(--headingTextColour)`};
    }
  }

  /**Desktop Navigation */
  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
    justify-content: start;

    padding: 0;

    button {
      display: none;
    }

    a {
      color: var(--headingTextColour);

      &:hover {
        color: ${highlightColour};
      }
    }
  }
`;

export const NavLinks = styled.div`
  display: ${props => (props.isMenuOpen ? `grid` : `none`)};
  grid-template-rows: 3fr 1fr;
  grid-row-gap: 25px;

  ul {
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-row-gap: 25px;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 auto;

      a {
        font-size: ${headingFontSize.large};
        color: var(--mobileNavTextColour);
        font-weight: bold;

        &:hover {
          color: var(--mobileNavTextHoverColour);
        }

        svg {
          fill: var(--mobileNavTextColour);

          &:hover {
            fill: var(--mobileNavTextHoverColour);
          }
        }
      }
    }
  }

  /**Desktop Navigation */
  @media (min-width: ${breakpoints.medium}) {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 25px;
    grid-row-gap: 0;
    justify-content: end;
    align-items: center;

    ul {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 25px;
      grid-row-gap: 0;
      justify-content: center;
      align-items: center;

      li {
        a {
          font-size: ${headingFontSize.small};
          color: var(--headingTextColour);
          font-weight: bold;

          &:hover {
            color: ${highlightColour};
          }

          svg {
            fill: var(--headingTextColour);
            width: 32px;
            height: 32px;

            &:hover {
              fill: ${highlightColour};
            }
          }
        }
      }
    }
  }
`;

export const ThemeSwitcherLabel = styled.label`
  align-self: center;
  justify-self: center;

  &:hover {
    cursor: pointer;
  }

  input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /**Desktop Navigation */
  @media (min-width: ${breakpoints.medium}) {
    margin-bottom: 5px;
  }
`;
