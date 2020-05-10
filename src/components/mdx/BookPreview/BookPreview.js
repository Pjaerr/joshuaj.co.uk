import React from "react";

import * as styled from "./BookPreviewStyles";

const BookPreview = ({ title, author, description, image, length, rating }) => (
  <styled.BookPreviewContainer>
    <img src={image} alt={title + " book cover"} />
    <styled.BookPreviewInfo>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <styled.BookPreviewDescription>
        <p>Description</p>
        <p>{description}</p>
      </styled.BookPreviewDescription>
      <styled.BookPreviewInfoMeta>
        <span>
          <styled.BookPreviewInfoMetaTitle>
            Pages
          </styled.BookPreviewInfoMetaTitle>
          <p>{length}</p>
        </span>
        <span>
          <styled.BookPreviewInfoMetaTitle>
            My Rating
          </styled.BookPreviewInfoMetaTitle>
          <p>{rating}/5</p>
        </span>
      </styled.BookPreviewInfoMeta>
    </styled.BookPreviewInfo>
  </styled.BookPreviewContainer>
);
export default BookPreview;
