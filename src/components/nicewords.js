import React from "react"
import Testimonial from "react-testimonial"
import Header from "./header"

const NiceWords = () => (
  <>
    <div className="py-4 text-center text-gray-100 lg:py-8 lg:mt-6 bg-gradient-to-l from-gray-800 via-gray-900 to-black">
      <Header subTitle="Hezka Slova" />
      <div className="font-light lg:mt-8 ">
        <Testimonial timer={100}>
          <div>
            <p className="px-2 mx-auto lg:w-3/4">
              I had the pleasure of working with him on an exciting project for
              over 18 months. We have shared some highs, lows and some real head
              scratching moments. He has been a real asset to the team and to me
              personally.
            </p>
            <p className="mt-8 font-normal uppercase font-noto">
              Jack <span className="text-blue-500">&</span> Alisson
            </p>
          </div>
          <div>
            <p className="px-2 mx-auto lg:w-3/4">
              He has been a real asset to the team and able to pick up new
              technologies quickly. He has a passion for all flavours of
              development and is a team player with an excellent attitude both
              in and outside of work.
            </p>
            <p className="mt-8 font-normal uppercase font-noto">
              Honza <span className="text-blue-500">&</span> Brambora
            </p>
          </div>
          <div>
            <p className="px-2 mx-auto lg:w-3/4">
              He has been a real asset to the team and able to pick up new
              technologies quickly. He has a passion for all flavours of
              development and is a team player with an excellent attitude both
              in and outside of work.
            </p>
            <p className="mt-8 font-normal uppercase font-noto">
              Mark <span className="text-blue-500">&</span> Julie
            </p>
          </div>
        </Testimonial>
      </div>
    </div>
  </>
)

export default NiceWords
