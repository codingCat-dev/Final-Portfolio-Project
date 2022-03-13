import * as React from "react"

const Header = ({ title, subTitle }) => (
  <header className="px-2 mx-auto text-center uppercase font-noto lg:tracking-wider md:w-2/3 lg:px-0 ">
    <h1 className="my-4 text-3xl md:text-4xl lg:text-5xl">{title}</h1>
    <h2 className="text-xl lg:text-3xl">{subTitle}</h2>
  </header>
)

export default Header
