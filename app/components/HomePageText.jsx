import React from 'react'

function HomePageText() {
      const homepageText = "I build innovative solutions with each line of <code>";
  return (
    <div>
        <div className="lg:w-[70%] mx-auto font-mono">
          <h2 className="text-gray-700 text-center text-2xl md:text-3xl lg:text-4xl font-bold px-1 tracking-wide leading-normal lg:leading-normal pb-5">
            {homepageText}
          </h2>
        </div>
    </div>
  )
}

export default HomePageText