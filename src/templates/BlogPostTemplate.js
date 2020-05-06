import "../themes/prism-solarizedlight.css";
import "../themes/prism-cobalt2.css";

import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPostLayout } from "../components/Layout/Layout";
import SEO from "../components/seo";

import GithubIssueComments from "../components/GithubIssueComments/GithubIssueComments";
import BlogpostEnd from "../components/BlogpostEnd/BlogpostEnd";

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

        <BlogpostEnd />
        <GithubIssueComments
          issueUri={frontmatter.issueLink}
          commentsPerPage={5}
        />
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
