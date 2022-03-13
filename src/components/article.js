import * as React from "react"

const Article = ({ title, quote, subQuote }) => (
  <article className="font-light">
    <h2 className="mb-6 text-sm uppercase font-noto lg:text-xl lg:tracking-wide">
      {title}
    </h2>
    <p className="my-2 md:my-3 font-extralight">{quote}</p>
    <p className="my-2 md:my-3">{subQuote}</p>
  </article>
)

export default Article
