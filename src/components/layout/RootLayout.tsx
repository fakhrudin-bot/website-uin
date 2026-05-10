'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import LoadingScreen from './LoadingScreen'

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <LoadingScreen>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Breadcrumb />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LoadingScreen>
  )
}
