import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout/Layout"
import ScrollProgressBar from "../components/ScrollProgressBar/ScrollProgressBar"

import "./BlogPostTemplate.scss"
import BlogPostAuthor from "../components/BlogPostAuthor/BlogPostAuthor"
import SEO from "../components/seo"

import GithubIssueComments from "../components/GithubIssueComments/GithubIssueComments"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <SEO
        description={frontmatter.description}
        lang="en"
        title={frontmatter.title}
      />
      <div>
        <ScrollProgressBar />
        <div className="blog-post">
          <article className="blog-post-container">
            <h1 className="sub-page-title">{frontmatter.title}</h1>
            <section className="blog-post-content">
              <MDXRenderer>{body}</MDXRenderer>
            </section>
            <GithubIssueComments issueUri={frontmatter.issueLink} />
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
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        issueLink
      }
    }
  }
`
