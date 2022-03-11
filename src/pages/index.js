import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Alžběta Římanová Photography" />
    <header className="relative overflow-hidden text-center text-gray-100 uppercase bg-black">
      <StaticImage
        src="../images/index/title.jpg"
        alt="camera lens image facing front on dark background"
        className="brightness-50 h-screen opacity-40"
        loading="lazy"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-50 lg:top-1/3">
        <h1 className="px-2 flex flex-col items-center justify-center w-screen md:px-0">
          <span className="opacity-40 text-sm mb-4">
            Profesionální fotografka - V Ostravě a okolí
          </span>
          <span className="font-noto font-bolder text-5xl mb-4">
            Alžběta Římanová
          </span>
          <span className="mb-4">
            Všechny příběhy si zaslouží být vyprávěny, už jste se rozhodli,
            který bude ten váš?
          </span>
        </h1>
        {/* prettier-ignore */}
        <nav className="flex flex-col  items-center justify-center md:flex-row text-gray-400 ">
          <Link to="../home" className="px-2 py-1 m-1 transition-all border border-gray-400 hover:text-gray-100 hover:border-gray-100 hover:px-3">
            Domovská stránka
          </Link>
          <Link to="../portfolio" className="px-2 py-1 m-1 transition-all border border-gray-400 hover:text-gray-100 hover:border-gray-100 hover:px-3">
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  </>
)

export default IndexPage
