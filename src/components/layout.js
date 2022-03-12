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
      <div className="mt-36"></div>
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
