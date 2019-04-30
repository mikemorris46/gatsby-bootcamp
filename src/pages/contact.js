import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
            twitter
          }
        }
      }
    `
  )

  const { email, twitter } = data.site.siteMetadata

  return (
    <Layout>
      <Head title='Contact' />
      <h1>Contact Me</h1>
      <p>You can contact me as follows:</p>
      <p>
        <strong>Email</strong>
        <a href='mailto:mike@example.com'>{email}</a>
      </p>
      <p>
        <strong>Twitter</strong>
        <a
          target='_blank'
          title='follow me on Twitter'
          href={twitter}
          rel='noopener noreferrer'
        >
          <img
            alt='follow me on twitter'
            src='https://c866088.ssl.cf3.rackcdn.com/assets/twitter40x40.png'
            border='0'
          />
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
