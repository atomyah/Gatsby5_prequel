import * as React from "react"
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const InformationPost  = ({ params, data }) => (
    <Layout>
        <div className="page-container">
            {/* ログ表示用
            <p>params:{JSON.stringify(params)}</p>
            <pre>data:{JSON.stringify(data, null, 2)}</pre> 
            */}
                  
            <div className="page-title">
                <h1>{data.markdownRemark.frontmatter.title}</h1>
            </div>
            <table className="about-table">
              <tr>
                <th>
                {data.markdownRemark.frontmatter.date}
                </th>
              </tr>
              <tr>
                <td>
              <div 
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </td>
              </tr>
            </table>
        </div>
    </Layout>
)

export const Head = () => <Seo title="インフォメーション詳細" />

export default InformationPost

export const query = graphql`
query ($id: String!) {
    markdownRemark(id: {eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
      }
    }
  }
`

export async function config() {
  return ({ params }) => {
    return {
      defer: params.fields__slug < "news003",
    }
  }
}
