import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/Layout/layout'


export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      {
        <main className="is-full container">
          <section className="section">
            <h2 className="title is-4">{node.frontmatter.title}</h2>
            <div className="content sentence">
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          </section>
        </main>
      }
    </Layout>

  )
}

export const query = graphql`
  {
    allMarkdownRemark( 
    filter: { fields: { collection: {eq: "graphics-one"}}}
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