import React from "react";

import styled from "styled-components";
import mixins from "../../../mixins";

const ImageElement = styled.img`
  ${mixins.fullWidth};
`;

const Image = ({ src, alt }) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />

      <ImageElement src={`${src}.jpg`} type="image/jpeg" alt={alt} />
    </picture>
  );
};

export default Image;
