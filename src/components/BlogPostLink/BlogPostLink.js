import React from "react"
import { Link } from "gatsby"

import "./BlogPostLink.scss"

const BlogPostLink = ({ post }) => (
  <div className="blog-post-preview">
    <Link className="blog-post-preview-title" to={post.frontmatter.path}>
      <h2>{post.frontmatter.title}</h2>
    </Link>
    <p className="blog-post-preview-date-container">
      Date:{" "}
      <span className="blog-post-preview-date">{post.frontmatter.date}</span>
    </p>
    <p className="blog-post-preview-description">
      {post.frontmatter.description}
    </p>
  </div>
)
export default BlogPostLink
