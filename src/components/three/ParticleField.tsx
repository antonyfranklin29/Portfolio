'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars({ count = 2500 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const cyanColor = new THREE.Color('#22d3ee')
    const whiteColor = new THREE.Color('#e8eaf6')
    const violetColor = new THREE.Color('#a78bfa')
    const indigoColor = new THREE.Color('#818cf8')

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 8 + Math.random() * 22

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Color distribution
      const rand = Math.random()
      let col: THREE.Color
      if      (rand < 0.30) col = cyanColor
      else if (rand < 0.55) col = whiteColor
      else if (rand < 0.75) col = violetColor
      else                   col = indigoColor

      colors[i * 3]     = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b

      sizes[i] = 0.06 + Math.random() * 0.12
    }

    return [positions, colors, sizes]
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.018
    pointsRef.current.rotation.x += delta * 0.006
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        size={0.1}
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.5], fov: 85 }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  )
}
