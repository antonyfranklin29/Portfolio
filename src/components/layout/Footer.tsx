'use client'

import { motion } from 'framer-motion'
import { Mail, Heart, ArrowUp } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/components/icons/SocialIcons'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Work',     href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

const socials = [
  { icon: Mail,         href: 'mailto:antonyfranklin029@gmail.com', label: 'Email' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/franklinantony29', label: 'LinkedIn' },
  { icon: GithubIcon,   href: 'https://github.com/antonyfranklin29', label: 'GitHub' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative z-10 border-t border-white/[0.06] pt-16 pb-8">
      {/* Top border glow */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)' }}
      />

      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-sm font-bold text-white">
                FA
              </div>
              <div>
                <p className="text-sm font-bold text-white">Franklin Antony</p>
                <p className="text-xs text-white/40">Power BI Developer & Data Analyst</p>
              </div>
            </div>
            <p className="text-xs text-white/35 leading-relaxed">
              Turning enterprise data into decisions leadership can act on.
              Microsoft PL-300 Certified.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-white/45 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Connect</p>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-sm text-white/45 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" aria-hidden />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-xs text-white/25 flex items-center gap-1.5">
            Built with
            <Heart className="w-3 h-3 text-red-400/60" aria-hidden />
            Next.js, Framer Motion & Three.js · © {new Date().getFullYear()} Franklin Antony
          </p>

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white/40 hover:text-cyan-400 border border-white/08 hover:border-cyan-400/20 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
