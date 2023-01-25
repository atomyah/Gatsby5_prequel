import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ siteTitle }) => (
  <>
    <pre className="footer">© {new Date().getFullYear()} &middot; { siteTitle }
    <br />
    このサイトは書籍「Gatsby5～でつくるコーポレートサイト」前編・後編のサンプルデモサイトです.
    </pre>
  </>
)

export default Footer
