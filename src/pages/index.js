import React, { useContext, useEffect } from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import '../assets/styles/home.scss'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

// const IndexPage = ({ location }) => {
//   return (
    // <Layout location={location}>
    //   <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    //   <div
    //     className="home page-background"
    //     style={backgroundStyle}
    //   >
    //     <div style={{ position: 'relative' }}>
    //       <div className="home-description">
    //         Hi, my name is Viktoryia. I’m a frontend developer with 2+ years commercial experience in delivering client facing sites I’m passionate about the Web and what it can do, currently focusing on React.js and Gatsby.js. Always looking to learn and improve my skills.
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
//   )
// }

// export default IndexPage
const IndexPage = ({ location, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero-min.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <Layout location={location}>
          <SEO
            title="Home"
            keywords={[`gatsby`, `application`, `react`]}
          />
          <div className="home page-background">
            <BackgroundImage
              Tag="section"
              className={className}
              fluid={imageData}
              backgroundColor={`#040e18`}
            >
              <div style={gradient}>
                <div className="home-description">
                  Hi, my name is Viktoryia. I’m a frontend developer with 2+
                  years commercial experience in delivering client facing
                  sites I’m passionate about the Web and what it can do,
                  currently focusing on React.js and Gatsby.js. Always
                  looking to learn and improve my skills.
                </div>
              </div>
            </BackgroundImage>
          </div>
        </Layout>
      )
    }}
  />
)

const gradient = {
  position: 'relative',
  backgroundImage: 'linear-gradient(to right bottom, rgba(186,178,181,0.8), rgba(71,78,93,0.8))',
  height: '100%'
}

const StyledIndexPage = styled(IndexPage)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh + 11rem);

`

export default StyledIndexPage
