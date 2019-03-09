import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import Timeline from '../components/timeline/timeline'
import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { timelineData } from '../utils/const'

const aboutStyle = {
  backgroundColor: '#474e5d'
  // background: 'linear-gradient(to right bottom, rgba(186,178,181,1), rgba(71,78,93,1))',
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
