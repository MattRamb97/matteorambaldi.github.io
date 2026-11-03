'use client'

import { type PointerEvent, useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const restingTransform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

export function Hero() {
  const [portraitTransform, setPortraitTransform] = useState(restingTransform)

  const handlePortraitMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * 6
    const rotateX = (0.5 - y) * 6
    setPortraitTransform(
      `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
    )
  }

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-28 md:pt-[52px]">
      <div className="container-wide grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-20">
        <div className="hero-enter text-center md:text-left">
          <p className="type-eyebrow mb-3 text-muted-foreground">AI Systems Engineer</p>

          <h1 className="type-hero mb-6 text-foreground">Matteo Rambaldi</h1>

          <p className="type-subhead mx-auto mb-10 max-w-xl text-muted-foreground md:mx-0">
            <span className="text-foreground">From models to silicon.</span> Anyone can train a model. I make it run
            where it matters.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="/assets/docs/matteorambaldi_cv.pdf"
              download="matteorambaldi_cv.pdf"
              className="btn-pill btn-primary"
            >
              Download Resume
            </a>
            <a href="#projects" className="link-apple type-body px-2 py-2.5">
              View projects
              <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </div>
        </div>

        <div
          className="hero-enter flex justify-center [animation-delay:150ms] md:justify-end"
          style={{ perspective: '1400px' }}
        >
          <div
            onPointerMove={handlePortraitMove}
            onPointerLeave={() => setPortraitTransform(restingTransform)}
            className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-tile bg-surface shadow-[0_30px_80px_-20px_var(--shadow-color)] transition-transform duration-500 ease-apple md:max-w-[340px] lg:max-w-[420px]"
            style={{ transform: portraitTransform, transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            <Image
              src="/images/matteo-portrait.webp"
              alt="Portrait of Matteo Rambaldi"
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 340px, 300px"
              className="object-cover object-[center_40%]"
              priority
            />
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 p-2 text-tertiary-foreground transition-colors duration-200 hover:text-foreground md:block"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  )
}
