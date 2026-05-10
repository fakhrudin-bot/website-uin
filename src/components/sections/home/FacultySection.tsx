'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { faculties } from '@/data/dummyData'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function FacultySection() {
  const featuredFaculties = faculties.slice(0, 6)

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Fakultas Unggulan"
          title="Pilihan Fakultas Terbaik"
          description="10 fakultas dengan program studi berkualitas dan akreditasi unggul"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFaculties.map((faculty, index) => (
            <AnimatedCard key={faculty.id} delay={index * 0.1}>
              <Link href={`/fakultas/${faculty.id}`} className="block group">
                <div className="relative overflow-hidden">
                  <img
  src={faculty.image}
  alt={faculty.name}
  className="aspect-[16/9] w-full object-cover"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                      {faculty.short}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-uin-primary dark:group-hover:text-uin-400 transition-colors">
                    {faculty.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                    {faculty.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {faculty.programs.length} Program Studi
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {faculty.students.toLocaleString()} Mahasiswa
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/fakultas"
            className="inline-flex items-center gap-2 px-6 py-3 bg-uin-primary text-white rounded-xl font-semibold hover:bg-uin-800 transition-all duration-300 shadow-glow"
          >
            Lihat Semua Fakultas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
