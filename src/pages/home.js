import React, { Suspense, lazy } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"

const Home = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)/" }
          relativeDirectory: { eq: "moments" }
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

  const allImages = data.allFile.edges.map(
    ({ node }) => node.childImageSharp.gatsbyImageData.images.fallback.src
  )

  return (
    <Layout>
      <Seo title="Domovská stránka" />
      <Header title="Přinutím tě si vzpomenout" />
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-6 ">
        {allImages.map((src, idx) => (
          <div key={`image-${idx}`}>
            <img
              className={
                idx % 2
                  ? "mt-0 md:max-h-72 md:w-full lg:mt-10"
                  : "mb-0 md:max-h-72 md:w-full lg:mb-10"
              }
              src={src}
              alt="married couples images"
            />
          </div>
        ))}
      </div>
      <Article
        quote="Jsou okamžiky, které se stanou jen jednou za život, letmá objetí, oči,
          které se blíží k slzám a vytoužená setkání, ze kterých naskakuje husí
          kůže."
        subQuote="protože jsou to příběhy, vzpomínky, momenty a emoce, a nakonec,"
        quoteBold="to je život"
      />
    </Layout>
  )
}
export default Home
