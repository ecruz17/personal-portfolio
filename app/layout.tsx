import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'
import {Footer} from '../components/Footer'
import ResponsiveNav from '@/components/ResponsiveNav'
import Head from 'next/head'

const kanit = Kanit({ subsets: ['latin'], weight: ['200', '300', '400', '600'] })

export const metadata: Metadata = {
  title: "Emir Cruz - Software Engineer",
  description: "Landing page for the Ecruz's Portfolio",
  icons: {
    icon: '/ecruz_dev.ico'
  },
  openGraph: {
    images: [
      {
        url: 'https://www.ecruz.dev/thumbnail.png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta property="og:image" content="https://ecruz.dev/thumbnail.png" />
        <meta property="og:url" content="https://ecruz.dev" />
        <meta name="twitter:card" content="/thumbnail.png" />
      </Head>
    <html lang="en">
        <body className={`${kanit.className} flex flex-col bg-colorBg overflow-x-hidden`}>
            <ResponsiveNav />
        {
          children
          }       
            <Footer />
      </body>
      </html>
    </>
  )
}
