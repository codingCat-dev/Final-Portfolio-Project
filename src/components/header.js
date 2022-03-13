import * as React from "react"

const Header = ({ title, subTitle }) => (
  <header className="text-center mx-auto uppercase mt-8 font-noto lg:tracking-wider px-2 md:w-2/3 lg:px-0 lg:mt-16">
    <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl">{title}</h1>
    <h2 className="text-xl lg:text-3xl">{subTitle}</h2>
  </header>
)

export default Header
