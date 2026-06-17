import ScrollReveal from '../components/ScrollReveal'
import { artist, education, speaking, workshops, projects } from '../data/content'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
      {'{ '}{children}{' }'}
    </p>
  )
}

export default function CV() {
  return (
    <div className="pt-14 sm:pt-16">
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-[800px] mx-auto">
        <ScrollReveal>
          <SectionLabel>Curriculum Vitae</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-2">
            {artist.name}
          </h1>
          <p className="text-sm text-[#6b6b6b] mb-12">{artist.title}</p>
        </ScrollReveal>

        {/* Education */}
        <div className="mb-14">
          <ScrollReveal>
            <SectionLabel>Education</SectionLabel>
          </ScrollReveal>
          <div className="space-y-4">
            {education.map((edu) => (
              <ScrollReveal key={edu.institution}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="text-sm font-bold">{edu.institution}</h3>
                    <p className="text-sm text-[#6b6b6b] whitespace-pre-line">{edu.degree}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#6b6b6b] shrink-0 tracking-wider">{edu.period}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Selected Projects */}
        <div className="mb-14">
          <ScrollReveal>
            <SectionLabel>Selected Projects & Performances</SectionLabel>
          </ScrollReveal>
          <div className="space-y-3">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.02}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="text-sm font-bold">{p.name}</h3>
                    <p className="text-xs text-[#6b6b6b] capitalize">{p.category}{p.date ? ` · ${p.date}` : ''}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Speaking */}
        <div className="mb-14">
          <ScrollReveal>
            <SectionLabel>Speaking & Conferences</SectionLabel>
          </ScrollReveal>
          <div className="space-y-5">
            {speaking.map((group) => (
              <div key={group.year}>
                <ScrollReveal>
                  <h3 className="text-sm font-bold mb-2">{group.year}</h3>
                </ScrollReveal>
                <div className="space-y-2.5">
                  {group.events.map((e, i) => (
                    <ScrollReveal key={i} delay={i * 0.02}>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                        <div>
                          <p className="text-sm">{e.title}</p>
                          {e.subtitle && <p className="text-xs text-[#6b6b6b]">{e.subtitle}</p>}
                          <p className="text-xs text-[#6b6b6b]">{e.institution}, {e.location}</p>
                        </div>
                        <span className="text-[10px] font-mono text-[#6b6b6b] shrink-0 tracking-wider">{e.date}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops */}
        <div className="mb-14">
          <ScrollReveal>
            <SectionLabel>Workshops</SectionLabel>
          </ScrollReveal>
          <div className="space-y-3">
            {workshops.map((ws, i) => (
              <ScrollReveal key={ws.id} delay={i * 0.04}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                  <div>
                    <p className="text-sm font-bold">{ws.name}</p>
                    <p className="text-xs text-[#6b6b6b]">{ws.location}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#6b6b6b] shrink-0 tracking-wider">{ws.date}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Contact */}
        <ScrollReveal>
          <div className="border-t border-[#e5e5e5] pt-6">
            <SectionLabel>Contact</SectionLabel>
            <a href={`mailto:${artist.email}`} className="text-sm font-medium hover:underline underline-offset-4">
              {artist.email}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
