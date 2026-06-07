import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { artist, projects } from '../data/content'

const featuredProjects = [
  projects.find(p => p.id === 'vapour-script'),
  projects.find(p => p.id === 'echoing-the-voice'),
  projects.find(p => p.id === 'kinesthetic-imagination'),
  projects.find(p => p.id === 'huxi'),
  projects.find(p => p.id === 'tailes-of-veils'),
  projects.find(p => p.id === 'mishandled-archive'),
].filter(Boolean)

const portfolioHighlights = [
  projects.find(p => p.id === 'vapour-script'),
  projects.find(p => p.id === 'huxi'),
  projects.find(p => p.id === 'tailes-of-veils'),
  projects.find(p => p.id === 'rave-arcade'),
].filter(Boolean)

function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-[11px] font-mono tracking-[0.15em] mb-3 ${className}`}>
      {'{ '}{children}{' }'}
    </p>
  )
}

function YearBadge({ year }) {
  return (
    <span className="inline-block bg-[#0c0c0c] text-[#c8ff00] text-[11px] font-bold px-2 py-0.5 tracking-wider">
      {year}
    </span>
  )
}

function extractYear(dateStr) {
  if (!dateStr) return null
  const match = dateStr.match(/\d{4}/)
  return match ? match[0] : null
}

export default function Home() {
  const [hoveredHighlight, setHoveredHighlight] = useState(0)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0c0c0c]">
        <div className="absolute inset-0">
          <img
            src={artist.heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 sm:pb-32 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[#c8ff00] text-xs font-mono uppercase tracking-[0.25em] mb-5">
              {artist.title}
            </p>
            <h1 className="text-white text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.82] mb-8">
              {artist.name.split(' ')[0]}
              <br />
              <span className="text-white/80">{artist.name.split(' ')[1]}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Section — overlapping photos + text + button */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Overlapping Photos */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal>
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                {/* Top-left photo (smaller) */}
                <div className="relative z-10 w-[55%] aspect-square overflow-hidden bg-[#f0f0f0]">
                  <img
                    src="/images/portfolio/05b9ab_beb6f97b9d3045f797a3bcda7e85640e~mv2.jpg"
                    alt="Portfolio 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom-right photo (larger, overlapping) */}
                <div className="absolute bottom-0 right-0 z-20 w-[70%] aspect-[4/5] overflow-hidden bg-[#f0f0f0] translate-y-[15%]">
                  <img
                    src="/images/portfolio/05b9ab_ac37c1948d70492cac7eea1bd823b8d1~mv2.jpg"
                    alt="Portfolio 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Spacer for overlap */}
                <div className="h-20 sm:h-28" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Text + Button */}
          <div className="lg:col-span-7 lg:pl-6">
            <ScrollReveal delay={0.15}>
              <SectionLabel className="text-[#6b6b6b]">About Me</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg lg:text-xl leading-[1.65] text-[#0c0c0c] font-medium tracking-tight mb-6">
                {artist.bio.slice(0, 180)}...
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <Link
                to="/about"
                className="inline-flex items-center group"
              >
                <span className="px-5 py-2.5 bg-[#0c0c0c] text-white text-xs font-bold uppercase tracking-[0.1em]">
                  About Me
                </span>
                <span className="w-9 h-9 bg-[#c8ff00] flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-[#0c0c0c]" />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <SectionLabel className="text-[#6b6b6b]">Recent Portfolio</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1] max-w-lg">
                Dance Offers Moments of Freedom
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 sm:mt-0 text-xs font-medium text-[#0c0c0c] hover:text-[#6b6b6b] transition-colors border-b border-[#0c0c0c] pb-0.5 inline-flex items-center gap-1.5 self-start"
            >
              <ArrowUpRight className="w-3 h-3" />
              SEE ALL PROJECTS
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid with items-start to prevent hover from pushing siblings */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 items-start">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.06}>
              <Link to={`/projects/${project.id}`} className="group block">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#6b6b6b]">
                      ({String(i + 1).padStart(3, '0')})
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0c0c0c]">
                      {project.name}
                    </span>
                  </div>
                  {extractYear(project.date) && <YearBadge year={extractYear(project.date)} />}
                </div>

                {/* Image - fixed aspect, overflow hidden, image scales inside */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f0f0f0]">
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#6b6b6b] text-xs">
                      No image
                    </div>
                  )}
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Yellow Portfolio Highlights Block */}
      <section className="bg-[#c8ff00] px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <ScrollReveal>
              <SectionLabel className="text-[#0c0c0c]/60">Recent Works</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0c0c0c]">
                Portfolio Highlights
              </h2>
            </ScrollReveal>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Left — Image that changes on hover */}
            <ScrollReveal>
              <div className="aspect-square overflow-hidden bg-[#0c0c0c]">
                <img
                  src={portfolioHighlights[hoveredHighlight]?.images[0] || '/images/portfolio/05b9ab_beb6f97b9d3045f797a3bcda7e85640e~mv2.jpg'}
                  alt={portfolioHighlights[hoveredHighlight]?.name || 'Highlight'}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
            </ScrollReveal>

            {/* Right — List */}
            <div className="flex flex-col justify-center h-full">
              {portfolioHighlights.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.08}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="group block py-5 border-b border-[#0c0c0c]/20"
                    onMouseEnter={() => setHoveredHighlight(i)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#0c0c0c] group-hover:underline underline-offset-4 decoration-1">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-[#0c0c0c] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#e5e5e5] px-6 sm:px-10 lg:px-16 py-20 sm:py-28 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1]">
              Let's create something together.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="lg:pl-10">
              <p className="text-sm leading-[1.7] text-[#6b6b6b] mb-6">
                Open to collaborations, commissions, and conversations about dance, curation, and performance art across borders.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#0c0c0c] text-[#c8ff00] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#222] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
