import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const links = [
  { name: "Domů", path: "../home" },
  { name: "O mně", path: "../about" },
  { name: "Portfolio", path: "../portfolio" },
  { name: "Kontakt", path: "../contact" },
]

const Navigation = () => (
  <nav className="fixed top-0 z-20 flex flex-col items-center justify-between w-full py-1 text-xs uppercase bg-white text-slate-800 font-extralight opacity-95">
    <StaticImage
      alt="website logo AR"
      src="../images/logo/logo.png"
      width={50}
      loading="lazy"
    />
    <ul className="flex flex-wrap items-center justify-center mt-2 md:justify-evenly">
      {links.map(link => (
        <li key={link.name} className="m-2 lg:m-0">
          <Link to={link.path} className="py-1  md:px-6" activeClassName="">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation
