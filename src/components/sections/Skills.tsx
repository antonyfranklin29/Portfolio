'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, BarChart2, Cloud } from 'lucide-react'

interface Skill {
  name: string
  level: number
  color: string
  glow: string
}

interface SkillCategory {
  title: string
  Icon: React.ComponentType<{ className?: string }>
  accent: string
  borderAccent: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Power Platform',
    Icon: Zap,
    accent: 'rgba(34,211,238,0.5)',
    borderAccent: 'rgba(34,211,238,0.2)',
    skills: [
      { name: 'Power BI Development',    level: 97, color: '#22d3ee', glow: 'rgba(34,211,238,0.4)' },
      { name: 'DAX Measures & KPIs',     level: 95, color: '#22d3ee', glow: 'rgba(34,211,238,0.35)' },
      { name: 'Power Query (M)',          level: 92, color: '#67e8f9', glow: 'rgba(103,232,249,0.3)' },
      { name: 'Row-Level Security',       level: 90, color: '#22d3ee', glow: 'rgba(34,211,238,0.3)' },
      { name: 'Dashboard Architecture',  level: 94, color: '#22d3ee', glow: 'rgba(34,211,238,0.35)' },
    ],
  },
  {
    title: 'Data & Analytics',
    Icon: BarChart2,
    accent: 'rgba(129,140,248,0.5)',
    borderAccent: 'rgba(129,140,248,0.2)',
    skills: [
      { name: 'SQL (T-SQL / PL-SQL)',    level: 93, color: '#818cf8', glow: 'rgba(129,140,248,0.4)' },
      { name: 'Data Modeling',           level: 91, color: '#818cf8', glow: 'rgba(129,140,248,0.35)' },
      { name: 'ETL Design',              level: 88, color: '#a5b4fc', glow: 'rgba(165,180,252,0.3)' },
      { name: 'Python (pandas/numpy)',   level: 82, color: '#818cf8', glow: 'rgba(129,140,248,0.3)' },
      { name: 'Statistical Analysis',    level: 80, color: '#a5b4fc', glow: 'rgba(165,180,252,0.25)' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    Icon: Cloud,
    accent: 'rgba(167,139,250,0.5)',
    borderAccent: 'rgba(167,139,250,0.2)',
    skills: [
      { name: 'Azure Data Factory',      level: 88, color: '#a78bfa', glow: 'rgba(167,139,250,0.4)' },
      { name: 'Azure Synapse',           level: 82, color: '#c4b5fd', glow: 'rgba(196,181,253,0.35)' },
      { name: 'Azure SQL Database',      level: 87, color: '#a78bfa', glow: 'rgba(167,139,250,0.35)' },
      { name: 'Excel / Power Pivot',     level: 94, color: '#a78bfa', glow: 'rgba(167,139,250,0.4)' },
      { name: 'Business Intelligence',   level: 96, color: '#c4b5fd', glow: 'rgba(196,181,253,0.4)' },
    ],
  },
]

function SkillBar({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-base font-medium text-white/72 group-hover:text-white transition-colors duration-200">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.6 }}
          className="text-sm font-bold tabular-nums"
          style={{ color: skill.color }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.glow}`,
          }}
        >
          <span
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="skills" ref={ref} className="relative z-10 section-gap">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4">
            <span className="w-6 h-px bg-cyan-400" />
            Technical Skills
          </p>
          <h2 className="text-foreground mb-4">
            What I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto">
            Precision-crafted expertise across the full Power BI and Azure ecosystem.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: ci * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${cat.accent.replace('0.5)', '0.08)')} 0%, transparent 60%)`,
                }}
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cat.accent.replace('0.5)', '0.12)'), border: `1px solid ${cat.borderAccent}` }}
                  >
                    <cat.Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>
                <div className="space-y-6">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={0.15 + ci * 0.08 + si * 0.07}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            'Power BI', 'DAX', 'SQL', 'Azure', 'Python', 'Power Query',
            'ETL', 'Data Modeling', 'RLS', 'Excel', 'ADF', 'Synapse',
            'Business Intelligence', 'KPI', 'SSRS',
          ].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="glass text-sm font-semibold px-4 py-2 rounded-full text-white/60 hover:text-cyan-400 border border-white/08 hover:border-cyan-400/30 transition-all duration-200 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
