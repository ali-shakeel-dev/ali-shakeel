import React from 'react'

function Hero() {
  return (
    <div className="section hero bg-base-200 h-[calc(100vh-70px)]">
      <div className="hero-content text-center ">
        <div>
          <div className="badge">I'm Ali Shakeel 👋</div>
          <img src="../src/assets/images/Ali.jpg" width="110" className='rounded-full mx-auto pt-4' />
          <div className="heroHeadings text-center">
            <h1 className="heroHeading mt-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#141414] leading-tight">Transforming ideas into seamless, <br /> high-performing web apps.</h1>
          </div>
          <p className="py-6 max-w-lg m-auto">
            Hi, I’m Ali Shakeel 🙋🏻‍♂️, a web app developer with a strong focus on building impactful digital experiences. Creating web applications that are both functional and engaging.
          </p>
          <a href="#contact"><button className="btn">Drop me a line</button></a>
        </div>
      </div>
    </div >
  )
}

export default Hero
