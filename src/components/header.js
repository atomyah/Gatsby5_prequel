import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Script } from "gatsby"

const Header = () => (
  <>
    <nav>
        <Link to="/">
          <figure className="logo">
              <StaticImage
                  src="../images/logo_small.png"
                  width={80}
                  alt="トップ画像"
                  placeholder="blurred"
              />
          </figure>
        </Link>

      <ul className="nav-links">
        <li><Link to="/about">会社概要</Link></li>
        <li><Link to="/jigyou">事業内容</Link></li>
        <li><Link to="/information">インフォメーション</Link></li>
        <li><Link to="/contact">お問い合わせ</Link></li>
      </ul>

      <form method="post" action="#" className="search_container">
            <input type="text" size="25" placeholder="Search.." />
            <input type="submit" value="検索" />
      </form>

      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

    {/* JavaScriptを埋め込み。
        本来はgatsby-browser.jsにonRouteUpdateとして書く。
        しかし新機能Script API.によりページに埋め込むことができるようになった。
      　※本番サイトアップ時に下記URLを変更する必要アリ 
    <Script src="http://localhost:8000/script.js" />
    */}
  </>
)

export default Header

