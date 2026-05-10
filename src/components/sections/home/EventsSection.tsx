'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { events } from '@/data/dummyData'
import { formatDateShort } from '@/lib/utils'

export default function EventsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Agenda Kegiatan"
          title="Jadwal Kegiatan Kampus"
          description="Jangan lewatkan berbagai kegiatan menarik di UIN Malang"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {events.slice(0, 4).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-medium">
                      {new Date(event.date).toLocaleDateString('id-ID', { month: 'short' })}
                    </span>
                    <span className="text-xl font-bold">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400 text-xs font-medium rounded">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-uin-primary dark:group-hover:text-uin-400 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-uin-primary text-uin-primary rounded-xl font-semibold hover:bg-uin-primary hover:text-white transition-all duration-300"
          >
            Lihat Semua Agenda
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
