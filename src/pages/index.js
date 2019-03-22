import React, { useContext, useEffect } from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Background from '../assets/images/hero-min.jpg'
import '../assets/styles/home.scss'

const backgroundStyle = {
  backgroundImage: `linear-gradient(to right bottom, rgba(186,178,181,0.8), rgba(71,78,93,0.8)),url(${ Background })`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'calc(100vh + 11rem)'
}

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <div className="home page-background" style={backgroundStyle}>
        <div style={{ position: 'relative' }}>
          <div className="home-description">
          Hi, my name is Viktoryia. I’m a frontend developer. I’m passionate about the Web and what it can do, currently focusing on React.js and Gatsby.js. Always looking to learn and improve my skills.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
