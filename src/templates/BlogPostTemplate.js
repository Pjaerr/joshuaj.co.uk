import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ScrollProgressBar from "../components/ScrollProgressBar/ScrollProgressBar"
import GithubIssueComments from "../components/GithubIssueComments/GithubIssueComments"

import "./BlogPostTemplate.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <SEO
        description={frontmatter.description}
        lang="en"
        title={frontmatter.title}
        image={frontmatter.image}
      />
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
        image
      }
    }
  }
`
