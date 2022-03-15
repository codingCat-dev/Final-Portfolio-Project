import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Article from "../components/article"

const About = () => (
  <Layout>
    <Seo title="O mně" />
    <Header title="Ahoj, jsem Alžběta" />
    <div className="mx-auto my-8 ">
      <StaticImage
        src="../images/me/me2.jpg"
        alt="Man putting a wedding ring on a woman's finger"
        className="object-cover w-full h-52 lg:h-80"
        loading="lazy"
      />
      <Header subTitle="Jsem fotografka v Ostravě, a všude tam, kde jsou k vyprávění krásné příběhy..." />
    </div>
    <div className="px-2 mx-auto text-center lg:w-3/4 lg:px-0">
      <Article
        quote="Mým posláním je být po vašem boku od začátku do konce a nechat vše plynout. Užijete si mnoho výjimečných okamžiků se svými hosty a přáteli, a práci nechte na mně..."
        subQuote="Specializuji se na svatby, firemní večírky,maturitní plesy, a portrétové fotografie...Disponují vlastním ateliérem v centru Ostravy, a profesionálním vybavením canon."
      />
    </div>
    <div className="mt-6 mb-2 text-center lg:mb-6 lg:mt-12">
      <Link to="/contact" className="px-10 py-2 border border-black">
        Pracujme spolu
      </Link>
    </div>
    <div className="px-2 py-4 my-6 text-gray-100 lg:px-4 lg:my-16 lg:py-12 bg-gradient-to-l from-gray-800 via-gray-900 to-black">
      <Header title="Co mně dává život" />
      <div className="grid-cols-3 gap-2 text-center lg:grid lg:text-left ">
        <div className="mt-8 text-center lg:mt-16 ">
          <StaticImage
            className="mb-4 lg:mb-8 h-52 lg:h-72"
            src="../images/me/about3.jpg"
            alt="hi"
          />
          <Article
            title="Rodina"
            quote="Lorem, ipsum dolor sit amet consectetur adipectus placeat facere. Aspernatur, placeat laudantium animi accusantium facere eius ipsa autem expedita?
            "
          />
        </div>
        <div className="mt-8 text-center lg:mt-16 ">
          <StaticImage
            className="mb-4 lg:mb-8 h-52 lg:h-72"
            src="../images/me/about2.jpg"
            alt="hi"
          />

          <Article
            title="Fotografování"
            quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores laudantium minus iure nihil deserunt at tenetur delectus placeat facere. Aspernatur, placeat laudantium animi accusantium facere eius ipsa autem expedita?
            ."
          />
        </div>
        <div className="mt-8 text-center lg:mt-16 ">
          <StaticImage
            className="mb-4 lg:mb-8 h-52 lg:h-72"
            src="../images/me/me.jpg"
            alt="hi"
          />
          <Article
            title="Cestovani"
            quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores laudantium minus iure nihil deserunt at tenetur delectus placeat facere. Aspernatur, placeat laudantium animi accusantium facere eius ipsa autem expedita?
                   vými hosty a přáteli, a profesionální práci nechte na mně.."
          />
        </div>
      </div>
      <div className="mt-6 lg:mb-4 lg:mt-8">
        <Header subTitle=" těším se na setkání s vámi" />
      </div>
    </div>
  </Layout>
)

export default About
