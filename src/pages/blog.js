import React from "react";

import { graphql } from "gatsby";

//Components
import { Layout } from "../components/Layout/Layout";
import SEO from "../components/seo";

import BlogpostLink from "../components/BlogpostLink/BlogpostLink";

//Styles
import styled from "styled-components";
import { headingFontSize, breakpoints } from "../constants";
import HomepageTitle from "../styles/HomepageTitle";

const Container = styled.div`
  display: grid;
  grid-row-gap: 60px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;

  @media (min-width: ${breakpoints.small}) {
    grid-row-gap: 15px;
  }

  h1 {
    font-size: ${headingFontSize.medium};
  }
`;

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const blogposts = edges
    .filter(
      edge => !!edge.node.frontmatter.date && !edge.node.frontmatter.isHidden
    )
    .map(edge => (
      <BlogpostLink
        key={edge.node.id}
        title={edge.node.frontmatter.title}
        date={edge.node.frontmatter.date}
        description={edge.node.frontmatter.description}
        href={edge.node.frontmatter.path}
      />
    ));

  return (
    <Layout>
      <SEO
        lang="en"
        title="Blog"
        image="/me.jpg"
        description="Blog | Josh Jackson - @Pjaerr"
      />
      <Container>
        <HomepageTitle>All Blogposts</HomepageTitle>
        {blogposts}
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
`;

export default BlogPage;
