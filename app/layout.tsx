import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'
import {Footer} from '../components/Footer'
import ResponsiveNav from '@/components/ResponsiveNav'
import Head from 'next/head'

const kanit = Kanit({ subsets: ['latin'], weight: ['200', '300', '400', '600'] })

export const metadata: Metadata = {
  title: "Emir Cruz - Software Engineer",
  description: "Landing page for the Ecruz's Portfolio"
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
      <body className={`${kanit.className} flex flex-col min-h-screen bg-[#1E2020]`}>
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
