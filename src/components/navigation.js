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
  <nav className="flex justify-between items-center flex-col fixed top-0 w-full z-20  text-slate-800 uppercase text-xs   font-extralight py-1 opacity-95 bg-white">
    <StaticImage
      alt="website logo AR"
      src="../images/logo/logo.png"
      width={50}
      loading="lazy"
    />
    <ul className="flex justify-center flex-wrap items-center mt-2 md:justify-evenly">
      {links.map(link => (
        <li key={link.name} className="m-2 lg:m-0">
          <Link to={link.path} className=" py-1 md:px-6" activeClassName="">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation
