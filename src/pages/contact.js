import React from 'react'
import ContactForm from '../components/contact-form/contact-form'
import Map from '../components/map'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const ContactPage = ({ location }) => {
  const backgroundStyle = {
    position: 'relative',
    backgroundColor: '#fff'
  }
  return (
    <Layout location={location}>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <div className='contact page-background' style={backgroundStyle}>
        <ContactForm />
        <Map />
      </div>
    </Layout>
  )
}

export default ContactPage
