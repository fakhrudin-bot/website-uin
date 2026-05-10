'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Award, ChevronRight, Building2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { faculties } from '@/data/dummyData'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function FakultasPage() {
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
            Fakultas & Program Studi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            10 fakultas dengan 50+ program studi unggulan yang terakreditasi nasional dan internasional
          </motion.p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Daftar Fakultas"
            title="Pilihan Fakultas"
            description="Temukan fakultas dan program studi yang sesuai dengan minat dan bakatmu"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {faculties.map((faculty, index) => (
              <AnimatedCard key={faculty.id} delay={index * 0.1}>
                <Link href={`/fakultas/${faculty.id}`} className="block group">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative">
                      <img
  src={faculty.image}
  alt={faculty.name}
  className="aspect-square md:aspect-auto md:h-full w-full object-cover"
/>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-uin-primary text-white text-xs font-bold rounded-lg">
                          {faculty.short}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-uin-primary dark:group-hover:text-uin-400 transition-colors">
                        {faculty.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {faculty.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {faculty.programs.slice(0, 3).map((prog) => (
                          <span key={prog.name} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 rounded">
                            {prog.name}
                          </span>
                        ))}
                        {faculty.programs.length > 3 && (
                          <span className="px-2 py-1 bg-uin-50 dark:bg-uin-900/50 text-xs text-uin-primary dark:text-uin-400 rounded">
                            +{faculty.programs.length - 3} lainnya
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {faculty.students.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5" />
                            {faculty.lecturers} Dosen
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-uin-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10', label: 'Fakultas', icon: Building2 },
              { value: '50+', label: 'Program Studi', icon: BookOpen },
              { value: '850+', label: 'Dosen', icon: Users },
              { value: '25K+', label: 'Mahasiswa', icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800"
              >
                <stat.icon className="w-8 h-8 text-uin-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
