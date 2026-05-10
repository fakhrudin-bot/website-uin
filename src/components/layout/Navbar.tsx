'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, Sun, Moon, Search, GraduationCap 
} from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Beranda', href: '/' },
  {
    name: 'Tentang',
    href: '/tentang',
    megaMenu: {
      title: 'Tentang UIN Malang',
      sections: [
        {
          title: 'Profil',
          items: [
            { name: 'Sejarah', href: '/tentang#sejarah' },
            { name: 'Visi & Misi', href: '/tentang#visi-misi' },
            { name: 'Profil Kampus', href: '/tentang#profil' },
            { name: 'Struktur Organisasi', href: '/tentang#struktur' },
          ]
        },
        {
          title: 'Informasi',
          items: [
            { name: 'Akreditasi', href: '/tentang#akreditasi' },
            { name: 'Video Profil', href: '/tentang#video' },
            { name: 'Pimpinan', href: '/tentang#pimpinan' },
            { name: 'Kerjasama', href: '/tentang#kerjasama' },
          ]
        },
        {
          title: 'Fasilitas',
          items: [
            { name: 'Perpustakaan', href: '/tentang#perpustakaan' },
            { name: 'Laboratorium', href: '/tentang#laboratorium' },
            { name: 'Masjid', href: '/tentang#masjid' },
            { name: 'Asrama', href: '/tentang#asrama' },
          ]
        }
      ]
    }
  },
  {
    name: 'Fakultas',
    href: '/fakultas',
    megaMenu: {
      title: 'Fakultas & Program Studi',
      sections: [
        {
          title: 'Fakultas Keislaman',
          items: [
            { name: 'Syariah', href: '/fakultas/sy' },
          ]
        },
        {
          title: 'Fakultas Umum',
          items: [
            { name: 'Sains & Teknologi', href: '/fakultas/f' },
            { name: 'Ekonomi', href: '/fakultas/fe' },
            { name: 'Psikologi', href: '/fakultas/psi' },
            { name: 'Humaniora', href: '/fakultas/hm' },
          ]
        },
        {
          title: 'Fakultas Profesional',
          items: [
            { name: 'Kedokteran & Kesehatan', href: '/fakultas/fkm' },
            { name: 'Psikologi', href: '/fakultas/psi' },
            { name: 'Pascasarjana', href: '/fakultas/pascasarjana' },
          ]
        }
      ]
    }
  },
  { name: 'Akademik', href: '/akademik' },
  { name: 'PMB', href: '/pmb' },
  { name: 'Berita', href: '/berita' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Kontak', href: '/kontak' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const { isDark, toggle, mounted } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMegaMenu(null)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-gray-800'
            : 'bg-transparent'
        )}
      >
        {/* Top Bar */}
        <div className={cn(
          'transition-all duration-500 overflow-hidden',
          isScrolled ? 'h-0' : 'h-10'
        )}>
          <div className="bg-uin-primary dark:bg-uin-900 text-white text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
              <div className="flex items-center gap-4">
                <span>📞 (0341) 551354</span>
                <span className="hidden sm:inline">📧 info@uin-malang.ac.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/login" className="hover:text-uin-accent transition-colors">Login</Link>
                <span>|</span>
                <Link href="/dashboard" className="hover:text-uin-accent transition-colors">SIAKAD</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
  src="/logo.png"
  alt="Logo UIN"
  className="w-full h-full aspect-square object-cover rounded-full"
/>
              </div>
              <div className="hidden sm:block">
                <h1 className={cn(
                  'text-sm lg:text-base font-bold leading-tight transition-colors',
                  isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                )}>
                  UIN Maulana Malik
                </h1>
                <p className={cn(
                  'text-[10px] lg:text-xs transition-colors',
                  isScrolled ? 'text-gray-500 dark:text-gray-400' : 'text-white/80'
                )}>
                  Ibrahim Malang
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.name)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1',
                      pathname === item.href
                        ? 'text-uin-primary dark:text-uin-400 bg-uin-50 dark:bg-uin-900/50'
                        : isScrolled
                          ? 'text-gray-700 dark:text-gray-300 hover:text-uin-primary dark:hover:text-uin-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.name}
                    {item.megaMenu && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {item.megaMenu && activeMegaMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] mt-2"
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-800 overflow-hidden">
                          <div className="bg-gradient-to-r from-uin-primary to-uin-700 p-4">
                            <h3 className="text-white font-semibold">{item.megaMenu.title}</h3>
                          </div>
                          <div className="p-6 grid grid-cols-3 gap-6">
                            {item.megaMenu.sections.map((section) => (
                              <div key={section.title}>
                                <h4 className="text-xs font-bold text-uin-primary dark:text-uin-400 uppercase tracking-wider mb-3">
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-uin-primary dark:hover:text-uin-400 transition-colors block py-1"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'text-white/90 hover:bg-white/10'
                )}
              >
                <Search className="w-5 h-5" />
              </button>

              {mounted && (
                <button
                  onClick={toggle}
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    isScrolled 
                      ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800' 
                      : 'text-white/90 hover:bg-white/10'
                  )}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}

              <Link
                href="/pmb"
                className={cn(
                  'hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300',
                  isScrolled
                    ? 'bg-uin-primary text-white hover:bg-uin-800 shadow-glow'
                    : 'bg-white text-uin-primary hover:bg-white/90'
                )}
              >
                Daftar Sekarang
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100' 
                    : 'text-white/90 hover:bg-white/10'
                )}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-premium p-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari berita, fakultas, program studi..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl border-0 focus:ring-2 focus:ring-uin-primary dark:focus:ring-uin-500 text-gray-900 dark:text-white placeholder-gray-400"
                    autoFocus
                  />
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="text-xs text-gray-500">Pencarian populer:</span>
                  {['PMB 2026', 'Teknik Informatika', 'Beasiswa', 'Kalender Akademik'].map((tag) => (
                    <button
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-uin-50 dark:hover:bg-uin-900/50 hover:text-uin-primary transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-premium overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-sm font-bold text-gray-900 dark:text-white">UIN Malang</h1>
                    </div>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                          pathname === item.href
                            ? 'bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.megaMenu && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.megaMenu.sections.map((section) => (
                            <div key={section.title}>
                              <p className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">{section.title}</p>
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-uin-primary dark:hover:text-uin-400 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href="/pmb"
                    className="block w-full text-center px-4 py-3 bg-uin-primary text-white rounded-xl font-semibold hover:bg-uin-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
