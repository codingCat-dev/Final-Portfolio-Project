import * as React from "react"

const Article = ({ title, quote, subQuote }) => (
  <article className="font-light">
    <h2 className="uppercase text-sm font-noto mb-6 lg:text-xl lg:tracking-wide">
      {title}
    </h2>
    <p className="my-2 md:my-3">{quote}</p>
    <p className="my-2 md:my-3">{subQuote}</p>
  </article>
)

export default Article
