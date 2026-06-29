'use client'

import { cn } from '@/lib/utils'

export default function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('fixed inset-0 pointer-events-none z-0 overflow-hidden', className)}
    >
      {/* Blob 1 — deep blue */}
      <div
        className="absolute"
        style={{
          width: '55vw',
          height: '55vw',
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,58,138,0.55) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '-15%',
          left: '-10%',
          animation: 'aurora 22s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Blob 2 — violet */}
      <div
        className="absolute"
        style={{
          width: '50vw',
          height: '50vw',
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,29,149,0.45) 0%, transparent 70%)',
          filter: 'blur(90px)',
          top: '20%',
          right: '-15%',
          animation: 'aurora 17s ease-in-out infinite reverse',
          willChange: 'transform',
        }}
      />

      {/* Blob 3 — cyan teal */}
      <div
        className="absolute"
        style={{
          width: '45vw',
          height: '45vw',
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,116,144,0.38) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '10%',
          left: '20%',
          animation: 'aurora 28s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Blob 4 — indigo */}
      <div
        className="absolute"
        style={{
          width: '40vw',
          height: '40vw',
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(55,48,163,0.32) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '-10%',
          right: '10%',
          animation: 'aurora 20s ease-in-out 4s infinite reverse',
          willChange: 'transform',
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
