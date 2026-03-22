'use client'

import { type MouseEvent, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const [portraitTransform, setPortraitTransform] = useState(
    'perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  )

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePortraitMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * 8
    const rotateX = (0.5 - y) * 8

    setPortraitTransform(
      `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    )
  }

  const resetPortraitTransform = () => {
    setPortraitTransform('perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 md:px-12 lg:px-24">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.12_0_0)_0%,_transparent_50%)]" />

      <div className="relative z-10 grid w-full items-center gap-14 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div className="max-w-4xl">
          <p
            className="mb-4 font-mono text-sm tracking-[0.22em] text-foreground/58 uppercase"
            style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.14)' }}
          >
            AI Systems Engineer
          </p>

          <h1
            className="mb-6 text-4xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance"
            style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.04), 0 12px 32px rgba(0, 0, 0, 0.24)' }}
          >
            Matteo Rambaldi
          </h1>

          <p
            className="mb-12 max-w-2xl text-lg leading-relaxed text-foreground/68 md:text-xl"
            style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 22px rgba(0, 0, 0, 0.16)' }}
          >
            From models to silicon.<br />
            Anyone can train a model. I make it run where it matters.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://www.matteorambaldi.it/assets/docs/MATTEO_RAMBALDI_CV.pdf"
              download="matteorambaldi_cv.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.02]"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:border-muted-foreground/30"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="relative hidden md:flex md:justify-center" style={{ perspective: '1400px' }}>
          <div
            onMouseMove={handlePortraitMove}
            onMouseLeave={resetPortraitTransform}
            className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_42px_110px_rgba(0,0,0,0.42)] transition-transform duration-300 ease-out after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-black/34 after:via-black/10 after:to-white/5 lg:max-w-[420px]"
            style={{ transform: portraitTransform, transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            <Image
              src="/images/matteo-portrait.webp"
              alt="Portrait of Matteo Rambaldi"
              fill
              sizes="(min-width: 1024px) 420px, 320px"
              className="object-cover object-[center_18%] grayscale contrast-125 brightness-[0.88]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to projects"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  )
}
