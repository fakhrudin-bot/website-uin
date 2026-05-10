'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, BookOpen, Users, Award } from 'lucide-react'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-uin-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 border border-white/20"
            >
              <Award className="w-4 h-4 text-uin-accent" />
              <span>QS Stars 5+ International Accreditation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Kampus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uin-accent to-gold-400">
                Ulul Albab
              </span>
              <br />
              Bereputasi Internasional
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
            >
              Universitas Islam Negeri Maulana Malik Ibrahim Malang — mencetak generasi unggul 
              yang menguasai ilmu keislaman dan ilmu modern untuk peradaban yang lebih baik.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/pmb"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-all duration-300 hover:shadow-premium active:scale-95"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Video Profil
              </button>
            </motion.div>

            {/* Stats Mini */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex gap-8"
            >
              {[
                { icon: Users, label: 'Mahasiswa', value: '25K+' },
                { icon: BookOpen, label: 'Program Studi', value: '50+' },
                { icon: Award, label: 'Akreditasi', value: 'A' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-uin-accent" />
                  </div>
                  <div>
                    <div className="text-white font-bold">{stat.value}</div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-uin-accent/20 to-gold-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
                <img 
                  src="/images/hero-campus.jpg" 
                  alt="Kampus UIN Maulana Malik Ibrahim Malang"
                  className="aspect-[4/3] w-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-premium border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Top 10</div>
                    <div className="text-xs text-gray-500">Universitas Islam Terbaik</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-premium border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-uin-300 to-uin-500 border-2 border-white dark:border-gray-900" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-uin-primary">500+</span> Mahasiswa Internasional
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden">
            <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
  <video
    controls
    playsInline
    className="w-full h-auto"
    poster="/images/video-thumbnail.jpg"
  >
    <source src="/videos/profil-uin.mp4" type="video/mp4" />
    Browser Anda tidak mendukung pemutaran video.
  </video>
</div>
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}