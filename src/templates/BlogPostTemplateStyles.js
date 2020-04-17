import styled from "styled-components";

import {
  blogHeadingFontSize,
  blogBodyFontSize,
  breakpoints,
} from "../constants";

import * as contentStyles from "./contentStyles";

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

  /** See ./contentStyles.js for element specific styling */
  ${contentStyles.headings}
  ${contentStyles.paragraphs}
  ${contentStyles.selectedElements}
  ${contentStyles.links}
  ${contentStyles.inlineCodeBlocks}
  ${contentStyles.codeBlocks}
  ${contentStyles.lists}
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
