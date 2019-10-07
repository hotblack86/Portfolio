import React from 'react';

import GithubAPI from "../components/githubAPI"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects Page" />
    <p>Search my Github Repos below</p>
    <GithubAPI />
  </Layout>

  
)


export default ProjectsPage;