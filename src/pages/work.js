import React from 'react'

import Work from '../components/work/work'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { workData } from '../utils/const'

const workStyle = {
  // backgroundColor: '#474e5d'
}

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div className='page-background' style={workStyle}>
      <Work workData={workData} />
    </div>
  </Layout>
)

export default IndexPage
