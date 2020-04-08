import React from "react";

import styled from "styled-components";
import { highlightColour, animationSpeed } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  height: 200px;
  max-height: 200px;

  h1 {
    transition: color ${animationSpeed} ease-out;
    &:hover {
      color: ${highlightColour};
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
