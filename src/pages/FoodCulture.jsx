import ScrollReveal from '../components/ScrollReveal'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
      {'{ '}{children}{' }'}
    </p>
  )
}

export default function FoodCulture() {
  return (
    <div className="pt-14 sm:pt-16">
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-[1400px] mx-auto text-center">
        <ScrollReveal>
          <SectionLabel>Food Culture</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Coming Soon
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-sm leading-[1.7] text-[#6b6b6b] max-w-lg mx-auto">
            This section is currently under development. Content exploring the intersection of food, culture, and performance will be available here soon.
          </p>
        </ScrollReveal>
      </section>
    </div>
  )
}
