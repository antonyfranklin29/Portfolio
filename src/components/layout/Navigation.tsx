'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Work',     href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
      >
        <nav
          className={cn(
            'flex items-center justify-between gap-2 px-4 py-2.5 rounded-full transition-all duration-500',
            scrolled
              ? 'glass border border-white/10 shadow-xl shadow-black/30 w-full max-w-2xl'
              : 'bg-transparent w-full max-w-2xl'
          )}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-200">
              FA
            </div>
            <span className="text-sm font-semibold text-foreground/80 hidden sm:block group-hover:text-cyan-400 transition-colors duration-200">
              Franklin Antony
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(href)}
                  className={cn(
                    'relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    activeSection === href.slice(1)
                      ? 'text-cyan-400'
                      : 'text-white/60 hover:text-white/90'
                  )}
                >
                  {activeSection === href.slice(1) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/[0.06] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:antonyfranklin029@gmail.com"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
            >
              Hire Me
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/05 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={cn('block w-5 h-0.5 bg-white/70 transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('block w-5 h-0.5 bg-white/70 transition-all duration-300', menuOpen && 'opacity-0')} />
              <span className={cn('block w-5 h-0.5 bg-white/70 transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/40 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => scrollTo(href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-cyan-400 hover:bg-white/05 transition-all duration-200"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <a
                  href="mailto:antonyfranklin029@gmail.com"
                  className="w-full text-center flex justify-center mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

