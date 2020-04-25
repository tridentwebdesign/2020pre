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