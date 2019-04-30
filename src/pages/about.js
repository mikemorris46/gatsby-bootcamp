import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title='About' />
      <h1>About Me</h1>
      <p>
        I'm a grumpy old git who gave up developing mainframe software several
        years ago.
      </p>
      <p>
        I still maintain an interest in development and mainly focus on React,
        although I have looked at other "frameworks" over the years.
      </p>
    </Layout>
  )
}

export default AboutPage
