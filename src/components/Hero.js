import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showPerson }) => {
  const { person } = useStaticQuery(query)
  // console.log(person)
  return (
    <header className="hero">
      {showPerson && (
        <Image fluid={person.childImageSharp.fluid} className="hero-person" />
      )}
    </header>
  )
}

export default Hero
