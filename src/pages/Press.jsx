import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono text-[#6b6b6b] tracking-[0.15em] mb-3">
      {'{ '}{children}{' }'}
    </p>
  )
}

const pressItems = [
  {
    title: "Where Words Evaporate: Jiaying Gao's Vapour Words Disappear",
    publication: "Our Culture",
    date: "9 June 2026",
    url: "https://ourculturemag.com/2026/06/09/where-words-evaporate-jiaying-gaos-vapour-words-disappear/",
  },
  {
    title: "Jiaying Gao: The Tales of Veils",
    publication: "Humboldt-Universität zu Berlin · Kulturtechnik",
    date: "",
    url: "https://www.kulturtechnik.hu-berlin.de/jiaying-gao-the-tales-of-veils/",
  },
  {
    title: "Music and dance that spans continents, cultures and 3,500 years",
    publication: "CGTN",
    date: "3 October 2022",
    url: "https://newseu.cgtn.com/news/2022-10-03/Music-and-dance-that-spans-continents-cultures-and-3-500-years--1dOfQbCFyDe/index.html",
  },
  {
    title: "El Museo del Baile Flamenco se reinventa en la Bienal: Rave Arcave",
    publication: "Museo del Baile Flamenco",
    date: "29 September 2022",
    url: "https://museodelbaileflamenco.com/index.php/2022/09/29/el-museo-del-baile-flamenco-se-reinventa-en-la-bienal-rave-arcave/",
  },
  {
    title: "CGTN Replay",
    publication: "CGTN",
    date: "",
    url: "https://www.cgtn.com/tv/replay?id=eFJbAA",
  },
  {
    title: "Talent Spotlight: Spring Creators 2022",
    publication: "TONG",
    date: "20 January 2023",
    url: "https://tong.global/news/talent-spotlight-spring-creators-2022/",
  },
  {
    title: "Talent Spotlight: Jiaying Gao",
    publication: "TONG",
    date: "",
    url: "https://tong.global/news/talent-spotlight-jiaying-gao/",
  },
  {
    title: "Pulse Performance",
    publication: "Hristo Yordanov",
    date: "",
    url: "https://hristo-yordanov.com/works/pulse-performance/?fbclid=PARlRTSASewLFleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae9vhgJRVIx_FPEPwFPjlp_zQJLljWUZorKSQ_D4jM64v7WO8J1N2KdK34uUg_aem_YWdncwDjI4saNYivqckhoLpbi0ul",
  },
  {
    title: "Group Exhibitions",
    publication: "Artnet Korea",
    date: "",
    url: "https://artnet.kr/p/group-exhibitions/822&page=5",
  },
]

export default function Press() {
  return (
    <div className="pt-14 sm:pt-16">
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-20 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel>Press</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
            Press
          </h1>
        </ScrollReveal>

        <div className="grid gap-0 border-t border-[#e5e5e5]">
          {pressItems.map((item, i) => (
            <ScrollReveal key={item.url} delay={0.15 + i * 0.05}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6 border-b border-[#e5e5e5] hover:bg-[#fafafa] transition-colors -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16"
              >
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#0c0c0c] group-hover:underline underline-offset-4 decoration-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#6b6b6b] mt-1">
                    {item.publication} · {item.date}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#0c0c0c] shrink-0" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
