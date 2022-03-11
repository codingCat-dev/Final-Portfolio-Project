/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="container mx-auto ">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
