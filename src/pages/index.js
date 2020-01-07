import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Projects from "../components/Projects/Projects"

const IndexPage = () => (
  <Layout activePage="Home">
    <SEO
      description="Personal Site and Blog for Josh Jackson - @Pjaerr"
      lang="en"
      title="Home"
    />
    <Header title="Josh Jackson" />
    <Projects />
  </Layout>
)

export default IndexPage
