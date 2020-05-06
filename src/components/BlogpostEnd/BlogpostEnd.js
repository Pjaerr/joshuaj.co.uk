import React from "react";

import styled from "styled-components";
import { breakpoints, blogBodyFontSize } from "../../constants";

const Container = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: bold;
    text-align: center;
    font-size: ${blogBodyFontSize.small};

    @media (min-width: ${breakpoints.medium}) {
      font-size: ${blogBodyFontSize.large};
    }
  }
`;

const BlogpostEnd = () => {
  return (
    <Container>
      <p>Congrats, you made it! 🎉</p>
      <p>
        If you enjoyed this post you can read my other blog posts{" "}
        <a href="/blog">here</a> or follow me on twitter{" "}
        <a href="https://twitter.com/Pjaerr">@Pjaerr</a>
      </p>
    </Container>
  );
};

export default BlogpostEnd;
