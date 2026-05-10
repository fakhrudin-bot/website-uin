'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const pathNames: Record<string, string> = {
  '': 'Beranda',
  'tentang': 'Tentang Kampus',
  'fakultas': 'Fakultas',
  'akademik': 'Akademik',
  'pmb': 'Pendaftaran',
  'berita': 'Berita',
  'galeri': 'Galeri',
  'kontak': 'Kontak',
  'login': 'Login',
  'register': 'Register',
  'dashboard': 'Dashboard',
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  return (
    <nav className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-500 hover:text-uin-primary dark:text-gray-400 dark:hover:text-uin-400 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Beranda</span>
            </Link>
          </li>
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1
            const href = '/' + paths.slice(0, index + 1).join('/')
            const label = pathNames[path] || path.charAt(0).toUpperCase() + path.slice(1)

            return (
              <li key={path} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="font-medium text-uin-primary dark:text-uin-400">{label}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-uin-primary dark:text-gray-400 dark:hover:text-uin-400 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
