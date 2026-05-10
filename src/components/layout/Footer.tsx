'use client'

import Link from 'next/link'
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowUp } from 'lucide-react'

const footerLinks = {
  tentang: [
    { name: 'Sejarah', href: '/tentang#sejarah' },
    { name: 'Visi & Misi', href: '/tentang#visi-misi' },
    { name: 'Struktur Organisasi', href: '/tentang#struktur' },
    { name: 'Akreditasi', href: '/tentang#akreditasi' },
    { name: 'Pimpinan', href: '/tentang#pimpinan' },
  ],
  akademik: [
    { name: 'Fakultas', href: '/fakultas' },
    { name: 'Kalender Akademik', href: '/akademik' },
    { name: 'Jadwal Kuliah', href: '/akademik#jadwal' },
    { name: 'Kurikulum', href: '/akademik#kurikulum' },
    { name: 'Panduan Akademik', href: '/akademik#panduan' },
  ],
  kemahasiswaan: [
    { name: 'PMB', href: '/pmb' },
    { name: 'Beasiswa', href: '/pmb#beasiswa' },
    { name: 'Organisasi', href: '/kemahasiswaan' },
    { name: 'Karir', href: '/karir' },
    { name: 'Alumni', href: '/alumni' },
  ],
  layanan: [
  { name: 'Perpustakaan', href: 'https://lib.uin-malang.ac.id' },
  { name: 'E-Learning', href: 'https://elearning.uin-malang.ac.id' },
  { name: 'SIAKAD', href: 'https://siakad.uin-malang.ac.id' },
  { name: 'Helpdesk', href: 'https://helpdesk.uin-malang.ac.id' },
  { name: 'FAQ', href: 'https://uin-malang.ac.id' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">UIN Maulana Malik</h3>
                <p className="text-uin-accent text-sm">Ibrahim Malang</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kampus Ulul Albab, Bereputasi Internasional. Mencetak generasi unggul yang menguasai ilmu keislaman dan ilmu modern.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-uin-primary shrink-0 mt-0.5" />
                <span className="text-sm">Jl. Gajayana No. 50, Dinoyo, Malang, Jawa Timur 65144</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-uin-primary shrink-0" />
                <span className="text-sm">(0341) 551354</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-uin-primary shrink-0" />
                <span className="text-sm">info@uin-malang.ac.id</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
  href={link.href}
  target="_blank"
  rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-uin-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Berlangganan Newsletter</h4>
              <p className="text-sm text-gray-400">Dapatkan informasi terbaru tentang kampus kami</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-uin-primary focus:border-transparent flex-1 md:w-72"
              />
              <button className="px-6 py-3 bg-uin-primary hover:bg-uin-700 text-white rounded-xl font-medium transition-colors whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 UIN Maulana Malik Ibrahim Malang. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-uin-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-uin-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-uin-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-uin-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-uin-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 bg-uin-primary hover:bg-uin-700 text-white rounded-lg transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
