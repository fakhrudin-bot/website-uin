'use client'

import { motion } from 'framer-motion'
import { Trophy, Medal, Star, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const achievements = [
  {
    icon: Trophy,
    title: "Juara 1 Debat Bahasa Arab Nasional",
    year: "2025",
    desc: "Tim Fakultas Adab meraih juara pertama dalam kompetisi debat tingkat nasional"
  },
  {
    icon: Medal,
    title: "Best Islamic University ASEAN",
    year: "2026",
    desc: "Penghargaan sebagai universitas Islam terbaik di kawasan ASEAN"
  },
  {
    icon: Star,
    title: "QS Stars 5+ Rating",
    year: "2026",
    desc: "Akreditasi internasional dengan rating tertinggi untuk teaching dan research"
  },
  {
    icon: TrendingUp,
    title: "Top 10 LPTK Indonesia",
    year: "2025",
    desc: "Masuk dalam peringkat 10 besar Lembaga Pendidikan Tenaga Kependidikan"
  },
]

export default function AchievementSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Prestasi Mahasiswa"
          title="Pencapaian Gemilang"
          description="Berbagai prestasi yang diraih oleh mahasiswa dan civitas akademika UIN Malang"
          light
        />

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-uin-accent to-gold-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-uin-accent font-bold text-sm mb-2">{item.year}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
