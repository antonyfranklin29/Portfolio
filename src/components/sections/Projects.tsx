'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, BarChart3, TrendingUp, Database, Activity } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'

const projects = [
  {
    id: 1,
    title: 'Enterprise Sales & Operations Dashboard',
    description:
      'A production Power BI solution delivering real-time sales and operations visibility to 200+ stakeholders across 5 business units, with Row-Level Security ensuring each user sees only their data.',
    longDescription:
      'Built on Azure SQL Database with a star-schema model optimized for sub-second DAX query performance. Implemented dynamic RLS using Azure AD groups, enabling granular data access without report duplication. Features include drill-through analytics, custom tooltips, and mobile-optimized layouts.',
    icon: BarChart3,
    accent: '#22d3ee',
    glow: 'rgba(34,211,238,0.12)',
    border: 'rgba(34,211,238,0.2)',
    gradient: 'from-cyan-950/60 to-background/60',
    stats: [
      { label: 'Stakeholders', value: '200+' },
      { label: 'Data Models',  value: '15+' },
      { label: 'DAX Measures', value: '50+' },
      { label: 'Query Time',   value: '<1s' },
    ],
    tags: ['Power BI', 'DAX', 'Azure SQL', 'RLS', 'Power Query', 'Azure AD'],
    github: 'https://github.com/antonyfranklin29',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Executive KPI Trend Dashboard',
    description:
      'End-to-end KPI tracking system that uncovered a +40% YoY operational efficiency gain for executive leadership by connecting fragmented data sources into a unified insight layer.',
    longDescription:
      'Aggregated data from 10+ disparate sources via Power Query transformations. Built trend-analysis DAX patterns (SAMEPERIODLASTYEAR, CALCULATE, TOTALYTD) for time-intelligence comparisons. Features executive scorecard, waterfall charts, and automated email subscriptions.',
    icon: TrendingUp,
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.12)',
    border: 'rgba(129,140,248,0.2)',
    gradient: 'from-indigo-950/60 to-background/60',
    stats: [
      { label: 'YoY Efficiency', value: '+40%' },
      { label: 'Data Sources',   value: '10+' },
      { label: 'Report Pages',   value: '12' },
      { label: 'Refresh Cycle',  value: 'Daily' },
    ],
    tags: ['Power BI', 'DAX', 'Time Intelligence', 'Power Query', 'Excel', 'Python'],
    github: 'https://github.com/antonyfranklin29',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Azure Data Pipeline Monitor',
    description:
      'Operational dashboard monitoring Azure Data Factory pipeline health, run durations, failure rates, and data freshness SLAs across a multi-tenant enterprise environment.',
    longDescription:
      'Integrated ADF REST APIs with Power BI via custom connectors. Built alerting logic using DAX conditional formatting and Power Automate flows for pipeline failure notifications. Tracks 30+ daily pipeline runs with automated retry analytics.',
    icon: Database,
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.2)',
    gradient: 'from-violet-950/60 to-background/60',
    stats: [
      { label: 'Pipelines',  value: '30+' },
      { label: 'SLA Target', value: '99.5%' },
      { label: 'Alerts',     value: 'Real-time' },
      { label: 'Latency',    value: '<5min' },
    ],
    tags: ['Azure ADF', 'Power BI', 'REST API', 'Power Automate', 'DAX', 'Synapse'],
    github: 'https://github.com/antonyfranklin29',
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Financial Analytics ETL Pipeline',
    description:
      'Python-based ETL pipeline that processes financial transaction data, applies business rules, and feeds a normalized SQL data warehouse for downstream Power BI reporting.',
    longDescription:
      'Built with pandas and SQLAlchemy for robust data transformation. Includes data quality validation, duplicate detection, and schema drift handling. Automated via Windows Task Scheduler and Azure DevOps pipelines. Reduced reporting data latency from T+2 to T+0.',
    icon: Activity,
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.12)',
    border: 'rgba(56,189,248,0.2)',
    gradient: 'from-sky-950/60 to-background/60',
    stats: [
      { label: 'Records/day',  value: '500K+' },
      { label: 'Latency',      value: 'T+0' },
      { label: 'Accuracy',     value: '99.9%' },
      { label: 'Pipelines',    value: '8' },
    ],
    tags: ['Python', 'pandas', 'SQL Server', 'ETL', 'Azure DevOps', 'SQLAlchemy'],
    github: 'https://github.com/antonyfranklin29',
    demo: null,
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.01 }}
      className="glass-card relative overflow-hidden group cursor-default h-full flex flex-col"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      {/* Background glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse at top, ${project.glow} 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: project.glow,
              border: `1px solid ${project.border}`,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: project.accent }} aria-hidden />
          </div>

          {project.featured && (
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{
                color: project.accent,
                background: project.glow,
                border: `1px solid ${project.border}`,
              }}
            >
              FEATURED
            </span>
          )}
        </div>

        {/* Title + description */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug">{project.title}</h3>
        <p className="text-sm text-white/55 leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {project.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm font-bold" style={{ color: project.accent }}>{stat.value}</div>
              <div className="text-[10px] text-white/35 leading-tight mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                color: project.accent,
                background: project.glow,
                border: `1px solid ${project.border}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors duration-200"
          >
            <GithubIcon className="w-3.5 h-3.5" aria-hidden />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
              style={{ color: project.accent }}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="projects" ref={ref} className="relative z-10 section-gap">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4">
            <span className="w-6 h-px bg-cyan-400" />
            Projects
          </p>
          <h2 className="text-foreground mb-4">
            Data That <span className="gradient-text">Drives Decisions</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto">
            Enterprise-grade analytics solutions with measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/antonyfranklin29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <GithubIcon className="w-4 h-4" aria-hidden />
            View all projects on GitHub
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

