'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Calendar, Send, MapPin, CheckCircle } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/components/icons/SocialIcons'

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'antonyfranklin029@gmail.com',
    href: 'mailto:antonyfranklin029@gmail.com',
    accent: '#22d3ee',
    glow: 'rgba(34,211,238,0.15)',
    border: 'rgba(34,211,238,0.2)',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'franklinantony29',
    href: 'https://linkedin.com/in/franklinantony29',
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.15)',
    border: 'rgba(129,140,248,0.2)',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'antonyfranklin29',
    href: 'https://github.com/antonyfranklin29',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.2)',
  },
  {
    icon: Calendar,
    label: 'Schedule',
    value: 'Book a 30-min call',
    href: 'https://calendly.com',
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.2)',
  },
]

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('success')
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const inputClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all duration-200'

  return (
    <section id="contact" ref={ref} className="relative z-10 section-gap">
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
            Get In Touch
          </p>
          <h2 className="text-foreground mb-4">
            Let's Build Something <span className="gradient-text">Remarkable</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            Have a data challenge that needs solving? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
          {/* Left — Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="glass-card p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-white">United States</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Open to full-time roles, contract projects, and consulting engagements globally.
                <br /><br />
                Specializing in Power BI, Azure, and business intelligence solutions for mid-to-large enterprises.
              </p>
            </motion.div>

            {socialLinks.map(({ icon: Icon, label, value, href, accent, glow, border }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                whileHover={{ x: 4, scale: 1.02 }}
                className="glass-card flex items-center gap-4 p-4 group cursor-pointer"
                style={{ borderColor: `${border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: glow, border: `1px solid ${border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/35 font-medium uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200 truncate">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="glass-card p-8 relative overflow-hidden"
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }}
            />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-white/50">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" className="bg-gray-900">Select a topic...</option>
                      <option value="hire" className="bg-gray-900">Job Opportunity</option>
                      <option value="project" className="bg-gray-900">Project / Contract</option>
                      <option value="consulting" className="bg-gray-900">BI Consulting</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 disabled:opacity-70"
                    style={{
                      background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
                      boxShadow: '0 0 30px rgba(34,211,238,0.25)',
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

