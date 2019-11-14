import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>I'm a full-stack junior software developer with a particular interest in Javascript.</p>
    <p>
      I am looking to start a career in the tech industry of Brighton or London where I can further grow as a Full-Stack developer and contribute to the success and innovation of a company therein.
      </p>
  </Layout>
)


export default AboutPage;