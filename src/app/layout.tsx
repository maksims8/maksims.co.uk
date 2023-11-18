import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'maksims.co.uk | backend developer',
  description: 'A backend developer living in the United Kingdom.',

  openGraph: {
    title: 'maksims.co.uk | backend developer',
    description: 'A backend developer living in the United Kingdom.',
    url: 'https://maksims.co.uk',
    siteName: 'maksims.co.uk',
    images: [
      {
        url: 'https://i.postimg.cc/qM2WGkds/maksims-co-uk.png',
        width: 1200,
        height: 630,
        alt: ''
      }
    ],
    locale: 'en_GB',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
