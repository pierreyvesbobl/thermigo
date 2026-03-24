import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Thermigo — Solutions thermiques professionnelles',
    template: '%s | Thermigo',
  },
  description:
    'Thermigo, votre expert en solutions thermiques. Chauffage, climatisation, ventilation et plomberie pour particuliers et professionnels.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Thermigo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
