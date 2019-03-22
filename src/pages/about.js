import React from 'react'

import Timeline from '../components/timeline/timeline'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import { timelineData } from '../utils/const'

const aboutStyle = {
  backgroundColor: '#474e5d'
}

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <div className='about page-background' style={aboutStyle}>
        <Timeline timelineData={timelineData}/>
      </div>
    </Layout>
  )
}

export default IndexPage
