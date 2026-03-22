'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-24">
          <a href="#" className="flex items-center overflow-visible">
            <Image
              src="/images/logo.gif"
              alt="Matteo Rambaldi"
              width={40}
              height={40}
              className="h-10 w-10 scale-[2.25] object-contain"
              unoptimized
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {isMounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_40%),linear-gradient(to_bottom,rgba(8,10,14,0.96),rgba(8,10,14,0.99))] backdrop-blur-2xl transition-all duration-300 md:hidden ${
              isMobileMenuOpen
                ? 'visible opacity-100'
                : 'invisible pointer-events-none opacity-0'
            }`}
          >
            <div className="flex h-[100dvh] flex-col items-center justify-center gap-10 px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-semibold tracking-tight text-foreground transition-all duration-300 hover:opacity-60"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
