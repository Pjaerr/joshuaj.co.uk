import React from "react";
import { graphql, useStaticQuery } from "gatsby";

//Components
import BlogpostLink from "../BlogpostLink/BlogpostLink";

//Styles
import styled from "styled-components";

import HomepageTitle from "../../styles/HomepageTitle";

const BlogListingContainer = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 25px;
  justify-content: start;
  align-content: start;
`;

const BlogListing = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const blogposts = data.allMdx.edges.filter(
    edge => !!edge.node.frontmatter.date && !edge.node.frontmatter.isHidden
  ).map(edge => <BlogpostLink key={edge.node.id} title={edge.node.frontmatter.title} date={edge.node.frontmatter.date} description={edge.node.frontmatter.description} href={edge.node.frontmatter.path} />);

  return (
    <BlogListingContainer>
      <HomepageTitle>Blogposts</HomepageTitle>
      {blogposts}
    </BlogListingContainer>
  );
};

export default BlogListing;
