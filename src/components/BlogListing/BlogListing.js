import React from "react";
import { graphql, useStaticQuery } from "gatsby";

//Components
import BlogpostLink from "../BlogpostLink/BlogpostLink";

//Styles
import styled from "styled-components";
import { animationSpeed, breakpoints } from "../../constants";
import HomepageTitle from "../../styles/HomepageTitle";

const BlogListingContainer = styled.section`
  display: grid;
  grid-row-gap: 60px;
  grid-template-rows: auto;
  justify-content: start;
  align-content: start;

  @media (min-width: ${breakpoints.small}) {
    grid-row-gap: 15px;
  }
`;

const ViewAllPostsLink = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;

  border: 1.5px solid var(--colour-text-body);
  border-radius: 3px;

  transition-property: border-color, color;
  transition-duration: ${animationSpeed};
  transition-timing-function: ease;

  font-weight: bold;

  color: var(--colour-text-body);

  &:hover {
    color: var(--colour-highlight);
    border-color: var(--colour-highlight);
  }
`;

const BlogListing = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 4, sort: { order: DESC, fields: [frontmatter___date] }) {
        totalCount
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

  const numberOfBlogposts = data.allMdx.totalCount;
  const blogposts = data.allMdx.edges
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
    <BlogListingContainer>
      <HomepageTitle>Recent Blogposts</HomepageTitle>
      {blogposts}
      {numberOfBlogposts > 4 && (
        <ViewAllPostsLink href="/blog">View all posts</ViewAllPostsLink>
      )}
    </BlogListingContainer>
  );
};

export default BlogListing;
