import React from 'react'
import Helmet from 'react-helmet'
import Context from '../../context'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../../assets/styles/index.scss'

import Header from '../header/header'
import Footer from '../footer/footer'
import ProgressBar from '../progress-bar/progress-bar'
import Modal from '../modal/modal'
import './layout.scss'

import { useInterval, useScrollElement } from '../../utils/hooks'
import { ScrollProgressDispatch } from '../../contexts/scrollProgressContext'

const Layout = ({ children, location }, ref) => {
  const headerRef = React.createRef()
  const scrollContainerRef = React.createRef()

  useScrollElement(headerRef, scrollContainerRef, { className: 'hidden' })

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js'></script>
            <script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css' rel='stylesheet' />
          </Helmet>
          <Context location={location}>
            <ProgressBar scrollContainerRef={scrollContainerRef}/>
            <Header ref={headerRef} siteTitle={data.site.siteMetadata.title} />
            <main>
              <div className="parent-container">
                <div className="scroll-container" ref={scrollContainerRef}>
                  <div className="content-container">
                    {children}
                    <Footer />
                  </div>
                </div>
              </div>
            </main>
            <Modal />
          </Context>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
