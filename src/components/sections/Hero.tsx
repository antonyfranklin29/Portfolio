'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ArrowDown, Download, Sparkles } from 'lucide-react'

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
  loading: () => null,
})

const ROLES = [
  'Power BI Developer',
  'Business Intelligence Engineer',
  'Data Analytics Specialist',
  'Azure Data Engineer',
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]

    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true) }, 2000)
      return () => clearTimeout(t)
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
        return () => clearTimeout(t)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % ROLES.length)
      }
    }
  }, [displayed, deleting, paused, roleIndex])

  return (
    <span className="text-cyan-400">
      {displayed}
      <span className="animate-[blink_1s_step-end_infinite] ml-0.5 inline-block w-0.5 h-[0.85em] bg-cyan-400 align-middle" />
    </span>
  )
}

const statItems = [
  { value: '200+', label: 'Stakeholders Served' },
  { value: '40%',  label: 'YoY Efficiency Gain' },
  { value: '5+',   label: 'Years Experience' },
  { value: 'PL-300', label: 'Microsoft Certified' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y     = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
    >
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Radial hero glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(14,116,144,0.12) 0%, rgba(76,29,149,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-xl section-gap flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-cyan-400/20"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" aria-hidden />
          <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">
            Available for new roles
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.02] mb-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          <span className="text-white">Franklin</span>
          <br />
          <span className="gradient-text">Antony</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 min-h-[2em] flex items-center"
          style={{ letterSpacing: '-0.01em' }}
        >
          <TypewriterText />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-base sm:text-lg text-white/50 max-w-xl leading-relaxed mb-10"
        >
          Turning enterprise data into decisions leadership can act on.
          <br className="hidden sm:block" />
          Full-stack data fluency across Azure, DAX, and Power BI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
              boxShadow: '0 0 30px rgba(34,211,238,0.3), 0 8px 24px rgba(0,0,0,0.3)',
            }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.span
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>

          <motion.a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/resume.pdf`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white/80 glass border border-white/10 hover:border-cyan-400/30 hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4" aria-hidden />
            Resume
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl"
        >
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className="glass rounded-2xl p-4 border border-white/06 text-center"
            >
              <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-white/45 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  )
}

