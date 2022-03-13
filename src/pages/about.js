import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Article from "../components/article"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <Seo title="O mně" />
      <Header title="Ahoj, jsem Alžběta" />
      <div className="grid grid-cols-1 md:py-8 lg:gap-8 lg:py-16 lg:grid-cols-2">
        <div className="text-center  lg:text-left">
          <Article
            title="Jsem fotografka v Ostravě, a všude tam, kde jsou k vyprávění krásné
            příběhy..."
            quote="Mým posláním je být po vašem boku od začátku do konce a nechat vše plynout. Užijete si mnoho výjimečných okamžiků se svými hosty a přáteli, a práci nechte na mně..."
            subQuote="Specializuji se na svatby, firemní večírky,maturitní plesy, a portrétové fotografie"
          />
          <div className="my-6" />
          <Article
            title="Čím a Kde Fotím"
            quote="Disponují vlastním ateliérem v centru Ostravy, a profesionálním vybavením canon."
          />

          <div className="mt-12 mb-6">
            <Link to="/contact" className="px-6 py-1  border border-black">
              Pracujme spolu
            </Link>
          </div>
        </div>
        <div className="mx-auto ">
          <StaticImage src="../images/me/me2.jpg" alt="hi" className="" />
        </div>
      </div>

      <Header title="Co mně dává život" />
      <div className="py-6 px-2 grid gap-2 lg:grid-cols-3 lg:gap-8 lg:py-16 lg:my-8">
        <div>
          <StaticImage
            className="h-72 mb-4"
            src="../images/me/about3.jpg"
            alt="hi"
          />
          <Article
            title="Rodina"
            quote="Lorem, ipsum dolor sit amet consectetur adipectus placeat facere. Aspernatur, placeat laudantium animi accusantium facere eius ipsa autem expedita?
            "
          />
        </div>
        <div>
          <StaticImage
            className="h-72 mb-4"
            src="../images/me/about2.jpg"
            alt="hi"
          />

          <Article
            title="Fotografování"
            quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores laudantium minus iure nihil deserunt at tenetur delectus placeat facere. Aspernatur, placeat laudantium animi accusantium facere eius ipsa autem expedita?
            ."
          />
        </div>
        <div>
          <StaticImage
            className="h-72 mb-4"
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
      <h5 className="font-noto font-light text-xl uppercase text-center py-4">
        těším se na setkání s vámi
      </h5>
    </Layout>
  )
}
export default About
{
  /* <div className="bg-blue-50 px-2 font-light py-24 text-center">
        <div className="w-2/3 mx-auto">
          <h3>
            Jsem fotografka v Ostravě,a všude tam, kde jsou k vyprávění krásné
            příběhy...
          </h3>
          <Article
            quote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
              vero at libero nobis consectetur fugit doloremque laborum? Quod,
              minima?"
            subQuote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
              vero at libero nobis consectetur fugit doloremque laborum? Quod,
              minima?"'
          />
          <div className="mt-6 px-2">
            <Link
              className=" border border-black px-8 py-1 uppercase"
              to="/about"
            >
              poznej mne
            </Link>
          </div>
        </div>
        <div className="w-2/3 mx-auto ">
          <StaticImage alt="bla" src="../images/me/me.jpg" />
        </div>
      </div>
      <h3 className="font-noto uppercase font-light text-center mt-16 text-4xl">
        Hezká slova
      </h3>
      <div className="grid grid-cols-3 gap-4 py-16 font-light">
        <Article
          title="Mark Doe"
          quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            officiis? Officia expedita atque ea pariatur impedit consequuntur
            harum dolore omnis!"
        />
        <Article
          title="Derek Doe"
          quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            officiis? Officia expedita atque ea pariatur impedit consequuntur
            harum dolore omnis!"
        />
        <Article
          title="John Doe"
          quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            officiis? Officia expedita atque ea pariatur impedit consequuntur
            harum dolore omnis!"
        />
      </div> */
}
