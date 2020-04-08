import React from "react";

// import "./BookPreview.scss"

const BookPreview = ({ title, author, description, image, length, rating }) => (
  <div className="book-preview-component">
    <img src={image} alt={title + " book cover"} />
    <div className="book-preview-component-info">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <div className="book-preview-component-info-description">
        <p className="book-preview-component-info-description-title">
          Description
        </p>
        <p>{description}</p>
      </div>
      <div className="book-preview-component-info-meta">
        <span>
          <p className="book-preview-component-info-meta-title">Pages</p>
          <p>{length}</p>
        </span>
        <span>
          <p className="book-preview-component-info-meta-title">My Rating</p>
          <p>{rating}/5</p>
        </span>
      </div>
    </div>
  </div>
);
export default BookPreview;
