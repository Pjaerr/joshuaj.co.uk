import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import BlogListing from "../components/BlogListing/BlogListing";
import ProjectListing from "../components/ProjectListing/ProjectListing";

import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
