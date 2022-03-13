import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import Article from "./article"

const LatestWork = () => {
  return (
    <div className="py-4 mt-12 mb-12 text-center  ">
      <Header subTitle="Poslední práce" />
      <div className="grid grid-cols-3 gap-2 mt-12">
        <div>
          <StaticImage
            alt="hi"
            src="../images/moments/moment4.jpg"
            height={500}
          />
          <div className="my-4">
            <Article title="Svatba Jacka a Alisson" />
          </div>
        </div>
        <div>
          <StaticImage
            alt="hi"
            src="../images/moments/momen3.jpg"
            height={500}
          />
          <div className="my-4">
            <Article title="Svatba Brambore a honzy v kostajnici" />
          </div>
        </div>
        <div>
          <StaticImage
            alt="hi"
            src="../images/moments/moment7.jpg"
            height={500}
          />
          <div className="my-4">
            <Article title="Svatba Marka a Julie" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestWork
