import React, { useState, useCallback } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ImageViewer from "react-simple-image-viewer"

const ImageView = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const onOpenViewer = useCallback(index => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const onCloseViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const imgQuery = useStaticQuery(graphql`
    query MyImages {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)/" }
          relativeDirectory: { eq: "portfolio" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const allImages = imgQuery.allFile.edges.map(
    ({ node }) => node.childImageSharp.gatsbyImageData.images.fallback.src
  )

  return (
    <>
      <div className="my-8 px-1 grid grid-cols-2 gap-1 md:grid-cols-3 md:px-0 lg:grid-cols-4 lg:gap-4 lg:my-24">
        {allImages.map((image, index) => (
          <img
            key={index}
            className="cursor-pointer w-full h-full"
            src={image}
            onClick={() => onOpenViewer(index)}
            alt="Portfolio images"
          />
        ))}
        {isViewerOpen && (
          <ImageViewer
            src={allImages}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={onCloseViewer}
          />
        )}
      </div>
    </>
  )
}

export default ImageView
