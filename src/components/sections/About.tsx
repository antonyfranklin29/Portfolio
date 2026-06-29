'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Mail, Calendar } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/components/icons/SocialIcons'

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: "Master's in Computer Science",
    sub: 'Lewis University',
    color: 'text-cyan-400',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.15)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'United States',
    sub: 'Open to relocation',
    color: 'text-indigo-400',
    bg: 'rgba(129,140,248,0.08)',
    border: 'rgba(129,140,248,0.15)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'antonyfranklin029',
    sub: '@gmail.com',
    color: 'text-violet-400',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.15)',
  },
  {
    icon: Calendar,
    label: 'Availability',
    value: 'Immediately Available',
    sub: 'Full-time / Contract',
    color: 'text-emerald-400',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.15)',
  },
]

const links = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/franklinantony29',
    color: '#0a66c2',
    glow: 'rgba(10,102,194,0.3)',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/antonyfranklin29',
    color: '#e8eaf6',
    glow: 'rgba(255,255,255,0.1)',
  },
]

const paragraphs = [
  `I'm a Power BI Developer and Data Analyst with full-stack data fluency — from writing complex DAX measures and architecting Power BI semantic models, to building Azure Data Factory pipelines and implementing Row-Level Security for enterprise-scale deployments.`,
  `My work bridges raw data and business decisions. I've designed dashboards that surface insights for 200+ stakeholders across multiple business units, and built KPI tracking systems that uncovered a +40% year-over-year efficiency gain for executive leadership.`,
  `Currently completing my Master's in Computer Science at Lewis University, I bring both theoretical depth and practical hands-on experience in building secure, scalable, and trustworthy data solutions.`,
]

function fadeUp(delay = 0) {
  return {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  }
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="about" ref={ref} className="relative z-10 section-gap">
      <div className="container-xl">
        {/* Section header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4">
            <span className="w-6 h-px bg-cyan-400" />
            About Me
          </p>
          <h2 className="text-foreground mb-4">
            The Engineer Behind{' '}
            <span className="gradient-text">the Data</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto">
            I don't just build dashboards. I architect trust in data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Left — Bio */}
          <div>
            <div className="space-y-7 mb-12">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp(0.1 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="text-white/65 text-[1.0625rem] leading-[1.85]"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex items-center gap-4"
            >
              {links.map(({ icon: Icon, label, href, glow }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white transition-all duration-300 border border-white/08"
                  style={{ '--glow': glow } as React.CSSProperties}
                >
                  <Icon className="w-4 h-4" aria-hidden />
                  {label}
                </motion.a>
              ))}

              <motion.a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" aria-hidden />
                Book a Call
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {highlights.map(({ icon: Icon, label, value, sub, color, bg, border }, i) => (
              <motion.div
                key={label}
                variants={fadeUp(0.2 + i * 0.08)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-5 flex items-start gap-5 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <Icon className={`w-6 h-6 ${color}`} aria-hidden />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-semibold mb-1 uppercase tracking-wider">{label}</p>
                  <p className="text-base font-semibold text-white leading-snug">{value}</p>
                  <p className="text-sm text-white/45 mt-1">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

