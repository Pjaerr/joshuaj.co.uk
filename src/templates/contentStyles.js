import { css } from "styled-components";
import mixins from "../mixins";
import {
  blogHeadingFontSize,
  blogBodyFontSize,
  breakpoints,
  pagePadding,
} from "../constants";

export const selectedElements = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  em,
  b {
    &::selection {
      color: var(--background);
      background-color: var(--headingTextColour);
    }
  }
`;

export const headings = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: ${blogHeadingFontSize.small};

    @media (min-width: ${breakpoints.large}) {
      font-size: ${blogHeadingFontSize.medium};
    }
  }
`;

export const paragraphs = css`
  p {
    font-size: ${blogBodyFontSize.small};
    max-width: 100%;
    word-break: break-word;
    line-height: 30px;

    @media (min-width: ${breakpoints.medium}) {
      font-size: ${blogBodyFontSize.large};
    }
  }
`;

export const links = css`
  a {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const lists = css`
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    max-width: 100%;

    li {
      display: flex;
      -webkit-box-align: baseline;
      align-items: baseline;
      line-height: 32px;
      margin-bottom: 25px;

      div {
        font-size: ${blogBodyFontSize.small};

        @media (min-width: ${breakpoints.medium}) {
          font-size: ${blogBodyFontSize.large};
        }

        p {
          display: inline;
          font-size: inherit;
        }

        * {
          margin-right: 4px;
          margin-left: 4px;
        }
      }
    }
  }

  ul {
    li {
      &::before {
        content: "꘎";
        padding-right: 16px;
        color: var(--highlightColour);
        font-size: ${blogBodyFontSize.large};
        font-weight: bold;
      }
    }
  }

  ol {
    counter-reset: list-number;

    li {
      counter-increment: list-number;

      &::before {
        content: counter(list-number) ".";
        padding-right: 16px;
        color: var(--highlightColour);
        font-size: ${blogBodyFontSize.large};
        font-style: italic;
        font-weight: bold;
      }
    }
  }
`;

export const inlineCodeBlocks = css`
  code {
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export const codeBlocks = css`
  .gatsby-code-title {
    background-color: var(--codeTitleColour);
    color: var(--bodyTextColour);
    padding-top: 0.5em;
    text-align: center;
    padding-bottom: 0.5em;
    margin-bottom: -8px;

    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;

    ${mixins.fullWidth};
  }

  .gatsby-highlight {
    font-weight: 500;

    ${mixins.fullWidth};

    pre {
      border-radius: 0;
    }
  }

  .gatsby-highlight-code-line {
    /* width: calc(100% + (${pagePadding} * 2));

    @media (min-width: ${breakpoints.medium}) {
      width: 100%;
    } */

    /* background-color: var(--codeHighlightColour); */
    display: block;
    padding-right: 1em;
    padding-left: 0.75em;
    margin-left: -1em;
    border-left: 0.25em solid var(--codeHighlightSidebarColour);
  }
`;
