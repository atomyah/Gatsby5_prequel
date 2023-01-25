import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
    <Layout>
      <div className="page-container">

        <div className="page-title">
          <h1>お問い合わせ</h1>
        </div>

        <form className="Form">
            <div className="Form-Item">
                <p className="Form-Item-Label"><span className="Form-Item-Label-Required">必須</span>お名前</p>
                <input type="text" className="Form-Item-Input" placeholder="例）鈴木太郎" />
            </div>
            <div className="Form-Item">
                <p className="Form-Item-Label"><span className="Form-Item-Label-Required">必須</span>メールアドレス</p>
                <input type="email" className="Form-Item-Input" placeholder="例）atom@yah-space.work" />
            </div>
            <div className="Form-Item">
                <p className="Form-Item-Label isMsg"><span className="Form-Item-Label-Required">必須</span>メッセージ</p>
                <textarea className="Form-Item-Textarea"></textarea>
            </div>
            <div className="Form-Item">
                <p className="Form-Item-Label"></p>
                <button type="submit" className="Form-Btn">送信する</button>
            </div>    
        </form>


      </div>
    </Layout>
  )
  
  export const Head = () => <Seo title="お問い合わせ" description="ヤー・スペーステック㈱へのお問い合わせはこちら" />
  
  export default ContactPage