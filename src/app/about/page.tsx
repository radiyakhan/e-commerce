import React from 'react'

const page = () => {
  return (
    <div className='mt-12 px-5 mb-20'>
      <div className="text-center ">
        <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
          <strong>About me</strong>
        </h1>
        <div className="flex mt-3 mb-10 justify-center">
          <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex" />
        </div>
      </div>
      <div>
        <p className="lg:w-2/3  mx-auto leading-relaxed text-mycolorblue text-base">
        Hello, Im Radiya khan, 19-year-old. Recently I complete my second year with commerce. Now I learning skills by enrolling in GIAIC IT course. This exciting journey has equipped me with a solid foundation in web development, including HTML, CSS, TypeScript, and JavaScript. Currently, Im diving deeper into Next.js to create seamless and scalable web applications. Through GIAIC program, Ive gained valuable insights and expertise that have opened doors to new opportunities. Im eager to continue learning, exploring, and adapting to the ever-evolving tech landscape. With each new skill and experience, Im confident in my ability to make a meaningful impact in the digital world.
        </p>
      </div>
    </div>
  )
}

export default page
