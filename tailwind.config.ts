import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#020208',
        'bg-base': '#050512',
        'bg-elevated': '#0a0a1e',
        primary: '#22d3ee',
        'primary-light': '#67e8f9',
        secondary: '#818cf8',
        'secondary-light': '#a5b4fc',
        accent: '#a78bfa',
        'accent-light': '#c4b5fd',
        'text-base': '#e8eaf6',
        'text-muted': '#8892b0',
        'text-subtle': '#4a5568',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Consolas', 'monospace'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'aurora-slow': 'aurora 20s ease-in-out infinite',
        'aurora-medium': 'aurora 14s ease-in-out infinite reverse',
        'aurora-fast': 'aurora 10s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)', opacity: '0.35' },
          '25%': { transform: 'translate(8%, 8%) scale(1.1)', opacity: '0.55' },
          '50%': { transform: 'translate(-6%, 12%) scale(0.9)', opacity: '0.45' },
          '75%': { transform: 'translate(12%, -6%) scale(1.08)', opacity: '0.65' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,211,238,0.2), 0 0 40px rgba(34,211,238,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(34,211,238,0.5), 0 0 80px rgba(34,211,238,0.25)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(34,211,238,0.3)' },
          '50%': { borderColor: 'rgba(34,211,238,0.8)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'aurora-gradient': 'radial-gradient(ellipse at top, #0d1b3e 0%, #020208 60%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(34,211,238,0.25), 0 0 60px rgba(34,211,238,0.1)',
        'glow-violet': '0 0 30px rgba(167,139,250,0.25), 0 0 60px rgba(167,139,250,0.1)',
        'glow-indigo': '0 0 30px rgba(129,140,248,0.25)',
        glass: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(34,211,238,0.15)',
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.08)',
        'glass-hover': 'rgba(255,255,255,0.16)',
        'glass-cyan': 'rgba(34,211,238,0.3)',
        'glass-violet': 'rgba(167,139,250,0.3)',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}

export default config
