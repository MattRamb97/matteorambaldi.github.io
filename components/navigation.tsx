'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
    setIsMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileMenuOpen(false)
    }
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] border-b transition-[background-color,border-color] duration-500 ease-apple ${
          isMobileMenuOpen
            ? 'border-transparent bg-transparent'
            : isScrolled
              ? 'border-hairline bg-nav backdrop-blur-xl backdrop-saturate-[1.8]'
              : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="container-wide flex h-[52px] items-center justify-between px-6">
          <a href="#" aria-label="Matteo Rambaldi — Home" className="flex items-center">
            <Image
              src="/images/logo.gif"
              alt=""
              width={40}
              height={40}
              className="logo-mark h-9 w-9 scale-[2.25] object-contain"
              unoptimized
              priority
            />
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="type-micro text-foreground/80 transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="relative -mr-2 flex h-11 w-11 items-center justify-center text-foreground md:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`absolute h-px w-[18px] bg-current transition-transform duration-300 ease-apple ${
                isMobileMenuOpen ? 'rotate-45' : '-translate-y-[4px]'
              }`}
            />
            <span
              className={`absolute h-px w-[18px] bg-current transition-transform duration-300 ease-apple ${
                isMobileMenuOpen ? '-rotate-45' : 'translate-y-[4px]'
              }`}
            />
          </button>
        </nav>
      </header>

      {isMounted &&
        createPortal(
          <div
            id="mobile-menu"
            className={`fixed inset-0 z-[100] bg-overlay backdrop-blur-2xl transition-[opacity,visibility] duration-300 ease-apple md:hidden ${
              isMobileMenuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
            }`}
          >
            <ul className="flex h-[100dvh] flex-col gap-2 px-12 pt-24">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className={`transition-[opacity,transform] duration-500 ease-apple ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${80 + index * 40}ms` : '0ms' }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-[28px] font-semibold leading-[1.14] tracking-[0.007em] text-foreground/90 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </>
  )
}
