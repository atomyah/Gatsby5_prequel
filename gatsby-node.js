//「5.3.2 スラグを自動作成させる」本番コード↓
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // console.log(node)
    // console.log(createFilePath({ node, getNode, basePath: `pages` }))
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// 5.3.2 マークダウンファイルのnode情報確認テストコード
{/* 
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node)
  }
}
*/}


// 5.3.2 相対パス作成＆確認テストコード
{/* 
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}
*/}


// Slice APIを使用するためのコード
exports.createPages = async ({ actions }) => {
  actions.createSlice({
    id: `header`,
    component: require.resolve(`./src/components/header.js`),
  })
}