import ScrollReveal from '../components/ScrollReveal'
import { speaking, workshops } from '../data/content'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
      {'{ '}{children}{' }'}
    </p>
  )
}

export default function Research() {
  return (
    <div className="pt-14 sm:pt-16">
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel>Research</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5 max-w-3xl">
            Academic & Research
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-sm leading-[1.7] text-[#6b6b6b] max-w-lg mb-16">
            Conferences, symposiums, and workshops exploring dance, curation, archives, and performance studies across Europe and Asia.
          </p>
        </ScrollReveal>

        {/* Speaking */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionLabel>Speaking & Conferences</SectionLabel>
          </ScrollReveal>

          <div className="space-y-12">
            {speaking.map((group) => (
              <div key={group.year}>
                <ScrollReveal>
                  <h3 className="text-sm font-bold mb-4 text-[#0c0c0c]">{group.year}</h3>
                </ScrollReveal>
                <div className="space-y-0">
                  {group.events.map((event, i) => (
                    <ScrollReveal key={i} delay={i * 0.04}>
                      <div className="grid sm:grid-cols-12 gap-3 py-5 border-t border-[#e5e5e5] group hover:bg-[#fafafa] transition-colors px-2 -mx-2">
                        <div className="sm:col-span-5">
                          <h4 className="text-sm font-bold leading-snug">{event.title}</h4>
                          {event.subtitle && (
                            <p className="text-xs text-[#6b6b6b] mt-1">{event.subtitle}</p>
                          )}
                        </div>
                        <div className="sm:col-span-4">
                          <p className="text-sm text-[#6b6b6b]">{event.institution}</p>
                          <p className="text-xs text-[#6b6b6b] mt-0.5">{event.location}</p>
                        </div>
                        <div className="sm:col-span-3 sm:text-right">
                          <span className="text-[10px] font-mono text-[#6b6b6b] tracking-wider">{event.date}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops */}
        <div>
          <ScrollReveal>
            <SectionLabel>Workshops</SectionLabel>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workshops.map((ws, i) => (
              <ScrollReveal key={ws.id} delay={i * 0.06}>
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-[#f0f0f0] mb-3">
                    {ws.images.length > 0 ? (
                      <img
                        src={ws.images[0]}
                        alt={ws.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#6b6b6b] text-xs">
                        No image
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-bold mb-0.5">{ws.name}</h3>
                  <p className="text-xs text-[#6b6b6b] mb-0.5">{ws.location}</p>
                  <span className="text-[10px] font-mono text-[#6b6b6b] tracking-wider">{ws.date}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
