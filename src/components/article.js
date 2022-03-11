import * as React from "react"

const Article = ({ title, quote, subQuote, quoteBold }) => {
  return (
    <article className="text-center my-8 mx-auto px-2 lg:w-1/2 lg:px-0 lg:my-24">
      <h2 className="my-4 block uppercase font-noto font-bold text-xl tracking-wider  lg:text-5xl ">
        {title}
      </h2>
      <div className="my-4 font-light">
        <p className="my-4">{quote}</p>
        <p className="uppercase">{subQuote}</p>
        <p className="font-normal uppercase">{quoteBold}</p>
      </div>
    </article>
  )
}
export default Article
