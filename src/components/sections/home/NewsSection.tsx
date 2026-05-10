'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { news } from '@/data/dummyData'
import { formatDateShort } from '@/lib/utils'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function NewsSection() {
  const latestNews = news.slice(0, 4)

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Berita Terbaru"
          title="Informasi & Berita Kampus"
          description="Ikuti perkembangan terbaru seputar kegiatan dan prestasi UIN Malang"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map((item, index) => (
            <AnimatedCard key={item.id} delay={index * 0.1}>
              <Link href={`/berita/${item.id}`} className="block group">
                <div className="relative overflow-hidden">
                  <ImagePlaceholder className="aspect-[4/3] w-full" label={item.category} />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-uin-primary/90 text-white text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-uin-primary text-uin-primary rounded-xl font-semibold hover:bg-uin-primary hover:text-white transition-all duration-300"
          >
            Lihat Semua Berita
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
