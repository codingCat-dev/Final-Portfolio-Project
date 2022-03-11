import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const links = [
  { name: "Domů", path: "../home" },
  { name: "O mně", path: "../about" },
  { name: "Portfolio", path: "../portfolio" },
  { name: "Kontakt", path: "../contact" },
  // Poznej mne
]

const Navigation = () => (
  <nav className="px-2 pt-2 pb-1  text-center text-sm font-light tracking-wide ">
    <StaticImage
      alt="website logo AR"
      src="../images/logo/logo.png"
      width={100}
      loading="lazy"
    />
    <ul className="flex justify-center items-center flex-wrap">
      {links.map(link => (
        <li key={link.name} className="my-1 mx-1 lg:mx-4">
          <Link to={link.path} activeClassName="border-b-4 border-blue-50">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation
