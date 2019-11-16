import React from "react"

import "./BlogPostAuthor.scss"

const BlogPostAuthor = ({ name, twitterUsername, imgSrc }) => {
  return (
    <aside className="blog-post-author">
      <div className="blog-post-author-content">
        <img
          className="blog-post-author-image"
          src={imgSrc}
          alt={"Image of " + name}
        />
        <h1 className="blog-post-author-name">
          Written By {name} <br></br>
          <br></br>
          <a href={"https://twitter.com/" + twitterUsername} target="_blank">
            @{twitterUsername}
          </a>
        </h1>
      </div>
    </aside>
  )
}

export default BlogPostAuthor
