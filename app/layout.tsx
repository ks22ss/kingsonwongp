import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Kingson Wong',
  description: 'Personal Website of Kingson Wong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background max-w-[1440px] min-h-screen mx-auto">
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
