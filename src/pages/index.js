import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home' />
      <h1>Hello from Gatsby IndexPage</h1>
      <h2>I'm Mike and I'm retired</h2>
    </Layout>
  )
}

export default IndexPage
