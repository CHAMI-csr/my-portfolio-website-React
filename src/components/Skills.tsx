import { useState } from 'react'
import {
  Code,
  Server,
  Database,
  Gamepad,
  Layers,
  CheckCircle2,
  Cpu,
  Boxes,
  Zap,
} from 'lucide-react'

interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'cloud' | 'interactive'
  level: string
  highlight?: boolean
  description: string
}

const CATEGORIES = [
  { id: 'all', label: 'All Tech' },
  { id: 'frontend', label: 'Frontend UI' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'cloud', label: 'Cloud & Database' },
  { id: 'interactive', label: 'Gaming & Creative' },
]

const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    name: 'React 18 / 19',
    category: 'frontend',
    level: 'Core Expertise',
    highlight: true,
    description: 'Component architecture, custom hooks, concurrent features, memoization & performance.',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'Core Expertise',
    highlight: true,
    description: 'Strict type safety, generics, utility types, compile-time error prevention.',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Advanced',
    highlight: true,
    description: 'Responsive design, custom utility plugins, fluid layouts & design systems.',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 'Advanced',
    description: 'App Router, Server Components (RSC), SSR, SSG, SEO optimization.',
  },
  {
    name: 'Vite & Modern Tooling',
    category: 'frontend',
    level: 'Advanced',
    description: 'Ultra-fast HMR, bundle splitting, PostCSS & build optimization.',
  },
  {
    name: 'HTML5 & Modern CSS3',
    category: 'frontend',
    level: 'Expert',
    description: 'Semantic markup, CSS Grid/Flexbox, CSS variables, keyframe animations.',
  },
  {
    name: 'State Management',
    category: 'frontend',
    level: 'Advanced',
    description: 'Zustand, Redux Toolkit, React Context, TanStack Query for server state.',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Advanced',
    highlight: true,
    description: 'Event-driven asynchronous runtime, microservices, file streams & worker threads.',
  },
  {
    name: 'Express.js & REST APIs',
    category: 'backend',
    level: 'Advanced',
    description: 'Secure routing, middleware pipelines, JWT auth, rate limiting & error handling.',
  },
  {
    name: 'Python',
    category: 'backend',
    level: 'Proficient',
    description: 'Data processing, automation scripts, backend logic & algorithmic utilities.',
  },
  {
    name: 'GraphQL',
    category: 'backend',
    level: 'Intermediate',
    description: 'Schema design, resolvers, Apollo Client, typed queries & mutations.',
  },
  {
    name: 'Authentication & Security',
    category: 'backend',
    level: 'Advanced',
    description: 'OAuth 2.0, JWT tokens, bcrypt hashing, CORS, CSRF & sanitized inputs.',
  },

  // Cloud & Database
  {
    name: 'PostgreSQL',
    category: 'cloud',
    level: 'Advanced',
    highlight: true,
    description: 'Relational schema design, indexed queries, transactions, Prisma ORM.',
  },
  {
    name: 'MongoDB',
    category: 'cloud',
    level: 'Advanced',
    description: 'Document models, aggregation pipelines, Mongoose schemas & indexing.',
  },
  {
    name: 'Supabase & Firebase',
    category: 'cloud',
    level: 'Advanced',
    description: 'Real-time subscriptions, row-level security (RLS), serverless backends.',
  },
  {
    name: 'Git & GitHub Workflows',
    category: 'cloud',
    level: 'Expert',
    highlight: true,
    description: 'Branch management, pull requests, automated CI/CD GitHub Actions.',
  },
  {
    name: 'Docker & Containers',
    category: 'cloud',
    level: 'Intermediate',
    description: 'Containerizing full-stack environments, Docker Compose, consistent dev setups.',
  },

  // Gaming & Creative
  {
    name: 'Canvas & WebGL',
    category: 'interactive',
    level: 'Proficient',
    highlight: true,
    description: '2D/3D visual rendering, particle systems, sprite drawing & game loops.',
  },
  {
    name: 'Game Mechanics Logic',
    category: 'interactive',
    level: 'Advanced',
    highlight: true,
    description: 'Collision physics, state machines, entity-component systems, tick scheduling.',
  },
  {
    name: 'UI/UX & Micro-Interactions',
    category: 'interactive',
    level: 'Advanced',
    description: 'Sensory feedback, subtle sound design, accessible navigation, layout flow.',
  },
]

const WORKFLOW_TOOLS = [
  'VS Code',
  'Git / GitHub',
  'Postman',
  'Figma',
  'Vite',
  'npm / pnpm',
  'Linux / PowerShell',
  'Vercel',
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-cream/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/50">
            04 &mdash; Tech Stack &amp; Capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-hn font-normal text-cream mt-2 tracking-tight">
            Tools & Technical Arsenal
          </h2>
        </div>
        <p className="text-cream/70 text-sm sm:text-base max-w-md leading-relaxed font-light">
          A battle-tested stack engineered for high responsiveness, maintainability, and clean user experiences.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-cream text-black font-semibold shadow-lg scale-105'
                : 'bg-white/5 text-cream/70 border border-cream/10 hover:bg-white/10 hover:text-cream'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group ${
              skill.highlight ? 'border-cream/20' : ''
            }`}
          >
            {skill.highlight && (
              <div className="absolute top-0 right-0 w-20 h-20 bg-cream/5 rounded-bl-full pointer-events-none group-hover:bg-cream/10 transition-colors" />
            )}

            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-hn font-semibold text-cream group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-cream/80 border border-cream/10 whitespace-nowrap">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                {skill.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-cream/5 flex items-center justify-between text-[11px] font-mono text-cream/40">
              <span className="capitalize">{skill.category}</span>
              <span className="flex items-center gap-1 text-cream/60 group-hover:text-cream transition-colors">
                <CheckCircle2 size={13} className="text-emerald-400" /> Active
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Tooling & Workflow bar */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cream/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-cream/10 text-cream">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="text-base font-hn font-medium text-cream">Daily Workflow & Dev Environment</h4>
              <p className="text-xs text-cream/60 font-light">The toolset backing day-to-day development</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {WORKFLOW_TOOLS.map((tool) => (
              <span
                key={tool}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/40 text-cream/80 border border-cream/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
