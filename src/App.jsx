import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'


const App = () => {

  return (
    <>
    <BrowserRouter >
    {/* <CustomCursor /> */}
    <Navbar />
      <Hero />
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Experience id="experience"/>
      <Contact id="contact"/> 
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
