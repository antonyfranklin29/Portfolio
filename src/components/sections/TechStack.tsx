'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart3, BarChart2, PieChart, FileText, Filter,
  Database, Cloud, Terminal, Server,
  GitBranch, Cpu, Activity,
  Code, Layers, TrendingUp, Zap,
} from 'lucide-react'

type IconComp = React.ComponentType<{ className?: string; style?: React.CSSProperties }>

interface TechItem {
  name: string
  Icon: IconComp
  color: string
}

interface TechCategory {
  title: string
  TitleIcon: IconComp
  accent: string
  glow: string
  border: string
  items: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    title: 'Business Intelligence',
    TitleIcon: BarChart3,
    accent: '#22d3ee',
    glow: 'rgba(34,211,238,0.1)',
    border: 'rgba(34,211,238,0.18)',
    items: [
      { name: 'Power BI',    Icon: BarChart3,  color: '#f2c811' },
      { name: 'DAX',         Icon: Code,       color: '#22d3ee' },
      { name: 'Power Query', Icon: Filter,     color: '#22d3ee' },
      { name: 'SSRS',        Icon: FileText,   color: '#a78bfa' },
      { name: 'Tableau',     Icon: PieChart,   color: '#e57373' },
    ],
  },
  {
    title: 'Databases & SQL',
    TitleIcon: Database,
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.1)',
    border: 'rgba(129,140,248,0.18)',
    items: [
      { name: 'SQL Server',  Icon: Database, color: '#818cf8' },
      { name: 'Azure SQL',   Icon: Cloud,    color: '#60a5fa' },
      { name: 'PostgreSQL',  Icon: Server,   color: '#4f86c6' },
      { name: 'T-SQL',       Icon: Terminal, color: '#818cf8' },
    ],
  },
  {
    title: 'Cloud & Azure',
    TitleIcon: Cloud,
    accent: '#60a5fa',
    glow: 'rgba(96,165,250,0.1)',
    border: 'rgba(96,165,250,0.18)',
    items: [
      { name: 'Azure ADF',     Icon: GitBranch,  color: '#60a5fa' },
      { name: 'Azure Synapse', Icon: Cpu,        color: '#60a5fa' },
      { name: 'Azure DevOps',  Icon: Activity,   color: '#60a5fa' },
    ],
  },
  {
    title: 'Programming & Tools',
    TitleIcon: Code,
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.1)',
    border: 'rgba(167,139,250,0.18)',
    items: [
      { name: 'Python',  Icon: Code,     color: '#ffd43b' },
      { name: 'pandas',  Icon: Layers,   color: '#e97627' },
      { name: 'Excel',   Icon: BarChart2,color: '#1d6f42' },
      { name: 'Git',     Icon: GitBranch,color: '#f05033' },
    ],
  },
]

const allItems = techCategories.flatMap((c) => c.items)

export default function TechStack() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="tech" ref={ref} className="relative z-10 section-gap">
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
            Tech Stack
          </p>
          <h2 className="text-foreground mb-4">
            Tools I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            A curated toolkit built around enterprise data engineering and business intelligence.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="glass-card p-6 relative overflow-hidden group"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top, ${cat.glow} 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cat.glow, border: `1px solid ${cat.border}` }}
                  >
                    <cat.TitleIcon className="w-4.5 h-4.5" style={{ color: cat.accent }} />
                  </div>
                  <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest leading-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Tech chips */}
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + ci * 0.1 + ii * 0.06, duration: 0.5 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-200 cursor-default group/item"
                    >
                      <item.Icon
                        className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ color: item.color }}
                      />
                      <span className="text-[15px] font-medium text-white/65 group-hover/item:text-white/90 transition-colors duration-200">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 overflow-hidden"
          aria-hidden="true"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div
            className="flex gap-4 w-max"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {[...allItems, ...allItems].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 glass px-4 py-2.5 rounded-full border border-white/[0.06] flex-shrink-0"
              >
                <item.Icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                <span className="text-[13px] font-medium text-white/30 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
