import { useState, useEffect } from 'react'
import {
  Github,
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  RefreshCw,
  Activity,
  FolderGit2,
  Calendar,
  Code2,
  Sparkles,
} from 'lucide-react'

interface GitHubProfile {
  login: string
  name: string
  avatar_url: string
  html_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

const FALLBACK_PROFILE: GitHubProfile = {
  login: 'CHAMI-csr',
  name: 'C.S RANASINHA',
  avatar_url: 'https://avatars.githubusercontent.com/u/209485585?v=4',
  html_url: 'https://github.com/CHAMI-csr',
  bio: 'Software Developer & Gaming Enthusiast 🎮. Building cool stuff with Code',
  public_repos: 6,
  followers: 0,
  following: 1,
  created_at: '2025-04-28T13:06:37Z',
  updated_at: new Date().toISOString(),
}

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'register',
    description: "Grab your own sweet-looking '.is-a.dev' subdomain.",
    html_url: 'https://github.com/CHAMI-csr/register',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-08-26T13:25:18Z',
  },
  {
    id: 2,
    name: 'my-portfolio-website',
    description: 'Modern responsive web portfolio showcasing projects and skills.',
    html_url: 'https://github.com/CHAMI-csr/my-portfolio-website',
    language: 'PHP',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-08-26T11:04:04Z',
  },
  {
    id: 3,
    name: 'Event_Management_System',
    description: 'Comprehensive software application for event planning, ticketing, and attendee tracking.',
    html_url: 'https://github.com/CHAMI-csr/Event_Management_System',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-07-03T08:05:15Z',
  },
  {
    id: 4,
    name: 'Library_Management_System',
    description: 'Desktop and database system managing cataloging, member records, and loan histories.',
    html_url: 'https://github.com/CHAMI-csr/Library_Management_System',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-05-20T04:27:03Z',
  },
  {
    id: 5,
    name: 'CHAMI-csr',
    description: 'Special configuration repository & developer profile README for GitHub.',
    html_url: 'https://github.com/CHAMI-csr/CHAMI-csr',
    language: 'Markdown',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-08-26T08:04:02Z',
  },
  {
    id: 6,
    name: 'git-text-project',
    description: 'Version control workflow and collaborative development experiment.',
    html_url: 'https://github.com/CHAMI-csr/git-text-project',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-06-18T11:01:19Z',
  },
]

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: 'bg-yellow-400 text-yellow-950 border-yellow-400/30',
  TypeScript: 'bg-blue-400 text-blue-950 border-blue-400/30',
  Java: 'bg-amber-600 text-amber-100 border-amber-500/30',
  PHP: 'bg-indigo-400 text-indigo-950 border-indigo-400/30',
  HTML: 'bg-orange-500 text-orange-950 border-orange-400/30',
  CSS: 'bg-cyan-400 text-cyan-950 border-cyan-400/30',
  Python: 'bg-emerald-400 text-emerald-950 border-emerald-400/30',
  Markdown: 'bg-zinc-400 text-zinc-950 border-zinc-400/30',
}

export default function GithubLive() {
  const [profile, setProfile] = useState<GitHubProfile>(FALLBACK_PROFILE)
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS)
  const [loading, setLoading] = useState(false)
  const [lastSynced, setLastSynced] = useState<string>('Just now')
  const [isLive, setIsLive] = useState(true)

  const fetchGitHubData = async () => {
    setLoading(true)
    try {
      // 1. Fetch Profile
      const profileRes = await fetch('https://api.github.com/users/CHAMI-csr')
      if (profileRes.ok) {
        const profileData = await profileRes.json()
        setProfile(profileData)
      }

      // 2. Fetch Repositories
      const reposRes = await fetch(
        'https://api.github.com/users/CHAMI-csr/repos?sort=updated&per_page=6'
      )
      if (reposRes.ok) {
        const reposData = await reposRes.json()
        if (Array.isArray(reposData) && reposData.length > 0) {
          // Merge descriptions if null
          const enriched = reposData.map((r: any) => {
            const fallback = FALLBACK_REPOS.find((fb) => fb.name === r.name)
            return {
              id: r.id,
              name: r.name,
              description: r.description || fallback?.description || 'Active software repository on GitHub.',
              html_url: r.html_url,
              language: r.language || fallback?.language || 'Code',
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count,
              updated_at: r.updated_at,
            }
          })
          setRepos(enriched)
        }
      }

      setIsLive(true)
      const now = new Date()
      setLastSynced(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    } catch (err) {
      console.warn('GitHub API rate limit or network issue, using cached profile state.', err)
      setIsLive(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGitHubData()
  }, [])

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString)
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    } catch {
      return 'Recently'
    }
  }

  return (
    <section id="github-live" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-cream/10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/50">
              Live GitHub Telemetry & Repos
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isLive ? 'Live API Connected' : 'Cached Data'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-hn font-normal text-cream tracking-tight flex items-center gap-3">
            Real-time GitHub Stream
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-cream/40">
            Synced: <span className="text-cream/70">{lastSynced}</span>
          </span>

          <button
            onClick={fetchGitHubData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-cream/15 text-xs font-mono text-cream hover:bg-white/10 hover:border-cream/30 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            <span>{loading ? 'Syncing...' : 'Sync Live'}</span>
          </button>

          <a
            href="https://github.com/CHAMI-csr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cream text-black text-xs font-mono font-medium hover:bg-cream/90 transition-transform active:scale-95"
          >
            <Github size={14} />
            <span>@CHAMI-csr</span>
          </a>
        </div>
      </div>

      {/* GitHub Profile Live Highlight Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cream/15 mb-10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cream/5 to-transparent rounded-bl-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* User Info */}
          <div className="flex items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={profile.avatar_url}
                alt={profile.name || profile.login}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-cream/20 object-cover shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#0a0a0a] border border-cream/20 text-cream">
                <Github size={12} />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-hn font-semibold text-cream">
                  {profile.name || 'C.S RANASINHA'}
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-cream/70 border border-cream/10">
                  @{profile.login}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-cream/80 font-light mt-1 max-w-xl leading-relaxed">
                {profile.bio || 'Software Developer & Gaming Enthusiast 🎮. Building cool stuff with Code'}
              </p>
              <div className="flex items-center gap-4 mt-3 text-xs font-mono text-cream/50">
                <span className="flex items-center gap-1">
                  <Calendar size={13} /> Active since {formatDate(profile.created_at)}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0">
            <div className="p-4 rounded-2xl bg-black/40 border border-cream/10 text-center min-w-[90px]">
              <div className="text-2xl font-hn font-bold text-cream">
                {profile.public_repos}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-cream/50 mt-1">
                Repositories
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-cream/10 text-center min-w-[90px]">
              <div className="text-2xl font-hn font-bold text-emerald-400">
                {profile.following}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-cream/50 mt-1">
                Following
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-cream/10 text-center min-w-[90px]">
              <div className="text-2xl font-hn font-bold text-cyan-400">
                100%
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-cream/50 mt-1">
                Open Source
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Repositories Grid */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-hn font-medium text-cream flex items-center gap-2.5">
          <FolderGit2 size={20} className="text-cream/70" />
          Public GitHub Repositories
        </h3>
        <span className="text-xs font-mono text-cream/50">
          Showing {repos.length} live repositories
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo) => {
          const langColor =
            repo.language && LANGUAGE_COLORS[repo.language]
              ? LANGUAGE_COLORS[repo.language]
              : 'bg-white/10 text-cream border-cream/10'

          return (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group border border-cream/10 hover:border-cream/30 transition-all duration-300 relative"
            >
              <div>
                {/* Repo Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-cream/60 group-hover:text-cream transition-colors" />
                    <h4 className="font-mono font-medium text-cream text-base group-hover:text-white transition-colors truncate max-w-[200px]">
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink
                    size={15}
                    className="text-cream/40 group-hover:text-cream group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </div>

                {/* Repo Description */}
                <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed mb-6 line-clamp-2">
                  {repo.description || 'Public software project maintained on GitHub.'}
                </p>
              </div>

              {/* Repo Footer metadata */}
              <div className="pt-4 border-t border-cream/5 flex items-center justify-between text-xs font-mono">
                {repo.language ? (
                  <span className={`px-2 py-0.5 rounded-md border text-[11px] font-mono ${langColor}`}>
                    {repo.language}
                  </span>
                ) : (
                  <span className="text-cream/40 text-[11px]">General</span>
                )}

                <div className="flex items-center gap-3 text-cream/50 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
