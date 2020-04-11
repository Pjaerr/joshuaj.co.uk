import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPostLayout } from "../components/Layout/Layout";
import SEO from "../components/seo";

import GithubIssueComments from "../components/GithubIssueComments/GithubIssueComments";

import styled from "styled-components";
import {
  blogHeadingFontSize,
  blogBodyFontSize,
  breakpoints,
} from "../constants";

const BlogpostContainer = styled.article`
  max-width: 100%;

  @media (min-width: ${breakpoints.large}) {
    max-width: 50em;
  }
`;

const BlogpostTitle = styled.h1`
  font-size: ${blogHeadingFontSize.medium};

  @media (min-width: ${breakpoints.large}) {
    font-size: ${blogHeadingFontSize.large};
  }
`;

const BlogpostDate = styled.p`
  margin-bottom: 35px;
  @media (min-width: ${breakpoints.medium}) {
    margin-bottom: 70px;
  }
`;

const BlogpostContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
  width: 100%;
  max-width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;

    &::selection {
      color: var(--background);
      background-color: var(--headingTextColour);
    }
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: ${blogHeadingFontSize.small};
  }

  p {
    font-size: ${blogBodyFontSize.small};
    max-width: 100%;
    word-break: break-word;
    line-height: 30px;

    @media (min-width: ${breakpoints.medium}) {
      font-size: ${blogBodyFontSize.large};
    }
  }

  img {
    max-width: 100%;
  }

  p,
  em,
  b {
    &::selection {
      color: var(--background);
      background-color: var(--headingTextColour);
    }
  }

  a {
    font-weight: bold;
  }

  /**This will be extracted out into a MDX component that will handle the styling */
  .gatsby-highlight {
    width: 96vw;
    margin-left: calc(50% - 48vw);

    @media (min-width: ${breakpoints.medium}) {
      width: 100%;
      margin-left: 0;
    }

    pre {
      border-radius: 0;
    }
  }

  ul,
  ol {
    padding-left: 20px;

    li {
      margin-bottom: 15px;

      p {
        font-size: ${blogBodyFontSize.small};

        @media (min-width: ${breakpoints.medium}) {
          font-size: ${blogBodyFontSize.large};
        }
      }

      code {
        white-space: pre-wrap; /* Since CSS 2.1 */
        white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
        white-space: -pre-wrap; /* Opera 4-6 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* Internet Explorer 5.5+ */
      }
    }
  }

  @media (min-width: ${breakpoints.large}) {
    p {
      font-size: ${blogBodyFontSize.large};
    }

    h2 {
      font-size: ${blogHeadingFontSize.medium};
    }
  }
`;

const BlogpostEnd = styled.section``;

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
      <BlogpostContainer>
        <BlogpostTitle>{frontmatter.title}</BlogpostTitle>
        <BlogpostDate>{frontmatter.date}</BlogpostDate>
        <BlogpostContent>
          <MDXRenderer>{body}</MDXRenderer>
        </BlogpostContent>
        <BlogpostEnd>
          <GithubIssueComments issueUri={frontmatter.issueLink} />
          <p>
            If you enjoyed this post you can read my other blog posts here or
            follow me on twitter{" "}
            <a href="https://twitter.com/Pjaerr">@Pjaerr</a>
          </p>
        </BlogpostEnd>
      </BlogpostContainer>
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
