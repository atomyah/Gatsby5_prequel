import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
      <div className="page-container">

        <div className="page-title">
          <h1>会社概要</h1>
        </div>

        <table className="about-table">
            <tr>
                <th>社名</th>
                <td>ヤー・スペーステック合同会社</td>
            </tr>
            <tr>
                <th>本社</th>
                <td>123 Nirvana St. San Francisco, CA, USA 94103</td>
            </tr>
            <tr>
                <th>設立</th>
                <td>2123年1月2日</td>
            </tr>
            <tr>
                <th>代表取締役</th>
                <td>ヤー アトム</td>
            </tr>
            <tr>
                <th>資本金</th>
                <td>$200,000</td>
            </tr>
            <tr>
                <th>売上高</th>
                <td>$4,111,950（2131年12月決算）</td>
            </tr>
            </table>

      </div>
    </Layout>
  )

  export const Head = () => <Seo title="会社概要" />
  
  export default AboutPage