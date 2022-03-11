import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"

const Home = () => {
  return (
    <Layout>
      <Seo title="domovska stranka" />
      {/* <Header title="Přinutím tě si vzpomenout" subTitle="ciao bella" /> */}
      <div>{/* <h1>home page</h1> */}</div>
      {/* <div className="h-96 mt-36">x</div>
      <div className="h-96 mt-36">x</div>
      <div className="h-96 mt-36">x</div>

      <div className="h-96 mt-36">x</div> */}
    </Layout>
  )
}
export default Home
