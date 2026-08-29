import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Github, Sparkles, Send, Layout } from 'lucide-react'

interface NavbarProps {
  activeSection: string
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Top' },
  { id: 'story', label: 'Story' },
  { id: 'github-live', label: 'GitHub Live' },
  { id: 'design-process', label: 'UI / UX' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'social-hub', label: 'Socials' },
  { id: 'message', label: 'Message' },
]

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.getElementById(id)
    if (element) {
      const navOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 inset-x-0 z-50 h-[2px] bg-white/5 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cream via-cyan-400 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#090909]/90 backdrop-blur-xl border-b border-cream/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-6 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollTo('hero')}
            className={`font-hn tracking-wider text-cream font-medium text-base sm:text-lg pointer-events-auto transition-opacity duration-300 hover:opacity-75 flex items-center gap-2 ${
              scrolled ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>CHAMI</span>
            <span className="text-cream/40 font-light text-sm">&mdash; RANASINHA</span>
          </button>

          {/* Desktop Nav Items */}
          <div
            className={`hidden md:flex items-center gap-7 pointer-events-auto transition-all duration-500 ${
              scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="flex items-center gap-5 text-xs font-mono">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative py-1 transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-cream font-bold'
                      : 'text-cream/60 hover:text-cream'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cream rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-cream/15" />

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/CHAMI-csr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-cream/70 hover:text-cream transition-colors p-1.5 rounded-lg bg-white/5 hover:bg-white/10"
              >
                <Github size={16} />
              </a>

              <button
                onClick={() => scrollTo('message')}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase bg-cream text-black px-4 py-2 rounded-full font-medium hover:bg-cream/90 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              >
                <Send size={12} />
                <span>Connect</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button when Scrolled */}
          {scrolled && (
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden pointer-events-auto text-cream p-2 rounded-xl bg-white/5 border border-cream/10"
            >
              <Menu size={20} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Sticky Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md md:hidden animate-fade-in">
          <div className="w-[85%] max-w-sm bg-[#121212] h-full p-8 flex flex-col justify-between border-l border-cream/10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-cream/10">
                <span className="font-hn text-cream font-medium tracking-wide text-base">
                  Portfolio Index
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-cream/70 hover:text-cream p-1 rounded-lg bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-3">
                {NAV_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left text-lg font-hn transition-all py-1 ${
                      activeSection === item.id
                        ? 'text-cream pl-3 border-l-2 border-cream font-semibold'
                        : 'text-cream/60 hover:text-cream'
                    }`}
                  >
                    0{idx + 1} &bull; {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-cream/10 flex flex-col gap-3">
              <a
                href="https://github.com/CHAMI-csr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-cream border border-cream/10 text-xs font-mono hover:bg-white/10 transition-colors"
              >
                <Github size={16} />
                GitHub @CHAMI-csr
              </a>
              <button
                onClick={() => scrollTo('message')}
                className="w-full py-3 rounded-xl bg-cream text-black text-xs font-mono font-semibold hover:bg-cream/90 transition-colors"
              >
                Send Message / Inquire
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
