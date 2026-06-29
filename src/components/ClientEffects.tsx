'use client'

import dynamic from 'next/dynamic'

const SmoothScrollProvider = dynamic(
  () => import('@/components/providers/SmoothScrollProvider'),
  { ssr: false }
)

const MouseFollower = dynamic(
  () => import('@/components/ui/MouseFollower'),
  { ssr: false }
)

export default function ClientEffects({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <MouseFollower />
      {children}
    </SmoothScrollProvider>
  )
}
