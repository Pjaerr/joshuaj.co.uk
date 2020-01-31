import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ScrollProgressBar from "../components/ScrollProgressBar/ScrollProgressBar"

import "./BlogPostTemplate.scss"
import BlogPostAuthor from "../components/BlogPostAuthor/BlogPostAuthor"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const [scrollPos, setScrollPos] = useState(0)

  const adjustScrollPosition = () => {
    const windowScroll = document.body.top || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    setScrollPos((windowScroll / height) * 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", adjustScrollPosition)

    return () => window.removeEventListener("scroll", adjustScrollPosition)
  }, [])

  return (
    <Layout>
      <SEO
        description={frontmatter.description}
        lang="en"
        title={frontmatter.title}
      />
      <div>
        <ScrollProgressBar width={scrollPos} />
        <div className="blog-post">
          <article className="blog-post-container">
            <h1 className="sub-page-title">{frontmatter.title}</h1>
            <section
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></section>
            <BlogPostAuthor
              name="Josh Jackson"
              twitterUsername="Pjaerr"
              imgSrc="/me.jpg"
            />
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`
