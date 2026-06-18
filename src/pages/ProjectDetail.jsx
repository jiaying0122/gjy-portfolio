import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/content'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
      {'{ '}{children}{' }'}
    </p>
  )
}

function getYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtube.com')) {
      const videoId = parsed.searchParams.get('v')
      if (videoId) return `https://www.youtube.com/embed/${videoId}`
    }
    if (parsed.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed${parsed.pathname}`
    }
  } catch {
    return null
  }
  return null
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="pt-32 px-6 max-w-[1400px] mx-auto text-center">
        <h1 className="text-xl font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-sm underline underline-offset-4">Back to projects</Link>
      </div>
    )
  }

  const projectIndex = projects.findIndex((p) => p.id === id)

  return (
    <div className="pt-14 sm:pt-16">
      {/* Back + Header */}
      <section className="px-6 sm:px-10 lg:px-16 py-10 sm:py-14 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-[#6b6b6b] hover:text-[#0c0c0c] transition-colors mb-8"
          >
            <ArrowLeft size={13} />
            Back to projects
          </Link>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[10px] font-mono text-[#6b6b6b]">
              ({String(projectIndex + 1).padStart(3, '0')})
            </span>
            <span className="px-2.5 py-0.5 bg-[#0c0c0c] text-[#facc15] text-[10px] font-bold uppercase tracking-wider">
              {project.category}
            </span>
            {project.date && (
              <span className="text-[10px] font-mono text-[#6b6b6b]">{project.date}</span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-6">
            {project.name}
          </h1>
          <p className="text-sm leading-[1.7] text-[#6b6b6b] max-w-xl mb-2">
            {project.description}
          </p>
          {project.venue && (
            <p className="text-[10px] font-mono text-[#6b6b6b] tracking-wider">
              {project.venue}
            </p>
          )}
        </motion.div>
      </section>

      {/* Images */}
      {project.images.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.04} className={i === 0 ? 'sm:col-span-2' : ''}>
                <div className={`overflow-hidden bg-[#f0f0f0] ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={img}
                    alt={`${project.name} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Videos */}
      {project.videos && project.videos.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <SectionLabel>Video</SectionLabel>
          </ScrollReveal>
          <div className="space-y-5">
            {project.videos.map((video, i) => {
              const youtubeEmbed = getYouTubeEmbedUrl(video)
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="aspect-video bg-[#0c0c0c] overflow-hidden">
                    {youtubeEmbed ? (
                      <iframe
                        src={youtubeEmbed}
                        title={`${project.name} video ${i + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        controls
                        className="w-full h-full"
                        poster={project.images[0]}
                        preload="metadata"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </section>
      )}

      {/* Description */}
      {project.textContent && project.textContent !== project.description && (
        <section className="px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 max-w-[1400px] mx-auto border-t border-[#e5e5e5] pt-10">
          <ScrollReveal>
            <SectionLabel>About the Project</SectionLabel>
            <p className="text-sm leading-[1.7] text-[#0c0c0c] max-w-xl whitespace-pre-line">
              {project.textContent}
            </p>
          </ScrollReveal>
        </section>
      )}
    </div>
  )
}
