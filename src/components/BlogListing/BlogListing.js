import React from "react";

import BlogpostLink from "../BlogpostLink/BlogpostLink";

import styled from "styled-components";
import { headingFontSize, highlightColour, breakpoints } from "../../constants";

const BlogListingContainer = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 25px;
  justify-content: start;
  align-content: start;
`;

const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 25px;
  font-size: ${headingFontSize.medium};
  color: ${highlightColour};
`;

const BlogListing = () => {
  return (
    <BlogListingContainer>
      <Title>Blogposts</Title>
      <BlogpostLink
        title="Building a Desktop App using Svelte and Electron"
        date="22nd February 2020"
        description="In this blogpost I show you how easy it is to build a basic markdown editor for desktop using Svelte and Electron."
        href="/blog/building-desktop-app-svelte-electron"
      />

      <BlogpostLink
        title="Building a Desktop App using Svelte and Electron"
        date="22nd February 2020"
        description="In this blogpost I show you how easy it is to build a basic markdown editor for desktop using Svelte and Electron."
        href="/blog/building-desktop-app-svelte-electron"
      />

      <BlogpostLink
        title="Building a Desktop App using Svelte and Electron"
        date="22nd February 2020"
        description="In this blogpost I show you how easy it is to build a basic markdown editor for desktop using Svelte and Electron."
        href="/blog/building-desktop-app-svelte-electron"
      />
    </BlogListingContainer>
  );
};

export default BlogListing;
