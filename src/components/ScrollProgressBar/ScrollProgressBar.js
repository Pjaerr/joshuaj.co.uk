import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import { highlightColour } from "../../constants";

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: var(--background);
  height: 4px;

  div {
    height: 4px;
    background: var(--highlightColour);
    width: 0%;
  }
`;

const ScrollProgressBar = () => {
  const scrollBar = useRef(null);

  const adjustScrollPosition = () => {
    const windowScroll =
      document.body.top || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollBar.current) {
      scrollBar.current.style.width = `${(windowScroll / height) * 100}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", adjustScrollPosition);
    return () => window.removeEventListener("scroll", adjustScrollPosition);
  }, []);

  return (
    <Container>
      <div ref={scrollBar}></div>
    </Container>
  );
};

export default ScrollProgressBar;
