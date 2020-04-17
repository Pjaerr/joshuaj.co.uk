import React from "react";

import styled from "styled-components";
import mixins from "../../../mixins";
import { blogBodyFontSize, breakpoints } from "../../../constants";

const VideoContainer = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;

  ${mixins.fullWidth};

  video {
    max-width: 100%;
    margin-bottom: 10px;
  }

  figcaption {
    font-family: "Fira Mono";
    font-size: ${blogBodyFontSize.extraSmall};
  }
`;

const Video = ({ src, caption }) => {
  return (
    <VideoContainer>
      <video autoPlay playsInline loop muted controls>
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <figcaption>{caption}</figcaption>
    </VideoContainer>
  );
};

export default Video;
