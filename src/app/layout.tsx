import './globals.css'
import '../config/firebaseConfig'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BircleAI dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-50 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
