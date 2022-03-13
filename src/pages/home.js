import React, { lazy, Suspense } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"

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
      <StaticImage
        src="../images/index/rings.jpg"
        alt="Man putting a wedding ring on a woman's finger"
        className="object-cover w-full h-52 lg:h-80"
        loading="lazy"
      />
      <div className="mt-6 md:mt-12 lg:mt-20">
        <Header title="Přinutím tě si" />
        <Header title="vzpomenout" />
      </div>
      <div className="px-2 mx-auto mt-8 text-center md:mt-12 lg:mt-20 lg:w-2/3 lg:px-0">
        <Article
          quote="Jsou okamžiky, které se stanou jen jednou za život, letmá objetí, oči,
          které se blíží k slzám a vytoužená setkání, ze kterých naskakuje husí
          kůže."
        />
        <Article quote="Protože jsou to příběhy, vzpomínky, momenty a emoce, a nakonec," />
        <p className="my-4 text-xl font-normal uppercase md:my-6">
          &nbsp;to je život
        </p>
      </div>

      <div className="grid grid-cols-2 gap-1 mb-8 md:grid-cols-3 md:mt-12 lg:grid-cols-6 ">
        {data.allFile.edges.map(({ node: image }, idx) => (
          <GatsbyImage
            alt="just married couples"
            key={image.base}
            image={image.childImageSharp.gatsbyImageData}
            // prettier-ignore
            className={`mb-0 md:max-h-72 md:w-full ${idx % 2 ? "lg:mt-6" : "lg:mb-6" }`}
          />
        ))}
      </div>
      <div className="relative py-10 mt-16 text-center text-gray-100 bg-gradient-to-l from-gray-800 via-gray-900 to-black">
        <Header subTitle="Co Vám mohu nabídnout?" />
        <div className="grid grid-cols-3 gap-2 px-8 mt-12">
          <div>
            <Article
              title="Vaše vzpomínky"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
          <div className="mt-10">
            <Article
              title="Kvalitu"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
          <div>
            <Article
              title="Tvůrčí schopnosti"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
        </div>
        <div className="my-6">
          <Link className="px-6 py-1 border border-gray-300" to="/contact">
            Pracujme spolu
          </Link>
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
