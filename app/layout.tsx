import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Kanit } from 'next/font/google'
import './globals.css'
import {Footer} from '../components/Footer'
import ResponsiveNav from '@/components/ResponsiveNav'

// const inter = Inter({ subsets: ['latin'] })
const kanit = Kanit({ subsets: ['latin'], weight: ['200', '300', '400', '600'] })

export const metadata: Metadata = {
  title: "Emir - Software Dev",
  description: "Landingpage for the Ecruz's Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} flex flex-col min-h-screen bg-[#1E2020]`}>
        <ResponsiveNav />
        {
          children
        }       
        <Footer />
      </body>
    </html>
  )
}
