import { useState } from 'react'
import {
  Github,
  Instagram,
  Coffee,
  MessageSquare,
  ExternalLink,
  Award,
  Flame,
  Code2,
  Sparkles,
  Zap,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react'

const SOCIAL_ACCOUNTS = [
  {
    name: 'WhatsApp Direct',
    handle: '+94 78 951 9245',
    url: 'https://wa.me/94789519245',
    icon: MessageSquare,
    description: 'Instant direct messaging for project inquiries, freelance work, and quick chat.',
    color: 'from-emerald-950/40 to-green-950/40',
    border: 'border-emerald-500/40',
    tag: 'Direct Chat',
  },
  {
    name: 'GitHub Profile',
    handle: '@CHAMI-csr',
    url: 'https://github.com/CHAMI-csr',
    icon: Github,
    description: 'Active open-source repositories, Java systems, PHP web apps, and code experiments.',
    color: 'from-zinc-800 to-zinc-900',
    border: 'border-zinc-700/40',
    tag: 'Source Code',
  },
  {
    name: 'Instagram',
    handle: '@chiki_ins',
    url: 'https://instagram.com/chiki_ins',
    icon: Instagram,
    description: 'Behind-the-scenes dev lifestyle, gaming setups, UI inspiration, and personal updates.',
    color: 'from-pink-950/40 to-purple-950/40',
    border: 'border-pink-500/30',
    tag: 'Community',
  },
  {
    name: 'Discord Community',
    handle: 'discord.gg/RQZ49PGP2',
    url: 'https://discord.gg/RQZ49PGP2',
    icon: MessageSquare,
    description: 'Gaming discussions, real-time developer chat, collaborative coding, and tech talks.',
    color: 'from-indigo-950/40 to-blue-950/40',
    border: 'border-indigo-500/30',
    tag: 'Live Chat',
  },
  {
    name: 'Buy Me a Coffee',
    handle: 'buymeacoffee.com/dev_chamika',
    url: 'https://buymeacoffee.com/dev_chamika',
    icon: Coffee,
    description: 'Support my open-source projects, coffee-fueled coding sessions, and software tools.',
    color: 'from-amber-950/40 to-yellow-950/40',
    border: 'border-amber-500/30',
    tag: 'Support & Coffee',
  },
]

export default function SocialHub() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const realEmail = 'infor.chamika@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(realEmail)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section id="social-hub" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-cream/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/50 flex items-center gap-2">
            <Sparkles size={14} className="text-cyan-400" />
            06 &mdash; Social &amp; Community Ecosystem
          </span>
          <h2 className="text-4xl sm:text-6xl font-hn font-normal text-cream mt-2 tracking-tight">
            Connect Across Channels
          </h2>
        </div>
        <p className="text-cream/70 text-sm sm:text-base max-w-md leading-relaxed font-light">
          Follow my latest projects, gaming setups, and developer experiments across official social platforms.
        </p>
      </div>

      {/* Social Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {SOCIAL_ACCOUNTS.map((acc) => {
          const Icon = acc.icon

          return (
            <a
              key={acc.name}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border flex flex-col justify-between group transition-all duration-300 relative overflow-hidden ${acc.border}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-cream/10 text-cream group-hover:bg-cream group-hover:text-black transition-colors duration-300">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-hn font-semibold text-cream group-hover:text-white transition-colors">
                      {acc.name}
                    </h3>
                    <span className="text-xs font-mono text-cream/60 group-hover:text-cream/80 transition-colors">
                      {acc.handle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-cream/70 border border-cream/10">
                    {acc.tag}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 border border-cream/10 text-cream/60 group-hover:text-cream group-hover:translate-x-1 transition-all">
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed mb-4">
                {acc.description}
              </p>

              <div className="pt-3 border-t border-cream/5 flex items-center justify-between text-xs font-mono text-cream/50">
                <span>Direct Official Link</span>
                <span className="text-cream/80 group-hover:text-cream transition-colors flex items-center gap-1">
                  Visit {acc.name} &rarr;
                </span>
              </div>
            </a>
          )
        })}
      </div>

      {/* GitHub Real Trophy & Stats Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cream/15 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Award size={16} />
              <span>Verified Developer Activity</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-hn font-semibold text-cream">
              Chamika Sandeepa Ranasinha
            </h3>
            <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
              Software Developer &amp; Gaming Enthusiast building responsive web applications, Java database systems, PHP platforms, and creative UI/UX experiences with clean code.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-cream border border-cream/10 flex items-center gap-1.5">
                <Code2 size={13} className="text-cyan-400" /> Java &bull; PHP 8 &bull; JS &bull; React
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-cream border border-cream/10 flex items-center gap-1.5">
                <Zap size={13} className="text-amber-400" /> Gaming Mechanics &amp; UI
              </span>
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-cream/10 space-y-4 shrink-0 max-w-sm w-full">
            <div className="text-xs font-mono uppercase tracking-wider text-cream/50 flex items-center justify-between">
              <span>Official Email</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
              </span>
            </div>

            <div className="p-3 rounded-xl bg-black/50 border border-cream/10 flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-cream truncate">
                {realEmail}
              </span>
              <button
                onClick={copyEmail}
                className="px-2.5 py-1 rounded-lg bg-cream text-black text-xs font-mono font-medium hover:bg-cream/90 transition-all flex items-center gap-1 shrink-0 cursor-pointer"
              >
                {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>

            <a
              href={`mailto:${realEmail}`}
              className="w-full py-2.5 rounded-xl bg-white/10 text-cream hover:bg-white/15 text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Send Direct Email &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
