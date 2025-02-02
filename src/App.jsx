
import './App.css'

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import SkillsSection from './components/Skills'
import Projects from './components/Projects'
import EducationExperience from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
        <div className='fixed inset-0 -z-10'>
        <div class="relative h-full w-full bg-slate-950">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
        </div>
        </div>

        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <Technologies />
          <SkillsSection />
          <Projects />
          <EducationExperience />
          <Contact />
        </div>
    </div>
  )
}

export default App
