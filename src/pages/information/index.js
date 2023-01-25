import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const InformationPage = ({ data }) => (
    <Layout>
      <div className="page-container">
        <div className="page-title">
            <h1>インフォメーション</h1>
        </div>

        {data.allMarkdownRemark.edges.map(({ node }) => 
          <div className="info-card"> 
              <span>{node.frontmatter.date}</span>      
              <h3 className="info-title">
                  <FontAwesomeIcon icon={faExternalLink} />{` `}{node.frontmatter.title}
              </h3>
              <p className="info-content">
              {node.excerpt}
              </p>
              <Link to={`/information${node.fields.slug}`} className="info-link">
                <FontAwesomeIcon icon={faArrowRight} />{` `}詳細はこちら
              </Link>
          </div>
        )}
 
      </div>        
    </Layout>
)

export const Head = () => <Seo title="インフォメーション" />
    
export default InformationPage

export const query = graphql`
query {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        excerpt(pruneLength: 40, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
        }
      }
    }
  }
}
`