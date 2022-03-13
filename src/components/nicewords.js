import React from "react"
import Testimonial from "react-testimonial"
import Header from "./header"

const NiceWords = () => (
  <>
    <Header subTitle="Hezka Slova" />
    <div className=" text-center h-44">
      <div className="mt-8 font-light">
        <Testimonial timer={100}>
          <div>
            <p className="w-3/4 mx-auto">
              I had the pleasure of working with him on an exciting project for
              over 18 months. We have shared some highs, lows and some real head
              scratching moments. He has been a real asset to the team and to me
              personally.
            </p>
            <p className="uppercase font-normal mt-8 font-noto">
              Jack <span className="text-blue-500">&</span> Alisson
            </p>
          </div>
          <div>
            <p className="w-3/4 mx-auto">
              He has been a real asset to the team and able to pick up new
              technologies quickly. He has a passion for all flavours of
              development and is a team player with an excellent attitude both
              in and outside of work.
            </p>
            <p className="uppercase font-normal mt-8 font-noto">
              Honza <span className="text-blue-500">&</span> Brambora
            </p>
          </div>
          <div>
            <p className="w-3/4 mx-auto">
              He has been a real asset to the team and able to pick up new
              technologies quickly. He has a passion for all flavours of
              development and is a team player with an excellent attitude both
              in and outside of work.
            </p>
            <p className="uppercase font-normal mt-8 font-noto">
              Mark <span className="text-blue-500">&</span> Julie
            </p>
          </div>
        </Testimonial>
      </div>
    </div>
  </>
)

export default NiceWords
