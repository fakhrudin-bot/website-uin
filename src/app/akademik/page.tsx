'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Download, Clock, BookOpen, FileText, ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { academicCalendar } from '@/data/dummyData'

const curriculumData = [
  { semester: 'Semester 1', courses: ['Pengantar Teknologi Informasi', 'Matematika Dasar', 'Bahasa Inggris Akademik', 'Pendidikan Agama Islam', 'Bahasa Arab', 'Fisika Dasar'] },
  { semester: 'Semester 2', courses: ['Algoritma & Pemrograman', 'Struktur Data', 'Matematika Diskrit', 'Sistem Digital', 'Bahasa Indonesia', 'Pendidikan Kewarganegaraan'] },
  { semester: 'Semester 3', courses: ['Basis Data', 'Pemrograman Berorientasi Objek', 'Jaringan Komputer', 'Statistika', 'Etika Profesi TI', 'Sistem Operasi'] },
  { semester: 'Semester 4', courses: ['Pemrograman Web', 'Basis Data Lanjut', 'Kecerdasan Buatan', 'Rekayasa Perangkat Lunak', 'Keamanan Siber', 'Manajemen Proyek TI'] },
]

const guides = [
  { title: 'Panduan Akademik 2026', size: '2.5 MB', type: 'PDF' },
  { title: 'Kalender Akademik 2026/2027', size: '1.2 MB', type: 'PDF' },
  { title: 'Panduan Skripsi & Tesis', size: '3.1 MB', type: 'PDF' },
  { title: 'Panduan KRS Online', size: '850 KB', type: 'PDF' },
  { title: 'Panduan Beasiswa', size: '1.5 MB', type: 'PDF' },
]

export default function AkademikPage() {
  const [activeTab, setActiveTab] = useState('kalender')

  const tabs = [
    { id: 'kalender', label: 'Kalender Akademik', icon: Calendar },
    { id: 'jadwal', label: 'Jadwal Kuliah', icon: Clock },
    { id: 'sistem', label: 'Sistem Pembelajaran', icon: BookOpen },
    { id: 'kurikulum', label: 'Kurikulum', icon: FileText },
    { id: 'panduan', label: 'Download Panduan', icon: Download },
  ]

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
            Akademik
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Informasi lengkap mengenai kalender akademik, jadwal kuliah, kurikulum, dan panduan akademik
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-uin-primary text-white shadow-glow'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'kalender' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kalender Akademik 2026/2027</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {academicCalendar.map((month, index) => (
                    <AnimatedCard key={month.month} delay={index * 0.1}>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-uin-primary" />
                          {month.month}
                        </h3>
                        <ul className="space-y-3">
                          {month.events.map((event, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="px-2 py-1 bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400 text-xs font-medium rounded shrink-0">
                                {event.date}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{event.event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'jadwal' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Jadwal Kuliah Semester Genap 2026</h2>
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-uin-50 dark:bg-uin-900/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Hari</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Waktu</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Mata Kuliah</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Ruang</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Dosen</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'].map((day, dayIndex) => (
                          <tr key={day} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{day}</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {['07:30 - 09:10', '09:30 - 11:10', '13:00 - 14:40'][dayIndex % 3]}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                              {['Pemrograman Web', 'Jaringan Komputer', 'Basis Data', 'Kecerdasan Buatan', 'Etika Profesi'][dayIndex]}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {['Lab. 3', 'Lab. Jaringan', 'Ruang 4.2', 'Lab. AI', 'Ruang 2.1'][dayIndex]}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {['Dr. Rina', 'Dr. Siti', 'Prof. Budi', 'Dr. Ahmad', 'Ust. Ali'][dayIndex]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sistem' && (
              <div className="grid md:grid-cols-2 gap-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 md:col-span-2">Sistem Pembelajaran</h2>
                {[
                  { title: 'Kurikulum Merdeka Belajar', desc: 'Fleksibilitas pemilihan mata kuliah sesuai minat bakat mahasiswa dengan sistem SKS yang adaptif.' },
                  { title: 'Blended Learning', desc: 'Kombinasi pembelajaran tatap muka dan daring melalui platform e-learning modern.' },
                  { title: 'Project Based Learning', desc: 'Pembelajaran berbasis proyek nyata untuk mengasah kemampuan problem solving.' },
                  { title: 'Magang & Praktik Industri', desc: 'Kolaborasi dengan industri untuk pengalaman kerja nyata sebelum lulus.' },
                  { title: 'Research Based Learning', desc: 'Mahasiswa terlibat aktif dalam penelitian dosen sejak semester awal.' },
                  { title: 'Community Service', desc: 'Program pengabdian masyarakat sebagai bagian dari mata kuliah wajib.' },
                ].map((item, index) => (
                  <AnimatedCard key={item.title} delay={index * 0.1}>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            )}

            {activeTab === 'kurikulum' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kurikulum Program Studi</h2>
                <div className="space-y-4">
                  {curriculumData.map((sem, index) => (
                    <AnimatedCard key={sem.semester} delay={index * 0.1}>
                      <div className="p-6">
                        <button className="flex items-center justify-between w-full">
                          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-uin-primary" />
                            {sem.semester}
                          </h3>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </button>
                        <div className="mt-4 grid sm:grid-cols-2 gap-2">
                          {sem.courses.map((course) => (
                            <div key={course} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                              <FileText className="w-4 h-4 text-uin-primary shrink-0" />
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'panduan' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Download Panduan Akademik</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {guides.map((guide, index) => (
                    <AnimatedCard key={guide.title} delay={index * 0.1}>
                      <div className="p-5 flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 dark:text-white text-sm truncate">{guide.title}</h3>
                          <p className="text-xs text-gray-500">{guide.type} • {guide.size}</p>
                        </div>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <Download className="w-5 h-5 text-uin-primary" />
                        </button>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
