import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gotop from './components/Gotop'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {

  return (
    <div className='mainContainer'>
      <Navbar />
      <Hero />
      <Portfolio />
      <Gotop />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
