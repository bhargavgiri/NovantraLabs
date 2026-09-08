'use client'

import dynamic from 'next/dynamic'

const HeroSceneInner = dynamic(() => import('./HeroSceneInner'), {
  ssr: false,
  loading: () => null,
})

export default function HeroScene() {
  return <HeroSceneInner />
}
