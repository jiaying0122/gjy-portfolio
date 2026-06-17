import ScrollReveal from '../components/ScrollReveal'
import { artist, education } from '../data/content'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
      {'{ '}{children}{' }'}
    </p>
  )
}

export default function About() {
  return (
    <div className="pt-14 sm:pt-16">
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel>About</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-12">
            {artist.name} is a {artist.title.toLowerCase()} based between China and the UK.
          </h1>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="aspect-[3/4] bg-[#f0f0f0] overflow-hidden">
                <img
                  src={artist.profilePhoto}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={0.15}>
              <SectionLabel>Biography</SectionLabel>
              <div className="space-y-5 mb-10">
                {artist.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-sm leading-[1.75] text-[#0c0c0c]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-t border-[#e5e5e5] pt-6">
                <SectionLabel>Education</SectionLabel>
                <div className="space-y-5">
                  {education.map((edu) => (
                    <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <h3 className="text-sm font-bold">{edu.institution}</h3>
                        <p className="text-sm text-[#6b6b6b] whitespace-pre-line">{edu.degree}</p>
                      </div>
                      <span className="text-[10px] font-mono text-[#6b6b6b] shrink-0 tracking-wider">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[#e5e5e5] px-6 sm:px-10 lg:px-16 py-14 sm:py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '10+', label: 'Projects' },
            { value: '3', label: 'Degrees' },
            { value: '12+', label: 'Talks & Conferences' },
            { value: '8+', label: 'Countries' },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-1.5">{stat.value}</p>
                <p className="text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.15em]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
