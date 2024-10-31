import React from 'react'

function Portfolio() {
  return (
    <div id='projects' className='section px-40 text-center py-8'>
      <h2 className='text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#141414]'>My Latest Projects</h2>
      <p className="py-6 max-w-lg m-auto">
        Take a look at my recent work 💼, I build web solutions that are both functional and engaging.</p>
      <div className="cards-container flex gap-10 my-8 justify-center flex-wrap">
        <label htmlFor="flightertravelandtours">
          <div className="border border-[#5e5e5e00] hover:border-[#5e5e5e] card bg-base-100 -100 w-96 shadow-xl text-center cursor-pointer">
            <figure>
              <img
                src="../src/assets/images/Flighter Travels.png"
                alt="Shoes" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title justify-center">
                Flighter Travel & Tours
              </h2>
              <p>Flighter Travel & Tours is a dynamic travel ticket booking website I built using WordPress, with custom enhancements in HTML, CSS, PHP, and JavaScript.</p>
              <div className="card-actions justify-center">
                <div className="badge">WordPress</div>
                <div className="badge">HTML</div>
                <div className="badge">CSS</div>
                <div className="badge">PHP</div>
                <div className="badge">JavaScript</div>
              </div>
            </div>
            <input type="checkbox" id="flightertravelandtours" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold"><strong>Flighter Travel & Tours</strong></h3>
                <p className="py-4">Flighter Travel & Tours is a dynamic travel ticket booking website I built using WordPress, with custom enhancements in HTML, CSS, PHP, and JavaScript. The platform offers a seamless user experience, allowing customers to search, book, and manage travel tickets effortlessly. I integrated responsive design, user-friendly forms, and robust back-end functionality to ensure smooth bookings. This project showcases my expertise in developing modern, responsive websites tailored to client needs.</p>
                <a href="https://flightertravelandtours.co.uk/" target='_blank' className='underline'>View Live</a>
              </div>
            </div>

          </div>
        </label>
        <label htmlFor="hyphan">
          <div className="border border-[#5e5e5e00] hover:border-[#5e5e5e] card bg-base-100 -100 w-96 shadow-xl text-center cursor-pointer">
            <figure>
              <img
                src="../src/assets/images/Hyphan.png"
                alt="Shoes" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title justify-center">
                Hyphan
              </h2>
              <p>Hyphan provides two powerful productivity tools: a Pomodoro Timer to enhance focus during work sessions and a To-Do Task Manager for organizing daily tasks.</p>
              <div className="card-actions justify-center">
                <div className="badge">HTML</div>
                <div className="badge">CSS</div>
                <div className="badge">Tailwind</div>
                <div className="badge">JavaScript</div>
                <div className="badge">React Js</div>
              </div>
            </div>
            <input type="checkbox" id="hyphan" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold"><strong>Hyphan</strong></h3>
                <p className="py-4">Hyphan provides two powerful productivity tools: a Pomodoro Timer to enhance focus during work sessions and a To-Do Task Manager for organizing daily tasks. Built using HTML, CSS, JavaScript, and React, this project allowed me to refine my skills in creating responsive, interactive applications while learning a great deal about managing state and user experience.</p>
                <a href="https://ali-shakeel-dev.github.io/hyphan/" target='_blank' className='underline'>View Live</a>
              </div>
            </div>

          </div>
        </label>
        <label htmlFor="mind_map">
          <div className="border border-[#5e5e5e00] hover:border-[#5e5e5e] card bg-base-100 -100 w-96 shadow-xl text-center cursor-pointer">
            <figure>
              <img
                src="../src/assets/images/Mind Map.png"
                alt="Shoes" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title justify-center">
                Mind Map
              </h2>
              <p>MindFlow is an intuitive mind mapping tool built with HTML, CSS, and JavaScript. The app allows users to visually organize ideas by creating, modifying, and connecting nodes.</p>
              <div className="card-actions justify-center">
                <div className="badge">HTML</div>
                <div className="badge">CSS</div>
                <div className="badge">JavaScript</div>
                <div className="badge">React Js</div>
                <div className="badge">React Flow</div>
              </div>
            </div>
            <input type="checkbox" id="mind_map" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold"><strong>MindFlow</strong></h3>
                <p className="py-4">MindFlow is an intuitive mind mapping tool built with HTML, CSS, and JavaScript. The app allows users to visually organize ideas by creating, modifying, and connecting nodes in a dynamic, interactive interface. This project showcases my ability to build interactive, user-friendly applications with custom logic and dynamic UI elements.</p>
                <a href="https://mind-flow.netlify.app/" target='_blank' className='underline'>View Live</a>
              </div>
            </div>

          </div>
        </label>
        <label htmlFor="saas_web_design">
          <div className="border border-[#5e5e5e00] hover:border-[#5e5e5e] card bg-base-100 -100 w-96 shadow-xl text-center cursor-pointer">
            <figure>
              <img
                src="../src/assets/images/saas.png"
                alt="Shoes" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title justify-center">
                SaaS Web Design
              </h2>
              <p>This project is a pixel-perfect clone of a SaaS website built using HTML, CSS, and Tailwind CSS.</p>
              <div className="card-actions justify-center">
                <div className="badge">HTML</div>
                <div className="badge">CSS</div>
                <div className="badge">Tailwind</div>
              </div>
            </div>
            <input type="checkbox" id="saas_web_design" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold"><strong>SaaS Design Clone</strong></h3>
                <p className="py-4">This project is a pixel-perfect clone of a SaaS website built using HTML, CSS, and Tailwind CSS. The goal was to replicate a modern, clean, and responsive design. I implemented responsive layouts, typography, and component styling to ensure the site adapts seamlessly across devices.</p>
              </div>
            </div>

          </div>
        </label>
        <label htmlFor="upcoming">
          <div className="border border-[#5e5e5e00] hover:border-[#5e5e5e] card bg-base-100 -100 w-96 shadow-xl text-center cursor-pointer">
            <figure>
              <img
                src="../src/assets/images/upcoming.png"
                alt="Shoes" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title justify-center">
                Full-Stack App (Upcoming)
              </h2>
              <p>I’m currently working on a Full-Stack web application that will showcase my skills in both front-end and back-end development. </p>
              <div className="card-actions justify-center">
                <div className="badge">HTML</div>
                <div className="badge">CSS</div>
                <div className="badge">Tailwind Css</div>
                <div className="badge">Ruby on Rails</div>
              </div>
            </div>
            <input type="checkbox" id="upcoming" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold"><strong>Upcoming</strong></h3>
                <p className="py-4">I’m currently working on a Full-Stack web application that will showcase my skills in both front-end and back-end development. Built with modern technologies, this app will feature a responsive UI, efficient data management, and seamless user interactions. </p>
              </div>
            </div>

          </div>
        </label>

      </div>
    </div>


  )
}

export default Portfolio
