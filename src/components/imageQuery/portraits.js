import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "@browniebroke/gatsby-image-gallery"

const Portraits = () => {
  const data = useStaticQuery(graphql`
    query Portraits {
      allFile(filter: { relativeDirectory: { eq: "portfolio/portraits" } }) {
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
    <>
      <div className="px-3 md:px-0">
        <Gallery images={images} thumbAlt="wedding images" />
      </div>
    </>
  )
}
export default Portraits