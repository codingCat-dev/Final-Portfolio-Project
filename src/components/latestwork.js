import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import Article from "./article"

const LatestWork = () => {
  return (
    <div className="py-4 my-12 text-center ">
      <Header subTitle="Poslední práce" />
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="h-72">
          <StaticImage
            alt="hi"
            src="../images/moments/moment4.jpg"
            className="w-full h-72"
          />

          <div className="my-4">
            <Article title="Svatba Jacka a Alisson" />
          </div>
        </div>
        <div>
          <StaticImage
            alt="hi"
            src="../images/moments/momen3.jpg"
            className="w-full h-72"
          />

          <div className="my-4">
            <Article title="Svatba Brambore a honzy v kostajnici" />
          </div>
        </div>
        <div>
          <StaticImage
            alt="hi"
            src="../images/moments/moment7.jpg"
            className="w-full h-72"
          />

          <div className="my-4">
            <Article title="Svatba Marka a Julie" />
          </div>
        </div>
      </div>
      <div className="my-4">
        <Link
          className="px-6 py-2 uppercase border border-black"
          to="/portfolio"
        >
          Kompletni Portfolio
        </Link>
      </div>
    </div>
  )
}
export default LatestWork
