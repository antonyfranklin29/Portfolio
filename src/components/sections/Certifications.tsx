'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, BadgeCheck, Calendar, ExternalLink, GraduationCap, CheckCircle } from 'lucide-react'

const certifications = [
  {
    id: 'pl-300',
    name: 'Microsoft Certified: Power BI Data Analyst Associate',
    code: 'PL-300',
    issuer: 'Microsoft',
    issued: '2023',
    expires: '2025',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/',
    accent: '#22d3ee',
    glow: 'rgba(34,211,238,0.15)',
    border: 'rgba(34,211,238,0.25)',
    description:
      'Validates expertise in designing and building scalable data models, cleaning and transforming data, and enabling advanced analytic capabilities with Power BI for business intelligence.',
    skills: ['Data Preparation', 'Data Modeling', 'DAX', 'Power BI Service', 'Analytics'],
    featured: true,
  },
]

const education = [
  {
    degree: "Master's in Computer Science",
    institution: 'Lewis University',
    location: 'United States',
    period: '2022 — Present',
    status: 'In Progress',
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.12)',
    border: 'rgba(129,140,248,0.2)',
    highlights: [
      'Focus: Software Engineering, Database Management',
      'Coursework: Statistical Programming, Large-Scale Data Storage',
      'Research: Encryption & Secure Systems Architecture',
      "GPA: Dean's List Standing",
    ],
  },
]

const achievements = [
  { val: '200+', desc: 'Stakeholders served through Power BI dashboards' },
  { val: '+40%', desc: 'YoY efficiency improvement identified for executive team' },
  { val: '80%',  desc: 'Reduction in manual data processing via ETL automation' },
  { val: '45%',  desc: 'Query performance improvement through data model optimization' },
]

export default function Certifications() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="certifications" ref={ref} className="relative z-10 section-gap">
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
            Credentials & Education
          </p>
          <h2 className="text-foreground mb-4">
            Certified <span className="gradient-text">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Certifications column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              Certifications
            </motion.h3>

            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top, ${cert.glow} 0%, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Microsoft badge */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-base tracking-tight"
                      style={{ background: cert.glow, border: `1px solid ${cert.border}`, color: cert.accent }}
                    >
                      MS
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span
                          className="text-xs font-black tracking-widest px-2.5 py-1 rounded-full"
                          style={{ color: cert.accent, background: cert.glow, border: `1px solid ${cert.border}` }}
                        >
                          {cert.code}
                        </span>
                        {cert.featured && (
                          <BadgeCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" aria-hidden />
                        )}
                      </div>
                      <h4 className="text-base font-bold text-white leading-snug">{cert.name}</h4>
                      <p className="text-xs text-white/45 mt-1">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-sm text-white/55 leading-relaxed mb-5">{cert.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-white/40">
                      <Calendar className="w-3.5 h-3.5" />
                      Issued {cert.issued} &middot; Expires {cert.expires}
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                      style={{ color: cert.accent }}
                    >
                      Verify
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ color: cert.accent, background: cert.glow, border: `1px solid ${cert.border}` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education + Achievements column */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </motion.h3>

            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${edu.accent}, transparent)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top, ${edu.glow} 0%, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1.5">{edu.degree}</h4>
                      <p className="text-base font-semibold" style={{ color: edu.accent }}>{edu.institution}</p>
                      <p className="text-sm text-white/40 mt-1">{edu.location} &middot; {edu.period}</p>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ color: '#34d399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: edu.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Achievements card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="glass-card p-7"
              style={{ borderColor: 'rgba(167,139,250,0.15)' }}
            >
              <h4 className="text-sm font-bold text-violet-400 mb-5 uppercase tracking-widest">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-5">
                {achievements.map(({ val, desc }) => (
                  <div key={val} className="space-y-1.5">
                    <span className="text-2xl font-black text-violet-400 tabular-nums">{val}</span>
                    <p className="text-sm text-white/50 leading-snug">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
