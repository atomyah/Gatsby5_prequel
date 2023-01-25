import * as React from "react"
import Layout from "../components/layout"
import * as styles from "./test_cssmod.module.css"

const CSSModuleTest = () => (
  <Layout>
    <h1 className={styles.title}>CSS Modulesのテストです</h1>
  </Layout>
)

export default CSSModuleTest