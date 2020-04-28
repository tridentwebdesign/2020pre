import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import { Helmet } from "react-helmet"


export const pageQuery = graphql`
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
      date(formatString: "YYYY/MM/DD")
      author
    }
  }
}
`

export default function (props) {
  const post = props.data.markdownRemark
  const { frontmatter } = post
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'ja',
        }}
        title={frontmatter.title}
        meta={[
          {
            name: 'description',
            content: props.description || 'Gastbyサンプル'
          }
        ]}
      />
      <Layout>
        {
          <main className="is-full container">
            <section className="section">
              <h2 className="title is-4">{frontmatter.title}</h2>
              <div className="content sentence">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </section>
            <section className="section report">
              <ul>
                <li>投稿日: {frontmatter.date}</li>
                <li>投稿者: {frontmatter.author}</li>
              </ul>
            </section>
          </main>
        }
      </Layout>
    </div>
  )
}