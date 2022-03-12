import * as React from "react"

const Header = ({ title }) => (
  <header className="text-center mx-auto uppercase mt-8 font-noto lg:tracking-wider px-2 md:w-2/3 lg:px-0 lg:mt-16">
    <h1 className="my-4 block text-2xl md:text-3xl lg:text-5xl">{title}</h1>
  </header>
)

export default Header
