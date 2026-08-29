import { useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Instagram,
  Coffee,
  MessageSquare,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Java Development & Database Systems',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const emailAddress = 'infor.chamika@gmail.com'
  const whatsappNumber = '94789519245'
  const displayPhone = '+94 78 951 9245'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(displayPhone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return

    setIsSubmitting(true)

    // Format WhatsApp Message
    const waText = `⚡ *New Portfolio Message for Chamika* ⚡

👤 *Name:* ${formState.name}
📧 *Email:* ${formState.email}
📌 *Subject:* ${formState.subject || 'Project Inquiry'}

💬 *Message:*
${formState.message}`

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank')

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormState({
        name: '',
        email: '',
        subject: 'Java Development & Database Systems',
        message: '',
      })
    }, 600)
  }

  return (
    <section id="message" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-cream/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/50">
            07 &mdash; Let's Connect
          </span>
          <h2 className="text-4xl sm:text-6xl font-hn font-normal text-cream mt-2 tracking-tight">
            Initiate a Conversation
          </h2>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>WhatsApp &amp; Email Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info & Social Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-hn font-medium text-cream mb-3">
                Have a project or inquiry?
              </h3>
              <p className="text-cream/70 text-sm sm:text-base leading-relaxed font-light">
                Submit the form to send a message directly to my <strong className="text-emerald-400 font-medium">WhatsApp (+94 78 951 9245)</strong> or reach out via email.
              </p>
            </div>

            {/* WhatsApp Direct Card */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Chamika, I saw your portfolio and would like to connect!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-emerald-500/30 flex items-center justify-between group transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Direct WhatsApp
                  </div>
                  <div className="font-mono text-sm text-cream font-medium mt-0.5">
                    {displayPhone}
                  </div>
                </div>
              </div>

              <span className="text-xs font-mono text-cream/70 group-hover:text-cream flex items-center gap-1">
                Chat &rarr;
              </span>
            </a>

            {/* Email Copy Card */}
            <div className="glass-panel p-6 rounded-2xl border border-cream/15 relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-cream/50 mb-2 flex items-center justify-between">
                <span>Official Direct Email</span>
                <span className="text-[10px] text-cream/40">Click to copy</span>
              </div>

              <div className="flex items-center justify-between gap-3 bg-black/40 p-3 rounded-xl border border-cream/10">
                <span className="font-mono text-xs sm:text-sm text-cream truncate">
                  {emailAddress}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    copiedEmail
                      ? 'bg-emerald-400 text-black font-semibold'
                      : 'bg-cream text-black hover:bg-cream/90 cursor-pointer'
                  }`}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cream/50 mb-4">
              Direct Social Channels
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/CHAMI-csr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center justify-between text-cream text-sm font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={18} />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight size={14} className="text-cream/50" />
              </a>

              <a
                href="https://instagram.com/chiki_ins"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center justify-between text-cream text-sm font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram size={18} className="text-pink-400" />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight size={14} className="text-cream/50" />
              </a>

              <a
                href="https://discord.gg/RQZ49PGP2"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center justify-between text-cream text-sm font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare size={18} className="text-indigo-400" />
                  <span>Discord</span>
                </div>
                <ArrowUpRight size={14} className="text-cream/50" />
              </a>

              <a
                href="https://buymeacoffee.com/dev_chamika"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center justify-between text-cream text-sm font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Coffee size={18} className="text-amber-400" />
                  <span>Coffee</span>
                </div>
                <ArrowUpRight size={14} className="text-cream/50" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: WhatsApp Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cream/15">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <MessageCircle size={32} />
                </div>
                <h4 className="text-2xl font-hn font-semibold text-cream">
                  WhatsApp Opened!
                </h4>
                <p className="text-cream/70 text-sm max-w-sm mx-auto font-light leading-relaxed">
                  Your message has been pre-formatted and opened in WhatsApp (+94 78 951 9245). Hit send in WhatsApp to complete transmission!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white/10 text-cream text-xs font-mono hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-hn font-medium text-cream flex items-center gap-2">
                    <MessageSquare size={18} /> Send via WhatsApp
                  </h4>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <MessageCircle size={12} /> Direct to WhatsApp
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-cream/70 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-cream/15 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-emerald-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-cream/70 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-cream/15 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-emerald-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/70 mb-2">
                    Inquiry Topic
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-cream/15 text-cream text-sm focus:outline-none focus:border-emerald-400/50 transition-colors"
                  >
                    <option value="Java Development & Database Systems" className="bg-[#181818]">
                      Java Development &amp; Database Systems
                    </option>
                    <option value="Web Development & UI/UX Design" className="bg-[#181818]">
                      Web Application &amp; UI/UX Design
                    </option>
                    <option value="PHP & Full-Stack Platform" className="bg-[#181818]">
                      PHP &amp; Full-Stack Platform
                    </option>
                    <option value="Gaming & Interactive Web Tools" className="bg-[#181818]">
                      Gaming &amp; Interactive Web Tools
                    </option>
                    <option value="Project Collaboration / Consultation" className="bg-[#181818]">
                      Project Collaboration / Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/70 mb-2">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, goals, or collaboration idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-cream/15 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-emerald-400/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-emerald-400 text-black font-semibold text-sm hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50 cursor-pointer shadow-lg shadow-emerald-950/50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Opening WhatsApp...
                    </span>
                  ) : (
                    <>
                      <MessageCircle size={17} />
                      Send Message via WhatsApp &rarr;
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
