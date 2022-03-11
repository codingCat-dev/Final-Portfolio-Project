import * as React from "react"

const Header = ({ title, subTitle }) => {
  return (
    <header className="text-center my-8 mx-auto px-2 md:w-2/3 lg:w-1/2 lg:px-0 lg:my-24">
      <h2>
        <span className="my-4 block uppercase font-noto font-bold tracking-wider text-3xl lg:text-5xl ">
          {title}
        </span>
        <span className="my-4 block">{subTitle}</span>
      </h2>
    </header>
  )
}
export default Header
