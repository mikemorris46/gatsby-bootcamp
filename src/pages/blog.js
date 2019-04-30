import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'

function BlogPage () {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(edge => {
          return (
            <li className={blogStyles.post} key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
