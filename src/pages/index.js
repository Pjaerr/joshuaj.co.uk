import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import ProjectListing from "../components/ProjectListing/ProjectListing";

const IndexPage = () => (
  <Layout>
    <SEO lang="en" title="Home" image="/me.jpg" />
    <ProjectListing />
  </Layout>
);

export default IndexPage;
