import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"

const Family = () => {
  const data = useStaticQuery(graphql`
    query Family {
      allFile(filter: { relativeDirectory: { eq: "portfolio/family" } }) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 500
                height: 500
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

  return (
    <div className="px-2.5 md:px-0 mt-6">
      <Gallery images={images} thumbAlt="wedding images" />
    </div>
  )
}
export default Family
