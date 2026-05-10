import type { Metadata } from 'next'
import { Inter, Amiri } from 'next/font/google'
import './globals.css'
import RootLayoutClient from '@/components/layout/RootLayout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const amiri = Amiri({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-amiri' })

export const metadata: Metadata = {
  title: 'UIN Maulana Malik Ibrahim Malang - Kampus Ulul Albab',
  description: 'Universitas Islam Negeri Maulana Malik Ibrahim Malang - Kampus Ulul Albab Bereputasi Internasional. 10 Fakultas, 50+ Program Studi, 25.000+ Mahasiswa.',
  keywords: 'UIN Malang, Universitas Islam Negeri, Kampus Malang, Pendidikan Islam, PMB 2026',
  authors: [{ name: 'UIN Malang' }],

  icons: {
    icon: '/logo.png',
  },

  openGraph: {
    title: 'UIN Maulana Malik Ibrahim Malang',
    description: 'Kampus Ulul Albab Bereputasi Internasional',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${amiri.variable} font-sans antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  )
}