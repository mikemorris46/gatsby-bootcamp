import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  const { author } = data.site.siteMetadata

  return (
    <footer className={footerStyles.footer}>
      Created by {author} - &copy; 2019
    </footer>
  )
}

export default Footer
