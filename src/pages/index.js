import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import Project from "../components/Project/Project";

const IndexPage = () => (
  <Layout>
    <SEO lang="en" title="Home" image="/me.jpg" />

    <Project
      title="Findr"
      description="A Tinder-like web app but for things to do nearby using the Foursquare API."
      technologies={[
        {
          colour: "#61DAFB",
          name: "React",
        },
        {
          colour: "#43853D",
          name: "Node",
        },
      ]}
      gradient={{
        start: "#FF9472",
        end: "#F2709C",
      }}
      githubLink="https://github.com/Pjaerr/Findr"
      demoLink="https://findr-rebuild.netlify.com/"
    />
  </Layout>
);

export default IndexPage;
