import * as React from "react"

const Header = ({ title, subTitle }) => {
  return (
    <header className="text-center">
      <h2>
        <span className="block">{title}</span>
        <span className="block">{subTitle}</span>
      </h2>
    </header>
  )
}
export default Header
