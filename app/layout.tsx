import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://matteorambaldi.it'),
  title: 'Matteo Rambaldi — AI Systems Engineer',
  description: 'AI Systems Engineer focused on deploying models to real-world hardware, from software to embedded systems.',
  applicationName: 'Matteo Rambaldi Portfolio',
  authors: [{ name: 'Matteo Rambaldi', url: 'https://matteorambaldi.it' }],
  keywords: [
    'Matteo Rambaldi',
    'AI Systems Engineer',
    'AI Engineer',
    'Embedded AI',
    'Computer Engineer',
    'Portfolio',
  ],
  creator: 'Matteo Rambaldi',
  publisher: 'Matteo Rambaldi',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Matteo Rambaldi — AI Systems Engineer',
    description:
      'AI Systems Engineer focused on deploying models to real-world hardware, from software to embedded systems.',
    url: 'https://matteorambaldi.it',
    siteName: 'Matteo Rambaldi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matteo Rambaldi — AI Systems Engineer',
    description:
      'AI Systems Engineer focused on deploying models to real-world hardware, from software to embedded systems.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
