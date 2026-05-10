import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users, BookOpen, Award, Star, CheckCircle } from 'lucide-react'
import { faculties } from '@/data/dummyData'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import AnimatedCard from '@/components/ui/AnimatedCard'
export async function generateStaticParams() {
  return faculties.map((faculty) => ({
    id: faculty.id,
  }))
}
export default function FacultyDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const faculty = faculties.find(f => f.id === params.id)

  if (!faculty) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Fakultas tidak ditemukan</h1>
        <Link href="/fakultas" className="text-uin-primary hover:underline mt-4 inline-block">
          Kembali ke daftar fakultas
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/fakultas" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Fakultas
          </Link>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-lg mb-4">
              {faculty.short}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {faculty.name}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">{faculty.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-uin-primary" />
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{faculty.students.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Mahasiswa</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-uin-primary" />
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{faculty.lecturers}</div>
                <div className="text-xs text-gray-500">Dosen</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-uin-primary" />
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{faculty.programs.length}</div>
                <div className="text-xs text-gray-500">Program Studi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Programs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Program Studi</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {faculty.programs.map((program, index) => (
                  <AnimatedCard key={program.name} delay={index * 0.1}>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{program.name}</h3>
                        <span className={`px-2 py-0.5 text-xs font-bold rounded ${
                          program.accreditation === 'A' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          Akreditasi {program.accreditation}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star className="w-4 h-4" />
                        <span>Jenjang {program.degree}</span>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Prestasi Fakultas</h2>
              <div className="space-y-4">
                {faculty.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800"
                  >
                    <CheckCircle className="w-5 h-5 text-uin-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedCard>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Dosen Unggulan</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ImagePlaceholder className="w-12 h-12 rounded-full" label={`Dosen ${i}`} />
                      <div>
                        <div className="font-medium text-sm text-gray-900 dark:text-white">Prof. Dr. Dosen {i}</div>
                        <div className="text-xs text-gray-500">Bidang Keahlian</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Fasilitas</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-uin-primary" />
                    Laboratorium Modern
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-uin-primary" />
                    Perpustakaan Digital
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-uin-primary" />
                    Ruang Seminar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-uin-primary" />
                    Studio & Workshop
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  )
}
