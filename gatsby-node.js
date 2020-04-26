const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const sources = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (sources.errors) return

  const posts = sources.data.allMarkdownRemark.edges
  posts.forEach(({ node }) => {
    const outputPath = path.join(`graphics`, node.frontmatter.slug)
    actions.createPage({
      path: outputPath,
      component: path.resolve(__dirname, "./src/templates/PostTemplate.js"),
      context: {
        id: node.id,
      },
    })
  })
}

// MarkdownRemarkのフィールドに引き継ぐ
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  // MarkdownRemarkNodeの場合のみ処処
  if (node && node.internal && node.internal.type === 'MarkdownRemark') {

    // 親のFileNodeを取得して
    const parent = getNode(node.parent)

    // gatsby-config.jsで設定したFileNodeのsourceInstanceNameを
    // MarkdownRemarkのフィールドに引き継ぐ
    // 名前はMarkdownRemarkの他プロパティとかぶらないようにcollectionとしている
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })
  }
};