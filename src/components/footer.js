import * as React from "react"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer className="pt-6 font-light bg-blue-50 text-center   lg:pt-12">
      <div
        className="text-sm tracking-tighter"
        role="navigation"
        aria-label="social-links"
      >
        <h4 className="uppercase mb-1">seznamte se se mnou</h4>
        <div className="flex justify-center items-center mt-4">
          <a
            className="mx-2"
            href="https://www.facebook.com/Al%C5%BEb%C4%9Bta-%C5%98%C3%ADmanov%C3%A1-fotograf-450529322192872/?ref=page_internal"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="mx-2"
            href="https://www.facebook.com/Al%C5%BEb%C4%9Bta-%C5%98%C3%ADmanov%C3%A1-fotograf-450529322192872/?ref=page_internal"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="mx-2"
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
          >
            Whats'app
          </a>
          <a
            className="mx-2"
            href="mailto:mail@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            E-mail
          </a>
        </div>
      </div>
      <div
        role="navigation"
        aria-label="privacy-policy"
        className="mt-4 bg-gradient-to-t from-gray-800 via-gray-900 to-black text-gray-100 text-xs py-2  tracking-wide lg:mt-4"
      >
        <ul className="flex items-center justify-evenly flex-col lg:flex-row">
          <li>
            <Link to="../privacypolicy">Právní varování</Link>
          </li>
          <li>
            <Link to="../privacypolicy">Zásady ochrany osobních údajů</Link>
          </li>
          <li>
            <Link to="../privacypolicy">Zásady cookies</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
