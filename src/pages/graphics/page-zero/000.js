import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/Layout/layout'


export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout>
      {
        <main className="is-full">
          <section className="section">
            <h2 className="title is-4">node.frontmatter.title</h2>
            <div className="content sentence">
              <p>単位数：2</p>
              <h3 className="title is-5">科目のねらい</h3>
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
                    filter: {fields: {collection: {eq: "graphics-zero"}}}
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