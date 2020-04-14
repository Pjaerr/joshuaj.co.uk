import React from "react";

const Image = ({ src, alt }) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />

      <img src={`${src}.jpg`} type="image/jpeg" alt={alt} />
    </picture>
  );
};

export default Image;
