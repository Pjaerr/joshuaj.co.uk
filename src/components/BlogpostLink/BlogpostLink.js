import React from "react";

import styled from "styled-components";
import { animationSpeed, headingFontSize } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 680px;
  min-height: 200px;

  h1 {
    font-size: ${headingFontSize.medium};
    transition: color ${animationSpeed} ease;

    &:hover {
      color: var(--highlightColour);
    }
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const BlogpostLink = ({ title, date, description, href }) => {
  return (
    <Container>
      <a href={href}>
        <h1>{title}</h1>
      </a>
      <p>{date}</p>
      <p>{description}</p>
    </Container>
  );
};

export default BlogpostLink;
