import styled from "styled-components";
import {
  blogHeadingFontSize,
  blogBodyFontSize,
  breakpoints,
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
    max-width: 100%;
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

  /**This will be extracted out into a MDX component that will handle the styling */
  .gatsby-highlight {
    width: 96vw;
    margin-left: calc(50% - 48vw);

    @media (min-width: ${breakpoints.medium}) {
      width: 100%;
      margin-left: 0;
    }

    pre {
      border-radius: 0;
    }
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
