const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const sources = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              category
            }
          }
        }
      }
    }
  `)
  if (sources.errors) return

  const posts = sources.data.allMarkdownRemark.edges
  posts.forEach(({ node }) => {
    const category = String(node.frontmatter.category)
    const outputPath = path.join(category, node.frontmatter.slug)
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
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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