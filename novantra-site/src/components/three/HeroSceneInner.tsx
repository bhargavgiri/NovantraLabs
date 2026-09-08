'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroSceneInner() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.z = 4

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'low-power',
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // --- Nodes ---
    const nodeCount = 120
    const nodePositions = new Float32Array(nodeCount * 3)
    const nodeColors = new Float32Array(nodeCount * 3)

    for (let i = 0; i < nodeCount; i++) {
      // Random positions in sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 * Math.cbrt(Math.random())
      nodePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      nodePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      nodePositions[i * 3 + 2] = r * Math.cos(phi)

      // Cyan color with variation
      nodeColors[i * 3] = 0.02 + Math.random() * 0.1
      nodeColors[i * 3 + 1] = 0.7 + Math.random() * 0.3
      nodeColors[i * 3 + 2] = 0.8 + Math.random() * 0.2
    }

    const nodeGeo = new THREE.BufferGeometry()
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3))
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3))

    const nodeMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    })

    const nodes = new THREE.Points(nodeGeo, nodeMat)
    scene.add(nodes)

    // --- Lines ---
    const linePositions: number[] = []
    const maxLines = 300
    let lineCount = 0

    for (let i = 0; i < nodeCount && lineCount < maxLines; i++) {
      for (let j = i + 1; j < nodeCount && lineCount < maxLines; j++) {
        const ax = nodePositions[i * 3], ay = nodePositions[i * 3 + 1], az = nodePositions[i * 3 + 2]
        const bx = nodePositions[j * 3], by = nodePositions[j * 3 + 1], bz = nodePositions[j * 3 + 2]
        const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2)
        if (dist < 0.9) {
          linePositions.push(ax, ay, az, bx, by, bz)
          lineCount++
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3))

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.3,
    })

    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // --- Wireframe sphere ---
    const sphereGeo = new THREE.IcosahedronGeometry(2.5, 3)
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    scene.add(sphere)

    // Group everything
    const group = new THREE.Group()
    group.add(nodes, lines, sphere)
    scene.add(group)

    // Mouse interaction
    const mouse = { x: 0, y: 0 }
    const targetCam = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    })
    resizeObserver.observe(container)

    // Animation
    let frameId: number
    let time = 0
    const animate = () => {
      if (document.hidden) {
        frameId = requestAnimationFrame(animate)
        return
      }

      time += 0.016

      // Rotate
      group.rotation.y += 0.0015
      group.rotation.x = Math.sin(time * 0.2) * 0.05

      // Float
      group.position.y = Math.sin(time * 0.5) * 0.1

      // Camera subtle movement (lerp toward mouse)
      targetCam.x += (mouse.x * 0.3 - targetCam.x) * 0.05
      targetCam.y += (-mouse.y * 0.2 - targetCam.y) * 0.05
      camera.position.x = targetCam.x
      camera.position.y = targetCam.y

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    const handleVisibility = () => {
      if (!document.hidden) {
        frameId = requestAnimationFrame(animate)
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('visibilitychange', handleVisibility)
      resizeObserver.disconnect()

      // Dispose
      nodeGeo.dispose()
      nodeMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      sphereGeo.dispose()
      sphereMat.dispose()
      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      aria-hidden="true"
    />
  )
}
