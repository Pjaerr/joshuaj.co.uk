import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import BlogListing from "../components/BlogListing/BlogListing";
import ProjectListing from "../components/ProjectListing/ProjectListing";

import styled from "styled-components";
import { breakpoints } from "../constants";

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  justify-items: start;
  grid-template-rows: auto;
  grid-column-gap: 50px;

  margin-bottom: 120px;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO lang="en" title="Home" image="/me.jpg" />
    <Container>
      <BlogListing />
      <ProjectListing />
    </Container>
  </Layout>
);

export default IndexPage;
