import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/content'

const categories = ['all', 'performance', 'curatorial', 'project']

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-14 sm:pt-16">
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel>All Projects</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5 max-w-2xl">
            Selected Works & Performances
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-sm leading-[1.7] text-[#6b6b6b] max-w-lg mb-10">
            A collection of dance performances, curatorial projects, and collaborative works spanning China, the UK, Europe, and Africa from 2020 to 2026.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#e5e5e5] pb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#0c0c0c] text-[#c8ff00] border-[#0c0c0c]'
                    : 'bg-white text-[#6b6b6b] border-[#e5e5e5] hover:border-[#0c0c0c] hover:text-[#0c0c0c]'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* items-start prevents hover from pushing siblings */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 items-start">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <Link to={`/projects/${project.id}`} className="group block">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#6b6b6b]">
                      ({String(i + 1).padStart(3, '0')})
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0c0c0c]">
                      {project.category}
                    </span>
                  </div>
                  {project.date && <YearBadge year={project.date.split(' ').pop()} />}
                </div>

                {/* Image - fixed aspect, overflow hidden, image scales inside */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f0f0f0] mb-3">
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold tracking-tight group-hover:underline underline-offset-4 decoration-1 mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-[#6b6b6b] line-clamp-2">{project.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
