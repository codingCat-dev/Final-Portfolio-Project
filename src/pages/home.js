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
        <Header subTitle="Služby co vám mohu nabídnout" />
        <div className="grid items-center grid-cols-12 gap-6 px-8 mt-12">
          <div className="flex flex-col items-center justify-center col-span-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 my-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Article
              title="Portréty"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
          <div className="flex flex-col items-center justify-center col-span-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 my-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <Article
              title="Profesionální vybavení"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
          <div className="flex flex-col items-center justify-center col-span-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 my-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <Article
              title="Skupinové fotografie"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
          <div className="flex flex-col items-center justify-center col-span-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 my-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <Article
              title="Vzpomínky"
              quote="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Consequatur facere culpa temporibus tenetur ducimus inventore."
            />
          </div>
        </div>
        <div className="my-12">
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
