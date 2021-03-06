import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Form from "../components/form"

// prettier-ignore
const Contact = () => (
  <Layout>
    <Seo title='Kontakt'/>
    <Header title="Promluvme si" />
    <div className="px-2 my-8 text-center lg:px-0 lg:my-16">
      <div className="font-light">
        <a href="mailto:mail@mail.com" className="block tracking-wide lg:text-xl" target="_blank" rel="noreferrer">
          emailmeatthisemail@email.com
        </a>
        <a href="https://wa.me/15551234567" className="block mt-4 tracking-wide text-gray-500 lg:text-xl" target="_blank" rel="noreferrer">
          + 420 222/222-222
        </a>
      </div>
      <div>
        <Article quote="Tato poslední část je místem, kde je řada na nás, abychom s vámi promluvili a poděkovali vám, že jste se mnou strávili trochu svého času." />
        <Article quote="Řekněte mi, kde a jak se budete vdávat, kdy se vám narodí dítě nebo jaký máte nápad pro fotografování" />
      </div>
    </div>
      <Form />
  </Layout>
)

export default Contact
