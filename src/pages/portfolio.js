import React, { lazy, Suspense } from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Link } from "gatsby"

const ImageView = lazy(() => import("../components/imageView"))
const Portfolio = () => {
  return (
    <Layout>
      <Header title="Moja práce" subTitle="..atd" />
      <Suspense fallback={<div>...loading</div>}>
        <ImageView />
      </Suspense>
      <div className="my-6 text-center">
        <Link to="/contact" className="px-6 py-1  border border-black">
          Pracujme spolu
        </Link>
      </div>
    </Layout>
  )
}
export default Portfolio
