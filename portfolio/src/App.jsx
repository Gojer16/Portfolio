import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Layout from './components/Layout'
import About from './components/About'
import Skill from './components/Skill'
import { Project } from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Layout >
      <div id="hero">
      <Hero />
      </div>
      <div id='showcase'>
        <Showcase />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skill />
      </div>
      <div id='projects'>
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </Layout>
    </>
  )
}

export default App
