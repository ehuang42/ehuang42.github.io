import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default ({data}) => (
  <Layout>
  <div>
    {/* <h1>About {data.site.siteMetadata.title}</h1>  */}
    <h3>About</h3>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`