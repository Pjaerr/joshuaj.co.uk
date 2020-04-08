import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import BlogListing from "../components/BlogListing/BlogListing";
import ProjectListing from "../components/ProjectListing/ProjectListing";

import styled from "styled-components";
import { breakpoints } from "../constants";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
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
