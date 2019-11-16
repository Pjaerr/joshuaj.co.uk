import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import BlogPostLink from "../components/BlogPostLink/BlogPostLink"

import "./blog.scss"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(
      edge => !!edge.node.frontmatter.date && !edge.node.frontmatter.isHidden
    )
    .map(edge => <BlogPostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout activePage="Blog">
      <SEO
        description="Blog for Josh Jackson - @Pjaerr"
        lang="en"
        title="Blog - Josh Jackson | @Pjaerr"
      />
      <h1 className="blog-listing-title">Blog</h1>
      <div className="blog-posts">
        {Posts.length > 0 ? Posts : "🙃 No blog posts found!"}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            isHidden
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`
