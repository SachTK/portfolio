import { useState } from 'react'
import Sidenav from './components/Sidenav' 
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

 

function App() {
  
  return (
    <div>
      <Sidenav/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
