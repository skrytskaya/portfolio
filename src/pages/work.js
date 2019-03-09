import React from 'react'
import { Link } from 'gatsby'

import Timeline from '../components/timeline/timeline'

import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { timelineData } from '../utils/const'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Timeline timelineData={timelineData} />
  </Layout>
)

export default IndexPage
