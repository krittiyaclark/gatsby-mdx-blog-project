import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  // console.log(data)
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title="recent published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
