import { useState } from 'react'
import {
  Figma,
  Layout,
  Sparkles,
  Layers,
  Sliders,
  CheckCircle2,
  Eye,
  Smartphone,
  Monitor,
  MousePointerClick,
  Palette,
} from 'lucide-react'

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Research & UX Strategy',
    icon: Eye,
    tagline: 'Understanding user pain points and information architecture.',
    description:
      'Mapping user flows, wireframing interaction hierarchies, and prioritizing ergonomic navigation before writing a single line of code.',
    deliverables: ['User Flow Maps', 'Information Hierarchy', 'Low-Fidelity Wireframes'],
  },
  {
    step: '02',
    title: 'Design Systems & Tokens',
    icon: Palette,
    tagline: 'Figma-based atomic components and accessible color palettes.',
    description:
      'Building scalable token libraries in Figma: typography hierarchies, spacing grids, contrast ratios (WCAG 2.1 AA), and interactive component states.',
    deliverables: ['Figma Design System', 'Color & Spacing Tokens', 'Interactive Prototypes'],
  },
  {
    step: '03',
    title: 'Interactive Prototyping',
    icon: MousePointerClick,
    tagline: 'Testing real motion choreography and tactile micro-interactions.',
    description:
      'Designing natural physics-based hover transitions, click feedback, drawer transitions, and fluid touch gestures with zero perceptible lag.',
    deliverables: ['60fps Animation Timing', 'Haptic & Visual Feedback', 'Responsive Layouts'],
  },
  {
    step: '04',
    title: 'Pixel-Perfect Engineering',
    icon: Layout,
    tagline: 'Translating Figma design directly into type-safe React & Tailwind.',
    description:
      'Bridging design and production code with 100% fidelity. Zero layout shift (CLS: 0), cross-browser consistency, and ultra-fast rendering.',
    deliverables: ['React & Tailwind Code', 'Full Mobile Adaptability', 'Lighthouse 100 Score'],
  },
]

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState(0)

  // Interactive UI playground preview state for visitors
  const [buttonVariant, setButtonVariant] = useState<'solid' | 'outline' | 'glass'>('solid')
  const [themeAccent, setThemeAccent] = useState<'cream' | 'cyan' | 'emerald'>('cream')

  const accentColors = {
    cream: 'bg-cream text-black hover:bg-cream/90 border-cream',
    cyan: 'bg-cyan-400 text-black hover:bg-cyan-300 border-cyan-400',
    emerald: 'bg-emerald-400 text-black hover:bg-emerald-300 border-emerald-400',
  }

  return (
    <section id="design-process" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-cream/10">
      {/* Background ambient aura */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/50 flex items-center gap-2">
            <Figma size={14} className="text-cream/70" />
            03 &mdash; UI / UX Engineering &amp; Product Design
          </span>
          <h2 className="text-4xl sm:text-6xl font-hn font-normal text-cream mt-2 tracking-tight">
            Design Philosophy &amp; Craft
          </h2>
        </div>
        <p className="text-cream/70 text-sm sm:text-base max-w-md leading-relaxed font-light">
          Combining visual aesthetics, human ergonomics, and high-performance front-end code.
        </p>
      </div>

      {/* 4-Step Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {PROCESS_STEPS.map((item, index) => {
          const Icon = item.icon
          const isSelected = activeStep === index

          return (
            <div
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`glass-panel p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between group border ${
                isSelected
                  ? 'border-cream/40 bg-[#161616] shadow-xl translate-y-[-4px]'
                  : 'border-cream/10 hover:border-cream/25'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-cream/40">{item.step}</span>
                  <div
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isSelected
                        ? 'bg-cream text-black border-cream'
                        : 'bg-white/5 text-cream/80 border-cream/10 group-hover:text-cream'
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-lg font-hn font-semibold text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-cream/80 font-normal mb-3 leading-relaxed">
                  {item.tagline}
                </p>
                <p className="text-xs text-cream/60 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream/5 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cream/40 block mb-1">
                  Deliverables:
                </span>
                {item.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-cream/75 font-mono">
                    <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Interactive UI/UX Design System Showcase / Live Token Playground */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cream/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: UI Principles */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sliders size={15} />
              <span>Interactive UI Design Tokens</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-hn font-semibold text-cream">
              Clean, Intuitive &amp; Accessible Interfaces
            </h3>

            <p className="text-sm text-cream/70 font-light leading-relaxed">
              Great UI/UX isn't just about how it looks—it's about how frictionless it feels for the user. Every button, input, font size, and layout is calculated for maximum legibility and comfort.
            </p>

            {/* Core UX checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-black/40 border border-cream/10 flex items-center gap-2.5">
                <Smartphone size={16} className="text-cream/60" />
                <span className="text-xs font-mono text-cream/80">Mobile-First Touch</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-cream/10 flex items-center gap-2.5">
                <Monitor size={16} className="text-cream/60" />
                <span className="text-xs font-mono text-cream/80">Responsive Grids</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-cream/10 flex items-center gap-2.5">
                <Sparkles size={16} className="text-cream/60" />
                <span className="text-xs font-mono text-cream/80">WCAG AA Contrast</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-cream/10 flex items-center gap-2.5">
                <Layers size={16} className="text-cream/60" />
                <span className="text-xs font-mono text-cream/80">Micro-Interactions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Token Playground */}
          <div className="lg:col-span-6 bg-[#0c0c0c] p-6 sm:p-8 rounded-2xl border border-cream/15 space-y-6">
            <div className="flex items-center justify-between border-b border-cream/10 pb-4">
              <span className="text-xs font-mono text-cream/60 uppercase tracking-wider">
                Live Interactive Design Playground
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Live Preview
              </span>
            </div>

            {/* Variant Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-cream/70 block">
                Component Style:
              </label>
              <div className="flex flex-wrap gap-2">
                {(['solid', 'outline', 'glass'] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setButtonVariant(v)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${
                      buttonVariant === v
                        ? 'bg-cream text-black font-semibold'
                        : 'bg-white/5 text-cream/70 border border-cream/10 hover:text-cream'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Accent Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-cream/70 block">
                Accent Token:
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setThemeAccent('cream')}
                  className={`px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 border transition-all ${
                    themeAccent === 'cream'
                      ? 'border-cream text-cream bg-white/10'
                      : 'border-cream/20 text-cream/60'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cream inline-block" /> Cream
                </button>

                <button
                  onClick={() => setThemeAccent('cyan')}
                  className={`px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 border transition-all ${
                    themeAccent === 'cyan'
                      ? 'border-cyan-400 text-cyan-400 bg-cyan-950/40'
                      : 'border-cream/20 text-cream/60'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" /> Cyber Cyan
                </button>

                <button
                  onClick={() => setThemeAccent('emerald')}
                  className={`px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 border transition-all ${
                    themeAccent === 'emerald'
                      ? 'border-emerald-400 text-emerald-400 bg-emerald-950/40'
                      : 'border-cream/20 text-cream/60'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> Neon Emerald
                </button>
              </div>
            </div>

            {/* Rendered Live Component */}
            <div className="pt-4 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-cream/50">
                Rendered Component:
              </div>

              {buttonVariant === 'solid' && (
                <button
                  className={`px-6 py-3 rounded-xl font-medium text-xs font-mono transition-transform duration-200 hover:scale-105 active:scale-95 shadow-lg ${accentColors[themeAccent]}`}
                >
                  Interactive CTA Button &rarr;
                </button>
              )}

              {buttonVariant === 'outline' && (
                <button
                  className={`px-6 py-3 rounded-xl font-medium text-xs font-mono border transition-all duration-200 hover:scale-105 active:scale-95 bg-transparent ${
                    themeAccent === 'cream'
                      ? 'border-cream text-cream hover:bg-cream hover:text-black'
                      : themeAccent === 'cyan'
                      ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                      : 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black'
                  }`}
                >
                  Outlined Component &rarr;
                </button>
              )}

              {buttonVariant === 'glass' && (
                <button
                  className={`px-6 py-3 rounded-xl font-medium text-xs font-mono glass-panel border transition-all duration-200 hover:scale-105 active:scale-95 text-cream ${
                    themeAccent === 'cyan'
                      ? 'border-cyan-400/40 text-cyan-300'
                      : themeAccent === 'emerald'
                      ? 'border-emerald-400/40 text-emerald-300'
                      : 'border-cream/30 text-cream'
                  }`}
                >
                  Glassmorphism Action &rarr;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
