import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/layout'


export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      {
        <div>
          <h1>{node.frontmatter.title}</h1>
          <h2>{node.frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      }
    </Layout>

  )
}

export const query = graphql`
  {
    allMarkdownRemark( 
    filter: { fields: { collection: {eq: "graphics"}}}
    ){
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          html
        }
      }
    }
  }
`