import styled from "styled-components";

import mixins from "../mixins";

import {
  blogHeadingFontSize,
  blogBodyFontSize,
  breakpoints,
  pagePadding,
} from "../constants";

export const BlogpostContainer = styled.article`
  max-width: 100%;

  @media (min-width: ${breakpoints.large}) {
    max-width: 50em;
  }
`;

export const BlogpostTitle = styled.h1`
  font-size: ${blogHeadingFontSize.medium};

  @media (min-width: ${breakpoints.small}) {
    font-size: ${blogHeadingFontSize.large};
  }
`;

export const BlogpostDate = styled.p`
  margin-bottom: 35px;
  @media (min-width: ${breakpoints.medium}) {
    margin-bottom: 70px;
  }
`;

export const BlogpostContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
  width: 100%;
  max-width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;

    &::selection {
      color: var(--background);
      background-color: var(--headingTextColour);
    }
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: ${blogHeadingFontSize.small};
  }

  p {
    font-size: ${blogBodyFontSize.small};
    max-width: 100%;
    word-break: break-word;
    line-height: 30px;

    @media (min-width: ${breakpoints.medium}) {
      font-size: ${blogBodyFontSize.large};
    }
  }

  img {
    ${mixins.fullWidth};

    @media (min-width: ${breakpoints.medium}) {
      ${mixins.constrainedWidth};
    }
  }

  p,
  em,
  b {
    &::selection {
      color: var(--background);
      background-color: var(--headingTextColour);
    }
  }

  a {
    font-weight: bold;
    text-decoration: underline;
  }

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

    @media (min-width: ${breakpoints.medium}) {
      ${mixins.constrainedWidth};
    }
  }

  .gatsby-highlight {
    ${mixins.fullWidth};

    @media (min-width: ${breakpoints.medium}) {
      ${mixins.constrainedWidth};
    }

    pre {
      border-radius: 0;
    }
  }

  .gatsby-highlight-code-line {
    width: 100%;
    background-color: var(--codeHighlightColour);
    display: block;
    padding-right: 1em;
    padding-left: 0.75em;
    margin-left: -1em;
    border-left: 0.25em solid var(--codeHighlightSidebarColour);
  }

  /** Styled Numbers on Ordered Lists */
  ol {
    list-style: none;
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

  ul {
    list-style: none;

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

  ul,
  ol {
    padding-left: 0;
    max-width: 100%;

    li {
      display: flex;
      -webkit-box-align: baseline;
      align-items: baseline;
      line-height: 32px;
      margin-bottom: 25px;

      font-size: ${blogBodyFontSize.small};

      @media (min-width: ${breakpoints.medium}) {
        font-size: ${blogBodyFontSize.large};
      }

      p {
        display: inline;
        font-size: inherit;
      }

      * {
        margin-right: 2.5px;
        margin-left: 2.5px;
      }

      code {
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word; /* Internet Explorer 5.5+ */
      }
    }
  }

  @media (min-width: ${breakpoints.large}) {
    p {
      font-size: ${blogBodyFontSize.large};
    }

    h2 {
      font-size: ${blogHeadingFontSize.medium};
    }
  }
`;

export const BlogpostEnd = styled.section``;

export const BlogpostEndLinks = styled.p`
  margin-top: 120px;
  text-align: center;
  font-size: ${blogBodyFontSize.small};

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${blogBodyFontSize.large};
  }
`;
