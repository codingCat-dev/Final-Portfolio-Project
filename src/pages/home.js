import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      {/* prettier-ignore */}
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-6 ">
        {allImages.map((src, idx) => (
          <img className={idx % 2 ? "mt-0 lg:h-72 md:mt-10 md:w-full lozad" : "mb-0 md:h-72 md:w-full lg:mb-10 lozad" }
            src={src}
            alt="married couples images"
          />
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
