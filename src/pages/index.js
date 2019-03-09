import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { ThemeData, ThemeDispatch } from '../contexts/themeContext'
import Test from '../components/test'
import Background from '../assets/images/hero.jpg'

const backgroundStyle = {
  backgroundImage: `linear-gradient(to right bottom, rgba(186,178,181,0.8), rgba(71,78,93,0.8)),url(${ Background })`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'calc(100vh + 11rem)'
}

const descriptionStyle = {
  position: 'absolute',
  top: '45rem',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center'
}

const IndexPage = ({ location }) => {
  const themeData = useContext(ThemeData)

  useEffect(() => {
    setTimeout(() => {
      console.log('FROM INDEX: ', themeData)
    }, 3000)
  }, [])

  return (
    <Layout location={location}>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <div className="home page-background" style={backgroundStyle}>
        <div style={{ position: 'relative' }}>
          <div className="home-description" style={descriptionStyle}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
      </div>
    </Layout>
  )
} 

export default IndexPage
