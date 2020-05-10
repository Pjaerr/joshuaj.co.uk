import styled from "styled-components";
import {
  headingFontSize,
  breakpoints,
  pagePadding,
  animationSpeed,
} from "../../constants";

export const Nav = styled.nav`
  transform: ${props =>
    props.isMenuOpen ? `translateY(0px)` : `translateY(-2000px);`};

  transition-property: background-color, color;
  transition-duration: ${animationSpeed};
  transition-timing-function: ease-out;

  background-color: ${props =>
    props.isMenuOpen ? `var(--colour-mobile-menu-background)` : "initial"};

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
    transform: translateX(0px);
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

  transform: ${props =>
    props.isMenuOpen ? `translateY(0px)` : `translateY(2000px);`};

  transition: transform 0s ease-in;

  padding: 20px ${pagePadding} 20px ${pagePadding};

  a {
    justify-self: start;
    font-size: ${headingFontSize.small};
    text-decoration: underline;
    font-weight: bold;
    color: ${props =>
      props.isMenuOpen
        ? `var(--colour-mobile-menu-text)`
        : `var(--colour-text-heading)`};

    font-weight: bold;

    &:hover {
      color: ${props =>
        props.isMenuOpen
          ? `var(--colour-mobile-menu-text-hover)`
          : `var(----colour-highlight)`};
    }
  }

  button {
    justify-self: end;

    background: none;
    outline: none;
    border: none;

    width: 48px;
    height: 48px;
    position: relative;

    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
      fill: ${props =>
        props.isMenuOpen
          ? `var(--colour-mobile-menu-text)`
          : `var(--colour-text-heading)`};
    }
  }

  /**Desktop Navigation */
  @media (min-width: ${breakpoints.medium}) {
    transform: translateX(0px);
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-content: start;

    padding: 0;

    button {
      display: none;
    }

    a {
      color: var(--colour-text-heading);

      &:hover {
        color: var(--colour-highlight);
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
    grid-template-rows: auto auto auto;
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
        color: var(--colour-mobile-menu-text);
        font-weight: bold;

        &:hover {
          color: var(--colour-mobile-menu-text-hover);
        }

        svg {
          fill: var(--colour-mobile-menu-text);

          &:hover {
            fill: var(--colour-mobile-menu-text-hover);
          }
        }
      }
    }
  }

  /**Desktop Navigation */
  @media (min-width: ${breakpoints.medium}) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;

    grid-column-gap: 50px;
    justify-content: end;
    align-items: center;

    ul {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 25px;
      grid-row-gap: 0;
      justify-content: center;
      align-items: center;

      li {
        a {
          font-size: ${headingFontSize.small};
          color: var(--colour-text-heading);
          font-weight: bold;

          &:hover {
            color: var(--colour-highlight);
          }

          svg {
            fill: var(--colour-text-heading);
            width: 32px;
            height: 32px;

            &:hover {
              fill: var(--colour-highlight);
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

export const MenuIcon = styled.span`
  &:before {
    background-color: ${props =>
      props.isMenuOpen
        ? `var(--colour-mobile-menu-text)`
        : `var(--colour-text-heading)`};
    transition: transform 0.2s ease-in;
    content: "";
    width: 26px;
    height: 5px;
    margin-top: ${props => (props.isMenuOpen ? `0` : `-2.5px`)};
    display: inline-block;

    ${props =>
      props.isMenuOpen && `transform: translate(0px,5px) rotate(45deg)`}
  }

  &:after {
    background-color: ${props =>
      props.isMenuOpen
        ? `var(--colour-mobile-menu-text)`
        : `var(--colour-text-heading)`};
    transition: transform 0.25s ease-in;
    content: "";
    width: 26px;
    height: 5px;
    margin-top: ${props => (props.isMenuOpen ? `0` : `-2.5px`)};
    display: inline-block;

    ${props =>
      props.isMenuOpen && `transform: translate(0px, -10px) rotate(-45deg)`}
  }
`;
