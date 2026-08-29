import { useEffect, useState } from 'react'
import {
  X,
  ArrowDown,
  Sparkles,
  Terminal,
  Activity,
  Github,
  Code2,
  Gamepad2,
  Layers,
  ArrowUpRight,
} from 'lucide-react'

import heroPortrait from '../assets/hero-portrait.png'

const NAV_LINKS = [
  { label: 'Story', target: 'story' },
  { label: 'GitHub Live', target: 'github-live' },
  { label: 'UI / UX', target: 'design-process' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Socials', target: 'social-hub' },
  { label: 'Message', target: 'message' },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/CHAMI-csr' },
  { label: 'Instagram', href: 'https://instagram.com/chiki_ins' },
  { label: 'Discord', href: 'https://discord.gg/RQZ49PGP2' },
  { label: 'Coffee', href: 'https://buymeacoffee.com/dev_chamika' },
]

export default function Hero() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  // Escape closes drawer
  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [drawerOpen])

  const scrollToSection = (targetId: string) => {
    setDrawerOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      const navOffset = 70
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] h-[100dvh] w-full overflow-hidden bg-[#060606] font-hn text-cream select-none"
    >
      {/* 1. High-Tech Dark Studio Aesthetic Backdrop */}
      <div className="absolute inset-0 bg-[#060606]" />

      {/* Studio Radial Spotlight */}
      <div className="hero-spotlight absolute inset-0 opacity-95 pointer-events-none" />

      {/* Cyber Grid & Dot Pattern */}
      <div className="hero-tech-grid absolute inset-0 opacity-70 pointer-events-none" />
      <div className="hero-dot-pattern absolute inset-x-0 top-0 h-[70vh] opacity-45 pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-[18%] left-[12%] w-80 h-80 rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none anim-pulse" />
      <div
        className="absolute top-[28%] right-[12%] w-96 h-96 rounded-full bg-amber-500/8 blur-[120px] pointer-events-none anim-pulse"
        style={{ animationDelay: '2.5s' }}
      />

      {/* Central Studio Rim Light directly behind cutout */}
      <div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 w-[380px] sm:w-[560px] h-[380px] sm:h-[560px] rounded-full bg-gradient-to-t from-cream/20 via-cream/5 to-transparent blur-[85px] pointer-events-none z-10" />

      {/* 2. Scrolling Marquee Typography (Behind Cutout) */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[18vh] sm:top-[20vh] lg:top-[19vh] z-10 overflow-hidden pointer-events-none"
        style={{ animationDelay: '400ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[12vh] sm:text-[18vh] lg:text-[21vh] font-bold leading-none tracking-tight text-cream/90">
          <span className="pr-[5vw]">Chami &mdash; Ranasinha&nbsp;</span>
          <span className="pr-[5vw]">Chami &mdash; Ranasinha&nbsp;</span>
          <span className="pr-[5vw]">Chami &mdash; Ranasinha&nbsp;</span>
        </div>
      </div>

      {/* 3. Floating Interactive Aesthetic Glass Badges (Desktop) */}
      <div className="hidden lg:block absolute left-12 top-[42%] -translate-y-1/2 z-25 anim-float">
        <div className="glass-panel p-4 rounded-2xl border border-cream/15 backdrop-blur-xl shadow-2xl space-y-2 max-w-[220px]">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Active &amp; Building</span>
          </div>
          <p className="text-xs text-cream/80 font-light leading-snug">
            Crafting scalable web apps, APIs &amp; creative gaming tech.
          </p>
          <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-cream/50">
            <Code2 size={12} /> TypeScript &bull; React &bull; Node
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block absolute right-12 top-[44%] -translate-y-1/2 z-25 anim-float"
        style={{ animationDelay: '3s' }}
      >
        <div className="glass-panel p-4 rounded-2xl border border-cream/15 backdrop-blur-xl shadow-2xl space-y-2 max-w-[220px]">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Gamepad2 size={14} />
            <span>Gaming &amp; Code</span>
          </div>
          <p className="text-xs text-cream/80 font-light leading-snug">
            Passionate about interactive engines &amp; real-time mechanics.
          </p>
          <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-cream/50">
            <Activity size={12} className="text-emerald-400" /> 60 FPS Performance
          </div>
        </div>
      </div>

      {/* 4. Front Portrait Cutout - Balanced & Proportionate */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end pointer-events-none">
        <img
          src={heroPortrait}
          alt="Chami Ranasinha"
          className="anim-rise-in max-h-[62vh] sm:max-h-[70vh] lg:max-h-[77vh] w-auto object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
        />
      </div>

      {/* 5. Top Header & Navigation */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <div className="flex flex-col">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="anim-fade-up font-hn text-lg tracking-wider text-cream font-medium"
            style={{ animationDelay: '600ms' }}
          >
            CHAMI <span className="text-cream/40 font-light">&mdash; RANASINHA</span>
          </a>
          <span className="text-[10px] font-mono text-cream/40 tracking-widest uppercase mt-0.5">
            Software Developer &bull; Gaming Enthusiast
          </span>
        </div>

        <div className="hidden items-start gap-14 sm:flex lg:gap-20">
          <div
            className="anim-fade-up flex flex-col text-xs font-mono text-cream/60"
            style={{ animationDelay: '700ms' }}
          >
            <span className="text-cream font-medium">EDITION // 2026</span>
            <span className="text-emerald-400 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              OPEN TO WORK
            </span>
          </div>

          <nav className="flex flex-col gap-1 text-sm font-mono">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="anim-fade-up text-cream/75 hover:text-cream text-left transition-all duration-200 hover:translate-x-1"
                style={{ animationDelay: `${800 + i * 60}ms` }}
              >
                0{i + 1} &bull; {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-1 text-sm font-mono">
            {SOCIAL_LINKS.map((item, i) =>
              item.href.startsWith('#') ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="anim-fade-up text-cream/75 hover:text-cream text-left transition-all duration-200 hover:translate-x-1"
                  style={{ animationDelay: `${950 + i * 60}ms` }}
                >
                  {item.label} &rarr;
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="anim-fade-up text-cream/75 hover:text-cream transition-all duration-200 hover:translate-x-1"
                  style={{ animationDelay: `${950 + i * 60}ms` }}
                >
                  {item.label} &nearr;
                </a>
              )
            )}
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
          className="anim-fade-up relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
          style={{ animationDelay: '700ms' }}
        >
          <span
            className={`h-[1.5px] w-6 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              drawerOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-cream transition-opacity duration-300 ${
              drawerOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              drawerOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      {/* 6. Minimalist Accent Line */}
      <div className="anim-line absolute inset-x-6 bottom-[5.5rem] z-25 h-px bg-gradient-to-r from-cream/30 via-cream/15 to-transparent sm:inset-x-10 sm:bottom-28 pointer-events-none" />

      {/* 7. Hero Footer Chrome */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 text-xs leading-relaxed font-hn sm:px-10 sm:pb-8 sm:text-sm">
        {/* Left: Role tagline & GitHub Quick Pill */}
        <div className="anim-fade-up space-y-1" style={{ animationDelay: '1100ms' }}>
          <div className="flex items-center gap-2">
            <p className="font-medium text-cream flex items-center gap-1.5">
              <Terminal size={14} className="text-cyan-400" /> Software Developer
            </p>
            <button
              onClick={() => scrollToSection('github-live')}
              className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-cream/90 hover:bg-cream hover:text-black transition-all cursor-pointer"
            >
              <Github size={11} />
              <span>Live Repos &darr;</span>
            </button>
          </div>
          <p className="text-cream/70 text-xs">Gaming &amp; Creative Tech Enthusiast</p>
          <p className="text-cream/50 text-[11px] font-mono">Building cool stuff with code</p>
        </div>

        {/* Center: Scroll to explore */}
        <button
          onClick={() => scrollToSection('story')}
          aria-label="Scroll to explore"
          className="hidden md:flex flex-col items-center gap-1.5 text-cream/70 hover:text-cream transition-colors duration-300 pointer-events-auto group cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-cream/50 group-hover:text-cream">
            Explore
          </span>
          <div className="w-5 h-8 border border-cream/30 rounded-full flex justify-center pt-1.5 group-hover:border-cream transition-colors">
            <div className="w-1 h-2 bg-cream rounded-full animate-bounce" />
          </div>
        </button>

        {/* Right: Availability indicator */}
        <div className="anim-fade-up text-right" style={{ animationDelay: '1200ms' }}>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono uppercase tracking-wider mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Available 2026</span>
          </div>
          <p className="font-medium text-cream text-xs sm:text-sm">Open to New Opportunities</p>
          <p className="text-cream/50 text-[11px] font-mono">Full-Time &amp; Freelance</p>
        </div>
      </footer>

      {/* 8. Mobile Drawer Backdrop & Panel */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-500 sm:hidden ${
          drawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        className={`fixed inset-y-0 right-0 z-40 w-[82%] max-w-sm bg-[#111111] border-l border-cream/10 px-8 py-10 transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] sm:hidden flex flex-col justify-between ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-cream/10">
            <span className="font-mono text-xs uppercase tracking-widest text-cream/50">
              Navigation
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
              className="text-cream p-1 rounded-lg bg-white/5"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-4">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className={`text-left font-hn text-2xl text-cream transition-all duration-300 hover:pl-2 ${
                  drawerOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: drawerOpen ? `${250 + i * 60}ms` : '0ms' }}
              >
                0{i + 1} &bull; {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-cream/10">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-cream/50 mb-3">
            Socials &amp; Connect
          </p>
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((item) =>
              item.href.startsWith('#') ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-cream/10 text-cream"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-cream/10 text-cream"
                >
                  {item.label} &nearr;
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
