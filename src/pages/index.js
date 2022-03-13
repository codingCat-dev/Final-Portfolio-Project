import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Alžběta Římanová Photography" />

    <header className="relative overflow-hidden text-center text-gray-300 uppercase bg-black">
      <StaticImage
        src="../images/index/imgimg.jpg"
        alt="camera facing front on dark background"
        className="brightness-50 h-screen opacity-40"
        loading="lazy"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-50 lg:top-1/3">
        <h1 className="px-2 flex flex-col items-center justify-center w-screen md:px-0">
          <span className="opacity-40 mb-8">
            Profesionální fotografka - V Ostravě a okolí
          </span>
          <span className="font-noto font-bolder text-5xl md:text-6xl mb-8">
            Alžběta Římanová
          </span>
          <span className="mb-8">
            Všechny příběhy si zaslouží být vyprávěny, už jste se rozhodli,
            který bude ten váš?
          </span>
        </h1>
        {/* prettier-ignore */}
        <nav>
          <ul className="flex flex-col  items-center justify-center md:flex-row text-gray-400 ">
            <li className="m-2">
              <Link to="../home" className="px-4 py-2 transition-all border border-gray-400 hover:text-gray-300 hover:border-gray-300">
                Domovská stránka
              </Link>
            </li>
            <li className="m-2">
              <Link to="../portfolio" className="px-4 py-2 transition-all border border-gray-400 hover:text-gray-300 hover:border-gray-300 ">
                Portfolio
              </Link>
            </li>
          </ul> 
        </nav>
      </div>
    </header>
  </>
)

export default IndexPage
