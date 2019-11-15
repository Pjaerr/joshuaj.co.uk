import React from "react"
import { Link } from "gatsby"

import "./BlogPostLink.scss"

const BlogPostLink = ({ post }) => (
  <div class="blog-post-preview">
    <Link class="blog-post-preview-title" to={post.frontmatter.path}>
      <h2>{post.frontmatter.title}</h2>
    </Link>
    <p class="blog-post-preview-date-container">
      Date: <span class="blog-post-preview-date">{post.frontmatter.date}</span>
    </p>
    <p class="blog-post-preview-description">{post.frontmatter.description}</p>
  </div>
)
export default BlogPostLink
