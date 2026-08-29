import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import GithubLive from './components/GithubLive'
import DesignProcess from './components/DesignProcess'
import Skills from './components/Skills'
import Projects from './components/Projects'
import SocialHub from './components/SocialHub'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = [
      'hero',
      'story',
      'github-live',
      'design-process',
      'skills',
      'projects',
      'social-hub',
      'message',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-cream selection:bg-cream selection:text-black">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Story />
        <GithubLive />
        <DesignProcess />
        <Skills />
        <Projects />
        <SocialHub />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
