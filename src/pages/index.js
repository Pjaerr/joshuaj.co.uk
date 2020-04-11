import React from "react";

import { Layout } from "../components/Layout/Layout";
import SEO from "../components/seo";

import BlogListing from "../components/BlogListing/BlogListing";
import ProjectListing from "../components/ProjectListing/ProjectListing";

import styled from "styled-components";
import { breakpoints } from "../constants";

const Container = styled.div`
  /* Ugly layout for IE10/11 */
  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    display: flex;
  }

  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  justify-items: start;
  grid-template-rows: auto;
  grid-column-gap: 90px;
  grid-row-gap: 80px;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 2.5fr 1fr;
    grid-template-rows: auto;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO lang="en" image="/me.jpg" description="Josh Jackson - @Pjaerr" />
    <Container>
      <BlogListing />
      <ProjectListing />
    </Container>
  </Layout>
);

export default IndexPage;
