import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
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
  themeColor: '#0d0d0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
