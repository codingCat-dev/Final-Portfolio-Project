import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Article from "../components/article"

const About = () => {
  return (
    <Layout>
      <Seo title="O mně" />
      <Header title="Ahoj, jsem Alžběta" />
      <div className="my-24 ">
        <div className="grid grid-cols-2 gap-20">
          <div className="">
            <StaticImage
              className="h-72 mb-4 "
              src="../images/me/me.jpg"
              alt="hi"
            />
            <div className="">
              <h3 className="my-4 font-noto uppercase text-2xl">Co dělám</h3>
              <p className="font-light tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Natus, impedit quod dicta autem nostrum modi id alias
                voluptatem soluta eius.lorem30 Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quia magnam velit incidunt. Et,
                quo distinctio! Tenetur maxime, ratione, beatae numquam
                accusamus, illo quasi similique tempora provident explicabo
                dolor quidem aperiam!
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="mb-4 font-noto uppercase text-2xl">čím fotím</h3>
              <p className="font-light tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Natus, impedit quod dicta autem nostrum modi id alias
                voluptatem soluta eius.lorem30 Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quia magnam velit incidunt. Et,
                quo distinctio! Tenetur maxime, ratione, beatae numquam
                accusamus, illo quasi similique tempora provident explicabo
                dolor quidem aperiam!
              </p>
            </div>
            <StaticImage
              className="h-72 my-4 "
              src="../images/me/about2.jpg"
              alt="hi"
            />
          </div>
        </div>

        <Article title="Co mi dává život" />
        <div className="grid grid-cols-3">
          <div>
            <Article subTitle="1" />
          </div>
          <div>
            <Article subTitle="2" />
          </div>
          <div>
            <Article subTitle="3" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default About
