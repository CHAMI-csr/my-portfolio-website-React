import { useState } from 'react'
import {
  Code2,
  Flame,
  Gamepad2,
  Sparkles,
  Terminal as TerminalIcon,
  Cpu,
  CornerDownLeft,
  CheckCircle2,
} from 'lucide-react'

const PILLARS = [
  {
    icon: Code2,
    title: 'Code Craftsmanship',
    description:
      'Writing clean, maintainable, and type-safe code that scales gracefully from early prototypes to high-traffic production applications.',
  },
  {
    icon: Flame,
    title: 'Performance-First UI',
    description:
      'Obsessed with lightning-fast load times, 60fps fluid micro-interactions, responsive ergonomics, and zero layout shift.',
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Creative Tech',
    description:
      'Drawing inspiration from gaming UI/UX, real-time mechanics, and interactive graphics to build software that is both powerful and fun to use.',
  },
  {
    icon: Cpu,
    title: 'Modern Architecture',
    description:
      'Designing robust full-stack systems using modular React, TypeScript, scalable APIs, and modern cloud infrastructure.',
  },
]

const STATS = [
  { value: '5+', label: 'Years of Coding', detail: 'Hands-on full-stack development' },
  { value: '20+', label: 'Projects Built', detail: 'Web apps, APIs, & interactive tools' },
  { value: '99%', label: 'Performance Obsessed', detail: 'Optimized web vitals & render speed' },
  { value: '24/7', label: 'Tech & Gaming Passion', detail: 'Always learning emerging technologies' },
]

interface TerminalEntry {
  command: string
  output: string | string[]
}

const INITIAL_HISTORY: TerminalEntry[] = [
  {
    command: 'whoami',
    output:
      'Chami Ranasinha — Software Developer & Gaming Enthusiast from Sri Lanka. Building high-performance digital products with code.',
  },
  {
    command: 'skills --core',
    output: [
      'Frontend: React 18/19, TypeScript, Next.js, Tailwind CSS, Vite',
      'Backend:  Node.js, Express, REST APIs, Java, PHP, PostgreSQL, Supabase',
      'Gaming:   Canvas API, Physics Engines, Real-time WebSockets, WebGL',
    ],
  },
]

export default function Story() {
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>(INITIAL_HISTORY)
  const [terminalInput, setTerminalInput] = useState('')

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    let output: string | string[] = ''

    switch (trimmed) {
      case 'help':
        output = [
          'Available commands:',
          '  whoami      - Learn about Chami Ranasinha',
          '  stack       - View core technical stack',
          '  gaming      - Gaming setup & favorite genres',
          '  github      - GitHub profile & repository stats',
          '  status      - Current availability status',
          '  clear       - Clear terminal screen',
        ]
        break
      case 'whoami':
        output =
          'Chami Ranasinha — Software Developer & Gaming Enthusiast. Dedicated to crafting fluid user interfaces, clean architectures, and engaging digital tools.'
        break
      case 'stack':
      case 'skills':
        output = [
          '⚡ Frontend : React 18/19, TypeScript, Next.js, Tailwind CSS, Vite, HTML5/CSS3',
          '🛠️ Backend  : Node.js, Express, Java, PHP, PostgreSQL, MongoDB, Supabase',
          '🎮 Creative : HTML5 Canvas 2D, WebSockets, WebGL, Particle Physics, UI/UX',
        ]
        break
      case 'gaming':
        output = [
          '🎮 Gaming Profile: Hardcore gamer & esports follower.',
          '🏆 Favorite Genres: Fast-paced competitive FPS, RPGs, & indie mechanics.',
          '💡 Inspiration: Translating responsive game tick-rates & HUDs into snappy web UIs.',
        ]
        break
      case 'github':
        output = [
          'GitHub Profile: https://github.com/CHAMI-csr',
          'Total Public Repos: 6 (register, my-portfolio-website, Event_Management_System, etc.)',
          'Live Telemetry: Connected directly to GitHub REST API below!',
        ]
        break
      case 'status':
        output = '🟢 Status: Available for freelance development contracts and full-time software engineering roles in 2026.'
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      default:
        output = `Command not recognized: "${trimmed}". Type "help" for a list of commands.`
    }

    setTerminalHistory((prev) => [...prev, { command: cmd, output }])
    setTerminalInput('')
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    executeCommand(terminalInput)
  }

  return (
    <section id="story" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-cream/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/50">
            01 &mdash; Background &amp; Philosophy
          </span>
          <h2 className="text-4xl sm:text-6xl font-hn font-normal text-cream mt-2 tracking-tight">
            The Story Behind the Code
          </h2>
        </div>
        <p className="text-cream/70 text-sm sm:text-base max-w-md leading-relaxed font-light">
          Bridging the gap between engineering rigor, creative interaction, and esports-inspired precision.
        </p>
      </div>

      {/* Narrative & Interactive Terminal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-6 space-y-6 text-cream/80 text-base sm:text-lg leading-relaxed font-light">
          <p className="first-letter:text-5xl first-letter:font-hn first-letter:text-cream first-letter:mr-3 first-letter:float-left">
            I am <strong className="text-cream font-medium">Chami Ranasinha</strong>, a software developer and passionate gaming enthusiast dedicated to crafting purposeful, responsive, and aesthetically refined digital products.
          </p>
          <p>
            My journey began with an insatiable curiosity for how high-speed systems work under the hood—from competitive gaming engine mechanics to the micro-interactions that make modern web applications feel frictionless and alive.
          </p>
          <p>
            Whether building full-stack web platforms, designing interactive design systems, or architecting resilient backend services, my goal is always the same: delivering flawless performance, intuitive user interfaces, and bulletproof maintainability.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4">
            {STATS.slice(0, 2).map((stat) => (
              <div key={stat.label} className="glass-panel p-4 rounded-xl border border-cream/10">
                <div className="text-2xl font-hn font-bold text-cream">{stat.value}</div>
                <div className="text-xs font-medium text-cream/80 mt-1">{stat.label}</div>
                <div className="text-[11px] text-cream/50 font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Developer Terminal */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-2xl border border-cream/15 overflow-hidden shadow-2xl">
            {/* Terminal Top Window Bar */}
            <div className="bg-[#0f0f0f] px-4 py-3 border-b border-cream/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-cream/60">
                  chami@dev-box: ~ (zsh)
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                ● Interactive
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs text-cream/85 bg-black/50 space-y-4 max-h-[300px] overflow-y-auto">
              {terminalHistory.map((entry, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-cream/50">&gt;</span>
                    <span>{entry.command}</span>
                  </div>
                  {Array.isArray(entry.output) ? (
                    <div className="space-y-1 pl-4 text-cream/70 border-l border-cream/10">
                      {entry.output.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  ) : (
                    <div className="pl-4 text-cream/70 border-l border-cream/10">
                      {entry.output}
                    </div>
                  )}
                </div>
              ))}

              {/* Live Input Form */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help', 'stack', 'gaming', 'status'..."
                  className="w-full bg-transparent text-cream placeholder-cream/30 focus:outline-none text-xs font-mono"
                />
                <button
                  type="submit"
                  aria-label="Run command"
                  className="text-cream/40 hover:text-cream transition-colors p-1"
                >
                  <CornerDownLeft size={14} />
                </button>
              </form>
            </div>

            {/* Quick Command Chips */}
            <div className="bg-[#0d0d0d] px-4 py-2.5 border-t border-cream/10 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-cream/40">Quick Chips:</span>
              {['whoami', 'stack', 'gaming', 'github', 'status', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-white/5 border border-cream/10 text-[10px] font-mono text-cream/70 hover:bg-cream hover:text-black transition-all cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pillars / Principles */}
      <div>
        <h3 className="text-xl sm:text-2xl font-hn text-cream mb-8 flex items-center gap-2.5">
          <Sparkles size={20} className="text-cream/70" />
          Core Engineering Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-cream/10 flex items-center justify-center text-cream mb-6 group-hover:bg-cream group-hover:text-black transition-all duration-300">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h4 className="text-lg font-hn font-semibold text-cream mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
