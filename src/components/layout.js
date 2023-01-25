import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import  Header from "./header"
import  Footer from "./footer"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
          siteMetadata {
            title
          }
        }
      }
    `)

  return (
    <>
      <Slice alias="header" />
      <div>
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout