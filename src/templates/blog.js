import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogPost = props => {
  const { title, publishedDate } = props.data.contentfulBlogPost
  const { json } = props.data.contentfulBlogPost.body

  // This will only work when creating an
  // new embed - choosing files from Assets
  // doesn't produce the same structure.
  // Seems the trick may be to add the image
  // to Media first, then when you select the Asset
  // it produces the right structure

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} />
      }
    }
  }

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(json, options)}
    </Layout>
  )
}

export default BlogPost
