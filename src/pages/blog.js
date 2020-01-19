import React from 'react'
import { Link } from "gatsby"

const blogPage = () => {
    <div>
        <h1>Latest Post</h1>
    </div>
}

export const pageQuery = graphql `
 query BlogIndexQuery {
    allMarkdownRemark{
    edges{
      node{
        frontmatter{
          path
          title
          date
          author
        }
      }
    }
  }
 }
`

export default blogPage