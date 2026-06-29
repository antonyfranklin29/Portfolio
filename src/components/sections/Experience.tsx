'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, TrendingUp, Activity, Zap, CheckCircle } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

type IconComp = React.ComponentType<{
  className?: string
  style?: React.CSSProperties
  'aria-hidden'?: boolean
}>

interface Exp {
  index: string
  role: string
  company: string
  location: string
  period: string
  duration: string
  accent: string
  glow: string
  border: string
  responsibilities: string[]
  tags: string[]
  RightIcon: IconComp
}

const experiences: Exp[] = [
  {
    index: '01',
    role: 'Power BI Developer',
    company: 'Peak Stream Technologies',
    location: 'Littleton, MA',
    period: 'February 2025 – Present',
    duration: '1 yr 5 mo',
    accent: '#22d3ee',
    glow: 'rgba(34,211,238,0.1)',
    border: 'rgba(34,211,238,0.22)',
    responsibilities: [
      'Designed, developed, and maintained enterprise-scale Power BI dashboards and reports supporting global sales and operations, processing datasets exceeding 5 million rows with optimized refresh schedules.',
      'Engineered advanced DAX measures, including Time Intelligence (YTD, MTD, YoY) and calculated columns to monitor real-time KPIs, improving executive reporting efficiency by 40%.',
      'Extracted, transformed, and modeled data using SQL and Power BI, delivering high-quality semantic models while reducing manual reporting effort by 30%.',
      'Implemented Row-Level Security (RLS) and Dynamic Security to provide secure, role-based access for 200+ global stakeholders.',
    ],
    tags: ['Power BI', 'DAX', 'SQL', 'Data Modeling', 'Row-Level Security', 'Power Query'],
    RightIcon: TrendingUp,
  },
  {
    index: '02',
    role: 'BI & Power Platform Consultant',
    company: 'Lumina Tech Solutions',
    location: 'Chicago, IL',
    period: 'February 2024 – January 2025',
    duration: '1 yr',
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.1)',
    border: 'rgba(129,140,248,0.22)',
    responsibilities: [
      'Partnered with business stakeholders to translate reporting requirements into scalable data models, wireframes, and interactive Power BI solutions within an Agile environment.',
      'Leveraged Python for data wrangling and automation while developing Power Automate Desktop (RPA) workflows that extracted legacy web-portal data into automated Power BI market-share reports.',
      'Integrated Azure Synapse Analytics and Azure Data Factory to consolidate disparate data sources into a centralized SQL warehouse optimized for enterprise reporting.',
      'Developed a Canvas Power App integrated with Power Automate for expense tracking and approval workflows, reducing manual processing time by 50%.',
    ],
    tags: ['Power BI', 'Python', 'Azure Synapse', 'Azure Data Factory', 'Power Apps', 'Power Automate', 'SQL'],
    RightIcon: Zap,
  },
  {
    index: '03',
    role: 'Data Analyst',
    company: 'Global Tech Solutions',
    location: 'Hyderabad, India',
    period: 'January 2021 – December 2023',
    duration: '3 yrs',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.1)',
    border: 'rgba(167,139,250,0.22)',
    responsibilities: [
      'Delivered end-to-end Business Intelligence solutions — from requirements gathering through deployment — transforming user stories into scalable dashboards and semantic data models within Agile/Scrum teams.',
      'Designed Star Schema data models and managed SQL-based ETL transformations and Power BI Dataflows, ensuring 100% data integrity before production deployment.',
      'Built interactive Power BI dashboards featuring advanced slicers, drill-through navigation, and DAX-driven KPIs while actively participating in sprint planning, stand-ups, UAT, defect resolution, and release cycles.',
    ],
    tags: ['Power BI', 'SQL', 'DAX', 'Star Schema', 'ETL', 'Data Modeling', 'Agile/Scrum', 'Power BI Dataflows'],
    RightIcon: Activity,
  },
]

const TOTAL = experiences.length

function ExperienceCard({
  exp,
  index,
  inView,
}: {
  exp: Exp
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.12 + index * 0.2, ease: EASE }}
    >
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="glass-card relative overflow-hidden group cursor-default"
        style={{ borderColor: exp.border, borderRadius: '24px' }}
      >
        {/* Top accent bar */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${exp.accent}70 15%, ${exp.accent} 50%, ${exp.accent}70 85%, transparent 100%)`,
          }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 65% 55% at 10% 0%, ${exp.glow} 0%, transparent 70%)`,
          }}
        />

        {/* Card body */}
        <div className="relative z-10" style={{ padding: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
          {/* Three-column grid: [index | content | icon badge] */}
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] xl:grid-cols-[120px_1fr_185px] gap-8 xl:gap-10">

            {/* LEFT: Watermark index number (desktop) */}
            <div className="hidden lg:flex flex-col items-center gap-3 pt-1 select-none">
              <div className="text-center">
                <p
                  className="font-black leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 4.5vw, 5rem)', color: exp.accent, opacity: 0.12 }}
                >
                  {exp.index}
                </p>
                <p className="text-xs font-bold text-white/20 tracking-widest mt-1.5">
                  / 0{TOTAL}
                </p>
              </div>
              {/* Glowing dot */}
              <div
                className="w-3 h-3 rounded-full flex-shrink-0 mt-2"
                style={{
                  background: exp.accent,
                  boxShadow: `0 0 0 3px #020208, 0 0 0 5px ${exp.border}, 0 0 20px ${exp.glow}`,
                }}
              />
              {/* Connector line to next card */}
              {index < TOTAL - 1 && (
                <div
                  className="w-px flex-1 min-h-[48px]"
                  style={{ background: `linear-gradient(180deg, ${exp.accent}50, transparent)` }}
                />
              )}
            </div>

            {/* CENTER: Main content */}
            <div className="min-w-0">
              {/* Mobile: index badge */}
              <div className="lg:hidden flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-black tracking-widest uppercase"
                  style={{ color: exp.accent }}
                >
                  {exp.index} / 0{TOTAL}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: `linear-gradient(90deg, ${exp.border}, transparent)` }}
                />
              </div>

              {/* Meta: location + period + duration */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6">
                <span
                  className="flex items-center gap-1.5 font-medium text-white/50"
                  style={{ fontSize: '18px' }}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden />
                  {exp.location}
                </span>
                <span className="hidden sm:block text-white/15 text-sm">|</span>
                <span
                  className="flex items-center gap-1.5 font-medium text-white/50"
                  style={{ fontSize: '18px' }}
                >
                  <Calendar className="w-4 h-4 flex-shrink-0" aria-hidden />
                  {exp.period}
                </span>
                <span className="text-white/30" style={{ fontSize: '15px' }}>
                  &middot; {exp.duration}
                </span>
              </div>

              {/* Job title — 48px max */}
              <h3
                className="font-bold text-white leading-[1.05] tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)', letterSpacing: '-0.025em' }}
              >
                {exp.role}
              </h3>

              {/* Company — 28px max */}
              <p
                className="font-semibold mb-8"
                style={{ fontSize: 'clamp(1.1rem, 1.75vw, 1.75rem)', color: exp.accent }}
              >
                {exp.company}
              </p>

              {/* Divider */}
              <div
                className="h-px mb-8"
                style={{
                  background: `linear-gradient(90deg, ${exp.accent}45, ${exp.accent}15 55%, transparent)`,
                }}
              />

              {/* Responsibilities — 22px / line-height 1.9 */}
              <ul className="space-y-5 mb-9">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-4 group/item">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110"
                      style={{ color: exp.accent }}
                      aria-hidden
                    />
                    <p
                      className="text-white/65 group-hover/item:text-white/85 transition-colors duration-200"
                      style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.375rem)', lineHeight: '1.9' }}
                    >
                      {r}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Tech tags — 16-18px */}
              <div className="flex flex-wrap gap-2.5">
                {exp.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="px-4 py-2 rounded-full font-semibold cursor-default"
                    style={{
                      fontSize: 'clamp(14px, 1.1vw, 17px)',
                      color: exp.accent,
                      background: exp.glow,
                      border: `1px solid ${exp.border}`,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* RIGHT: Animated icon + duration badge (xl+) */}
            <div className="hidden xl:flex flex-col items-center gap-6 pt-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="w-20 h-20 rounded-3xl flex items-center justify-center"
                style={{ background: exp.glow, border: `1px solid ${exp.border}` }}
              >
                <exp.RightIcon className="w-10 h-10" style={{ color: exp.accent }} aria-hidden />
              </motion.div>

              <div
                className="w-full text-center px-4 py-5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p
                  className="font-black tabular-nums leading-none"
                  style={{ fontSize: '22px', color: exp.accent }}
                >
                  {exp.duration}
                </p>
                <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mt-2">
                  Duration
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section id="experience" ref={ref} className="relative z-10 section-gap">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(34,211,238,0.022) 0%, transparent 65%)',
        }}
      />

      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-10 lg:px-14 2xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-4">
            <span className="w-6 h-px bg-cyan-400" />
            Experience
          </p>
          <h2 className="text-foreground mb-4">
            Where I've <span className="gradient-text">Made an Impact</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto mt-3">
            3+ years engineering enterprise-grade business intelligence and data analytics solutions.
          </p>
        </motion.div>

        {/* Cards — progressive spacing */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
