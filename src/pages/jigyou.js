import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const JigyouPage = () => (
    <Layout>
      <div className="page-container">

        <div className="page-title">
          <h1>事業内容</h1>
        </div>

        <div className="card-container">
            <section className="card">
                <StaticImage className="card-img" src="../images/jigyo1.jpg" alt="" />
                <div className="card-content">
                    <h1 className="card-title">軌道上デブリ除去</h1>
                    <p className="card-text">軌道上または航行導線上のデブリを安全除去します。弊社が開発した「次元蒸発粉砕除去法」により、物質空間にデブリの残骸を残しません。</p>
                </div>
                <div className="card-link">
                    <a href="#">もっと詳しく</a>
                </div>       
            </section>
            <section className="card">
                <StaticImage className="card-img" src="../images/jigyo2.jpg" alt="" />
                <div className="card-content">
                    <h1 className="card-title">テレポーテーションゲート開設</h1>
                    <p className="card-text">テレポーテーション用のトンネルゲート開設業務を承ります。管轄当局への手続き全般もすべて弊社にお任せください。</p>
                </div>
                <div className="card-link">
                    <a href="#">もっと詳しく</a>
                </div>   
            </section>
            <section className="card">
                <StaticImage className="card-img" src="../images/jigyo3.jpg" alt="" />
                <div className="card-content">
                    <h1 className="card-title">業子力学での量子コントロール</h1>
                    <p className="card-text">弊社ラボでは業子力学による量子コントロール実験を科学庁からの委託され、実績をあげております。来年度の実用化を目指しております。</p>
                </div>
                <div className="card-link">
                    <a href="#">もっと詳しく</a>
                </div>   
            </section>
          </div>


      </div>
    </Layout>
  )

  export const Head = () => <Seo title="事業内容" />
  
  export default JigyouPage
