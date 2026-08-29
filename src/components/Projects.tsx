import { useState, useEffect } from 'react'
import {
  ExternalLink,
  Github,
  Maximize2,
  X,
  Code2,
  Sparkles,
  CheckCircle,
  ArrowRight,
  FolderGit2,
} from 'lucide-react'

export interface Project {
  id: string
  title: string
  category: 'java' | 'web' | 'tools'
  tagline: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl: string
  metrics: string
  caseStudy: {
    overview: string
    challenge: string
    solution: string
    features: string[]
    architecture: string
  }
}

const PROJECTS: Project[] = [
  {
    id: 'event-management-system',
    title: 'Event Management System',
    category: 'java',
    tagline: 'Enterprise-grade Java database system for event scheduling & attendee tracking.',
    description:
      'A comprehensive software application built in Java featuring event lifecycle management, ticket reservation workflows, venue scheduling, and relational database records.',
    tech: ['Java', 'Object-Oriented Design', 'MySQL / Relational DB', 'CRUD System', 'Desktop UI'],
    liveUrl: 'https://github.com/CHAMI-csr/Event_Management_System',
    githubUrl: 'https://github.com/CHAMI-csr/Event_Management_System',
    metrics: 'Production Java OOP',
    caseStudy: {
      overview:
        'Event Management System was developed to centralize event organization, automate ticketing processes, and maintain accurate attendee and revenue records in a single cohesive system.',
      challenge:
        'Handling concurrent booking requests while ensuring transactional database consistency and preventing double-booking of event venues.',
      solution:
        'Engineered an Object-Oriented MVC architecture with relational schema constraints and prepared statement queries for secure, collision-free database transactions.',
      features: [
        'Complete Event Creation, Modification, and Deletion (CRUD)',
        'Attendee registration and automated ticket verification',
        'Venue availability calendar and scheduling conflict detector',
        'Relational data persistence with structured SQL queries',
      ],
      architecture:
        'Modular Java Desktop Application designed with OOP principles, separating presentation layers from business logic and database access objects (DAO).',
    },
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    category: 'java',
    tagline: 'Desktop inventory and borrowing management system engineered in Java.',
    description:
      'A robust system engineered to streamline book cataloging, member account histories, borrowing/return checkouts, and automated fine calculation.',
    tech: ['Java', 'OOP Architecture', 'Database Management', 'Data Structures', 'Desktop GUI'],
    liveUrl: 'https://github.com/CHAMI-csr/Library_Management_System',
    githubUrl: 'https://github.com/CHAMI-csr/Library_Management_System',
    metrics: 'Zero Data Loss SLA',
    caseStudy: {
      overview:
        'Built to modernize traditional library records, this system provides administrators with instantaneous book search, borrowing validation, and member accountability.',
      challenge:
        'Maintaining fast book catalog search across hundreds of records while accurately computing overdue fines and tracking multiple copies per title.',
      solution:
        'Implemented optimized search filters and automated timestamp difference algorithms to instantly calculate overdue duration and accurate penalty fines.',
      features: [
        'Instant book search by title, author, category, or ISBN',
        'Member checkout & return management with due date tracking',
        'Automated penalty fee calculation for overdue returns',
        'Comprehensive activity reports and inventory summaries',
      ],
      architecture:
        'Object-Oriented Java application utilizing modular domain models (Book, Member, Transaction) connected to a structured relational database backend.',
    },
  },
  {
    id: 'my-portfolio-website',
    title: 'Chamika Portfolio Engine',
    category: 'web',
    tagline: 'Interactive portfolio platform with Web Audio FX & Canvas particles.',
    description:
      'High-performance web portfolio developed with a Cyberpunk & Neo-Glassmorphism visual theme, interactive HTML5 Canvas star constellation, and procedural Web Audio synthesizer.',
    tech: ['PHP 8', 'JavaScript (ES6+)', 'HTML5 Canvas', 'Web Audio API', 'CSS3 Variables'],
    liveUrl: 'https://github.com/CHAMI-csr/my-portfolio-website',
    githubUrl: 'https://github.com/CHAMI-csr/my-portfolio-website',
    metrics: 'Custom Audio Synthesizer',
    caseStudy: {
      overview:
        'Designed as a creative digital experience to demonstrate front-end audio visual engineering, custom particle math, and modular PHP backend routing.',
      challenge:
        'Creating interactive physics-based particle connections and high-tech audio chimes without relying on heavy external audio or canvas libraries.',
      solution:
        'Authored a custom Web Audio API oscillator synthesis script and an optimized distance-checking particle render loop with zero third-party dependencies.',
      features: [
        'Interactive HTML5 Canvas constellation reacting to cursor physics',
        'Procedural Web Audio synthesizer generating futuristic click & hover sounds',
        'Interactive CLI Developer Terminal with custom tab commands',
        'Cyberpunk neo-glassmorphism theme with smooth color tokens',
      ],
      architecture:
        'Modular PHP 8 architecture with dedicated API proxies, CSRF-protected contact handlers, and lightweight vanilla ES6+ client scripts.',
    },
  },
  {
    id: 'is-a-dev-register',
    title: 'is-a.dev Subdomain Tool',
    category: 'tools',
    tagline: 'Open-source DNS and custom developer subdomain provisioning engine.',
    description:
      'An automated tool and configuration setup for registering, verifying, and routing personal developer subdomains under the `.is-a.dev` domain network.',
    tech: ['JavaScript', 'JSON Schema', 'DNS Routing', 'GitHub Actions', 'CI/CD'],
    liveUrl: 'https://github.com/CHAMI-csr/register',
    githubUrl: 'https://github.com/CHAMI-csr/register',
    metrics: 'Automated CI/CD DNS',
    caseStudy: {
      overview:
        'Provides software developers with an easy, verified pathway to secure custom domain routing for their GitHub Pages and web applications.',
      challenge:
        'Validating JSON record syntax, preventing domain record collisions, and automating DNS validation pull requests.',
      solution:
        'Configured strict JSON schema validation and automated CI checks to verify record integrity before deploying to global DNS nameservers.',
      features: [
        'Automated CNAME and A record verification',
        'Strict schema checking for developer profile definitions',
        'Seamless integration with GitHub Pages hosting',
      ],
      architecture:
        'GitOps infrastructure using GitHub Actions to validate and synchronize DNS records across global DNS providers.',
    },
  },
  {
    id: 'git-text-project',
    title: 'Git Workflow & Collaboration Suite',
    category: 'tools',
    tagline: 'Version control workflows and collaborative development testbed.',
    description:
      'A hands-on repository exploring advanced Git branching, merge conflict resolution strategies, commit squashing, and automated GitHub Actions workflows.',
    tech: ['Git', 'TypeScript', 'GitHub Actions', 'Markdown', 'CI/CD'],
    liveUrl: 'https://github.com/CHAMI-csr/git-text-project',
    githubUrl: 'https://github.com/CHAMI-csr/git-text-project',
    metrics: '100% Verified Commits',
    caseStudy: {
      overview:
        'Used to test and document clean Git version control workflows, automated linting pipelines, and multi-developer collaboration practices.',
      challenge:
        'Establishing clean merge patterns and avoiding messy branch commit histories during complex feature integrations.',
      solution:
        'Practiced rebase workflows, atomic commits, pull request templates, and automated CI verification before merging to main.',
      features: [
        'Clean branching and release tagging conventions',
        'Automated CI/CD checks on pull requests',
        'Documented guidelines for collaborative development',
      ],
      architecture:
        'Standardized Git repository structure with GitHub Actions workflow automation.',
    },
  },
]

const CATEGORY_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'java', label: 'Java Systems' },
  { id: 'web', label: 'Web & PHP' },
  { id: 'tools', label: 'Tools & DevOps' },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-cream/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/50 flex items-center gap-2">
            <FolderGit2 size={14} className="text-cream/70" />
            05 &mdash; Verified Projects &amp; Repositories
          </span>
          <h2 className="text-4xl sm:text-6xl font-hn font-normal text-cream mt-2 tracking-tight">
            Real Software Projects
          </h2>
        </div>
        <p className="text-cream/70 text-sm sm:text-base max-w-md leading-relaxed font-light">
          Real software applications engineered in Java, PHP 8, JavaScript, and modern front-end technologies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-cream text-black font-semibold shadow-lg scale-105'
                : 'bg-white/5 text-cream/70 border border-cream/10 hover:bg-white/10 hover:text-cream'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group border border-cream/10 hover:border-cream/30"
          >
            <div>
              {/* Top metadata */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs text-cream/40 tracking-wider">
                  0{index + 1} &mdash; {project.category.toUpperCase()}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cream/10 text-cream border border-cream/15">
                  {project.metrics}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-hn font-medium text-cream mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-normal text-cream/90 mb-3 font-hn">
                {project.tagline}
              </p>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light mb-6">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/50 text-cream/80 border border-cream/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-cream/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-cream hover:text-white group/btn cursor-pointer"
              >
                <span>Case Study &amp; Architecture</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Source on GitHub"
                  className="p-2.5 rounded-xl bg-white/5 border border-cream/10 text-cream/80 hover:text-cream hover:bg-white/10 transition-colors"
                >
                  <Github size={16} />
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  aria-label="Expand Project Details"
                  className="p-2.5 rounded-xl bg-cream text-black hover:bg-cream/90 transition-transform active:scale-95 cursor-pointer"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#121212] border border-cream/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close Case Study"
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-cream/10 text-cream hover:bg-white/15 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                Verified Architecture &bull; {selectedProject.category.toUpperCase()}
              </span>
              <h3 className="text-3xl sm:text-4xl font-hn font-semibold text-cream mt-2 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-cream/70 text-sm font-light">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 my-6 pt-4 border-t border-cream/10">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-cream border border-cream/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-6 text-cream/80 text-sm sm:text-base font-light leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cream font-semibold mb-2">
                  Project Overview
                </h4>
                <p>{selectedProject.caseStudy.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/40 p-6 rounded-2xl border border-cream/5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold mb-2">
                    Key Technical Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-cream/70">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                    Engineered Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-cream/70">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cream font-semibold mb-3">
                  Key Implemented Features
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.caseStudy.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-cream/80">
                      <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cream font-semibold mb-2">
                  System Architecture
                </h4>
                <p className="text-xs sm:text-sm text-cream/70">
                  {selectedProject.caseStudy.architecture}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-10 pt-6 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-cream hover:bg-white/20 transition-colors text-xs font-mono"
              >
                <Github size={16} />
                Open Repository on GitHub &rarr;
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-cream text-black text-xs font-mono font-medium hover:bg-cream/90 transition-colors cursor-pointer"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
