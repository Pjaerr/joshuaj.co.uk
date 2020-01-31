import React from "react"
import { Link } from "gatsby"

import "./BlogPostAuthor.scss"

const BlogPostAuthor = () => {
  return (
    <aside className="blog-post-author">
      <div className="blog-post-author-content">
        <h1>
          If you enjoyed this post you can read my other blog posts{" "}
          <Link to="/blog">here</Link> or follow me on twitter{" "}
          <a
            href="https://twitter.com/Pjaerr"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Pjaerr
          </a>
        </h1>
      </div>
    </aside>
  )
}

export default BlogPostAuthor
