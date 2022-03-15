import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
const Footer = () =>
  // prettier-ignore
  <footer className="py-4 font-light text-center lg:pt-12 ">
    <div className="text-sm tracking-tighter" role="navigation" aria-label="social-links">
      <Header subTitle="seznamte se se mnou"/>
      <div className="flex items-center justify-center my-2 lg:my-6">
        <a className="mx-2"
          href="https://www.facebook.com/Al%C5%BEb%C4%9Bta-%C5%98%C3%ADmanov%C3%A1-fotograf-450529322192872/?ref=page_internal"
          target="_blank"
          rel="noreferrer">
          Facebook
        </a>
        <a className="mx-2"
          href="https://www.facebook.com/Al%C5%BEb%C4%9Bta-%C5%98%C3%ADmanov%C3%A1-fotograf-450529322192872/?ref=page_internal"
          target="_blank"
          rel="noreferrer">
          Instagram
        </a>
        <a className="mx-2"
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noreferrer">
          Whats'app
        </a>
        <a className="mx-2"
          href="mailto:mail@gmail.com"
          target="_blank"
          rel="noreferrer">
          E-mail
        </a>
      </div>
    </div>
    <div role="navigation" aria-label="privacy-policy" className="py-2 mt-4 text-xs tracking-wide text-gray-100 bg-gradient-to-t from-gray-800 via-gray-900 to-black lg:mt-4">
      <ul className="flex flex-col items-center justify-evenly lg:flex-row">
        <li>
          <Link to="/privacy">Právní varování</Link>
        </li>
        <li>
          <Link to="/privacy">Zásady ochrany osobních údajů</Link>
        </li>
        <li>
          <Link to="/privacy">Zásady cookies</Link>
        </li>
      </ul>
    </div>
  </footer>

export default Footer
