import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Complete from "../components/complete"

export default function ContactPage() {
    const [value, setValue] = React.useState({})
    const [serverResponse, setServerResponse] = React.useState(``)
      
    // フォームの入力内容をリアルタイムでリッスンし仮保存しておく関数①.
    function handleChange(e) {
        value[e.target.id] = e.target.value
        setServerResponse(``)
        setValue({ ...value })
        console.log(value)
    }

    // フォームが送信されたら、送信処理のために入力内容（values）をapi/send.jsに送る関数②.
    async function onSubmit(e) {
      e.preventDefault()
      const response = await window
      .fetch(`/api/send`, {
          method: `POST`,
          headers: {
          "content-type": "application/json",
          },
          body: JSON.stringify(value),
      })
      .then(res => res.json())
      setServerResponse(response)
      setValue(``) // フォームの入力内容をカラにする.
      console.log(response)
  }

    return (
      <Layout>
        <div className="page-container">
          <div className="page-title">
            <h1>お問い合わせ</h1>
          </div>

          <table className="about-table">
            <tr>
                    { serverResponse ? <Complete /> : null }
            </tr>
          </table>

          <form onSubmit={onSubmit} method="POST" action="/api/send" className="Form">
              <div className="Form-Item">
                  <p className="Form-Item-Label"><span className="Form-Item-Label-Required">必須</span>お名前</p>
                  <input type="text" id="formName" value={value['formName'] || ``} onChange={handleChange} 
                         className="Form-Item-Input" placeholder="例）鈴木太郎" />
              </div>
              <div className="Form-Item">
                  <p className="Form-Item-Label"><span className="Form-Item-Label-Required">必須</span>メールアドレス</p>
                  <input type="email" id="formEmail" value={value['formEmail'] || ``} onChange={handleChange}
                         className="Form-Item-Input" placeholder="例）atom@yah-space.work" />
              </div>
              <div className="Form-Item">
                  <p className="Form-Item-Label isMsg"><span className="Form-Item-Label-Required">必須</span>メッセージ</p>
                  <textarea id="formTextarea" value={value['formTextarea'] || ``} onChange={handleChange}
                            className="Form-Item-Textarea"></textarea>
              </div>
              <div className="Form-Item">
                  <p className="Form-Item-Label"></p>
                  <button type="submit" className="Form-Btn">送信する</button>
              </div>    
          </form>
        </div>
      </Layout>
  )
}
  
export const Head = () => <Seo title="お問い合わせ" description="ヤー・スペーステック㈱へのお問い合わせはこちら" />
