import * as React from "react"
import Article from "../components/article"
import { Link } from "gatsby"

const Privacy = () => {
  return (
    <div className="text-center mt-12 px-2 mx-auto w-2/3">
      <Article
        title="pravni varovani"
        quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
      praesentium pariatur quod quibusdam nostrum, repudiandae repellat veniam
      voluptatum fugiat. Ullam quibusdam labore nisi tenetur sed aperiam
      architecto itaque sint libero."
      />
      <Article
        title="zasady ochrany osobnich udaju"
        quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
      praesentium pariatur quod quibusdam nostrum, repudiandae repellat veniam
      voluptatum fugiat. Ullam quibusdam labore nisi tenetur sed aperiam
      architecto itaque sint libero."
      />

      <Article
        title="Zasady cookies"
        quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
      praesentium pariatur quod quibusdam nostrum, repudiandae repellat veniam
      voluptatum fugiat. Ullam quibusdam labore nisi tenetur sed aperiam
      architecto itaque sint libero."
      />
      <div className="mt-8">
        <Link to="/home" className="px-6 py-1 border border-black">
          Domovská stránka
        </Link>
      </div>
    </div>
  )
}
export default Privacy
