import React, { lazy, Suspense } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"

import { GatsbyImage } from "gatsby-plugin-image"

const LatestWork = lazy(() => import("../components/latestwork"))
const NiceWords = lazy(() => import("../components/nicewords"))

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
            base
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Domovská stránka" />

      <Header title="Přinutím tě si vzpomenout" />
      <div className="mt-8 text-center font-light px-2 mx-auto lg:w-2/3">
        <p className="my-4 ">
          Jsou okamžiky, které se stanou jen jednou za život, letmá objetí, oči,
          které se blíží k slzám a vytoužená setkání, ze kterých naskakuje husí
          kůže.
        </p>
        <p className="my-4 uppercase">
          protože jsou to příběhy, vzpomínky, momenty a emoce, a nakonec,
          <span className="font-normal">&nbsp;to je život</span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:mt-16 mb-8 lg:grid-cols-6 ">
        {data.allFile.edges.map(({ node: image }, idx) => (
          <GatsbyImage
            alt=""
            key={image.base}
            image={image.childImageSharp.gatsbyImageData}
            className={
              idx % 2
                ? "mt-0 md:max-h-72 md:w-full lg:mt-10"
                : "mb-0 md:max-h-72 md:w-full lg:mb-10"
            }
          />
        ))}
      </div>
      <div className="py-2 text-center  ">
        <Header subTitle="Co Vám mohu nabídnout?" />
        <div className="grid grid-cols-3 gap-2 mt-12">
          <div>
            <Article
              title="Svatební fotografie"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
          <div>
            <Article
              title="Rodinná sezení"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
          <div>
            <Article
              title="Portrétové fotografie"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="font-light">...Načítám</div>}>
        <LatestWork />
      </Suspense>
      <Suspense fallback={<div className="font-light">...Načítám</div>}>
        <NiceWords />
      </Suspense>
    </Layout>
  )
}
export default Home
