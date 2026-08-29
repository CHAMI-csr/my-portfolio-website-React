import { ArrowUp, Github, Instagram, MessageSquare, Coffee } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-cream/10 bg-[#050505] text-cream/70 py-16 px-6 sm:px-10 font-hn">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column: Branding & Copyright */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2.5 font-hn font-medium text-lg text-cream tracking-wide">
            <img src="/favicon.svg" alt="CR Logo" className="w-6 h-6 rounded-md border border-cream/15" />
            <span>CHAMIKA SANDEEPA RANASINHA</span>
          </div>
          <p className="text-xs text-cream/50 font-light">
            Software Developer &bull; Gaming Enthusiast &bull; Built with code &amp; craft
          </p>
          <p className="text-[11px] font-mono text-cream/40">
            &copy; {new Date().getFullYear()} C.S RANASINHA (CHAMI-csr). All rights reserved.
          </p>
        </div>

        {/* Center: Tech stack badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-cream/50">
          <span>Java</span>
          <span>&bull;</span>
          <span>PHP 8</span>
          <span>&bull;</span>
          <span>React 18</span>
          <span>&bull;</span>
          <span>TypeScript</span>
          <span>&bull;</span>
          <span>Tailwind</span>
        </div>

        {/* Right Column: Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/94789519245"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp"
            className="p-2.5 rounded-full bg-white/5 border border-cream/10 text-cream/80 hover:text-emerald-400 hover:bg-white/10 transition-colors"
          >
            <MessageSquare size={16} />
          </a>

          <a
            href="https://github.com/CHAMI-csr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-white/5 border border-cream/10 text-cream/80 hover:text-cream hover:bg-white/10 transition-colors"
          >
            <Github size={16} />
          </a>

          <a
            href="https://instagram.com/chiki_ins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-full bg-white/5 border border-cream/10 text-cream/80 hover:text-pink-400 hover:bg-white/10 transition-colors"
          >
            <Instagram size={16} />
          </a>

          <a
            href="https://discord.gg/RQZ49PGP2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord Community"
            className="p-2.5 rounded-full bg-white/5 border border-cream/10 text-cream/80 hover:text-indigo-400 hover:bg-white/10 transition-colors"
          >
            <MessageSquare size={16} />
          </a>

          <a
            href="https://buymeacoffee.com/dev_chamika"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy Me a Coffee"
            className="p-2.5 rounded-full bg-white/5 border border-cream/10 text-cream/80 hover:text-amber-400 hover:bg-white/10 transition-colors"
          >
            <Coffee size={16} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-full bg-cream text-black hover:bg-cream/90 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer shadow-lg ml-2"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
