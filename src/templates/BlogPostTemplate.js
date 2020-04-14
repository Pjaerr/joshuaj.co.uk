import "../themes/prism-solarizedlight.css";
import "../themes/prism-cobalt2.css";

import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPostLayout } from "../components/Layout/Layout";
import SEO from "../components/seo";

import GithubIssueComments from "../components/GithubIssueComments/GithubIssueComments";

import * as styled from "./BlogPostTemplateStyles";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <BlogPostLayout>
      <SEO
        description={frontmatter.description}
        lang="en"
        title={frontmatter.title}
        image={frontmatter.image}
      />
      <styled.BlogpostContainer>
        <styled.BlogpostTitle>{frontmatter.title}</styled.BlogpostTitle>
        <styled.BlogpostDate>{frontmatter.date}</styled.BlogpostDate>
        <styled.BlogpostContent>
          <MDXRenderer>{body}</MDXRenderer>
        </styled.BlogpostContent>
        <styled.BlogpostEnd>
          <GithubIssueComments issueUri={frontmatter.issueLink} />
          <p>
            If you enjoyed this post you can read my other blog posts here or
            follow me on twitter{" "}
            <a href="https://twitter.com/Pjaerr">@Pjaerr</a>
          </p>
        </styled.BlogpostEnd>
      </styled.BlogpostContainer>
    </BlogPostLayout>
  );
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
`;
