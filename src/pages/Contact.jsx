import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { artist } from '../data/content'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
      {'{ '}{children}{' }'}
    </p>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="pt-14 sm:pt-16">
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left */}
          <div>
            <ScrollReveal>
              <SectionLabel>Contact</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Get in Touch
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-sm leading-[1.7] text-[#6b6b6b] max-w-md mb-8">
                For enquiries about performances, collaborations, curatorial projects, or academic research, please reach out via email or the form.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.15em] mb-1">Email</p>
                  <a href={`mailto:${artist.email}`} className="text-sm font-bold hover:underline underline-offset-4">
                    {artist.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <div>
            <ScrollReveal delay={0.2}>
              {submitted ? (
                <div className="border border-[#e5e5e5] p-6 text-center">
                  <p className="text-sm font-bold mb-2">Message sent</p>
                  <p className="text-xs text-[#6b6b6b]">Thank you for reaching out. I will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.15em] mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-b border-[#e5e5e5] bg-transparent py-2.5 text-sm focus:outline-none focus:border-[#0c0c0c] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.15em] mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-b border-[#e5e5e5] bg-transparent py-2.5 text-sm focus:outline-none focus:border-[#0c0c0c] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.15em] mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border-b border-[#e5e5e5] bg-transparent py-2.5 text-sm focus:outline-none focus:border-[#0c0c0c] transition-colors"
                      placeholder="Enquiry subject"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.15em] mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border-b border-[#e5e5e5] bg-transparent py-2.5 text-sm focus:outline-none focus:border-[#0c0c0c] transition-colors resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c0c0c] text-[#c8ff00] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#222] transition-colors"
                  >
                    Send Message
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
