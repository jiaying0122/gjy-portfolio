import { artist } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] py-10 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-[#6b6b6b] tracking-wider uppercase">
          © {new Date().getFullYear()} {artist.name}
        </p>
        <a
          href={`mailto:${artist.email}`}
          className="text-[11px] font-mono text-[#6b6b6b] hover:text-[#0c0c0c] transition-colors tracking-wider"
        >
          {artist.email}
        </a>
      </div>
    </footer>
  )
}
