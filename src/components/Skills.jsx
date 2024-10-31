import React from 'react'

function Skills() {
  return (
    <section id='skills' class="section body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-4">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#141414]">My Skills</h1>
          <p class="text-base leading-relaxed max-w-lg xl:w-2/4 lg:w-3/4 mx-auto">I'm a passionate web developer 👨‍💻 with a strong foundation in various technologies.</p>
        </div>
        <div class="mx-auto w-fit md:gap-10 gap-20 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 text-[#5e5e5e]">
          <div className="skill w-fit mx-auto">
            <h3 className="text-lg font-bold mb-2"><strong>Front-End</strong></h3>
            <ul>
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
              <li>• React js</li>
              <li>• Tailwind CSS</li>
              <li>• Bootstrap</li>
            </ul>
          </div>
          <div className="skill w-fit mx-auto">
            <h3 className="text-lg font-bold mb-2"><strong>Back-End</strong></h3>
            <ul>
              <li>• Ruby on Rails</li>
              <li>• PHP</li>
            </ul>
          </div>
          <div className="skill w-fit mx-auto">
            <h3 className="text-lg font-bold mb-2"><strong>Database</strong></h3>
            <ul>
              <li>• MySQL</li>
              <li>• PostgreSQL</li>
            </ul>
          </div>
          <div className="skill w-fit mx-auto">
            <h3 className="text-lg font-bold mb-2"><strong>Tools</strong></h3>
            <ul>
              <li>• Git & Github</li>
              <li>• Figma</li>
              <li>• Netlify</li>
              <li>• NPM</li>
              <li>• JIRA</li>
              <li>• Visual Studio Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
