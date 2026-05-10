'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { news } from '@/data/dummyData'
import { formatDateShort } from '@/lib/utils'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const categories = ['Semua', 'Prestasi', 'Inovasi', 'PMB', 'Event', 'Kerjasama']

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNews = news.filter((item) => {
    const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Berita & Artikel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Informasi terkini seputar kegiatan, prestasi, dan perkembangan di UIN Malang
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-uin-primary dark:focus:ring-uin-500 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-uin-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item, index) => (
                <AnimatedCard key={item.id} delay={index * 0.1}>
                  <Link href={`/berita/${item.id}`} className="block group">
                    <div className="relative overflow-hidden">
                      <img
  src={item.image}
  alt={item.title}
  className="aspect-[4/3] w-full object-cover"
/>
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-uin-primary/90 text-white text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDateShort(item.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {item.author}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-uin-primary dark:group-hover:text-uin-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-uin-primary dark:text-uin-400 font-medium">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Tag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Tidak ada berita yang sesuai dengan pencarian Anda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
