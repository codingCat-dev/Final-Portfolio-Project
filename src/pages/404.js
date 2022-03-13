import * as React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Nenalezeno" />
    <Header
      title="404: Nenalezeno"
      subTitle="Právě jste narazili na trasu, která neexistuje... ten smutek."
    />
    <div className="my-10" />
  </Layout>
)

export default NotFoundPage
