'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-uin-primary via-uin-800 to-uin-950" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-uin-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Menjadi Bagian dari{' '}
            <span className="text-uin-accent">UIN Malang?</span>
          </h2>

          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Daftarkan dirimu sekarang dan mulai perjalanan akademikmu di kampus ulul albab 
            yang bereputasi internasional. Bersama kami, wujudkan impianmu untuk menjadi 
            generasi unggul Indonesia.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pmb"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-all duration-300 hover:shadow-premium active:scale-95"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
