import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title='Page not found' />
      <h3>Oops! the requested page does not exist</h3>
      <p>
        <Link to='/'>Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
