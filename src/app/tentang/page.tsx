'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Eye, Award, Users, Building2, Play } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const historyTimeline = [
  { year: '1961', title: 'Berdiri sebagai IAIN', desc: 'Didirikan sebagai Institut Agama Islam Negeri (IAIN) Malang' },
  { year: '1997', title: 'Pemisahan dari IAIN Surabaya', desc: 'Menjadi IAIN Malang yang mandiri' },
  { year: '2004', title: 'Status Universitas', desc: 'Ditetapkan sebagai Universitas Islam Negeri (UIN)' },
  { year: '2009', title: 'Penamaan Baru', desc: 'Diberi nama UIN Maulana Malik Ibrahim Malang' },
  { year: '2016', title: 'Kampus 3', desc: 'Pembangunan Kampus 3 di Jalan Raya Tlogomas' },
  { year: '2024', title: 'QS Stars 5+', desc: 'Raih akreditasi internasional tertinggi' },
]

const visionMission = [
  {
    icon: Eye,
    title: 'Visi',
    content: 'Menjadi universitas Islam unggul yang berperan aktif dalam pembangunan peradaban dunia melalui pengembangan ilmu pengetahuan, teknologi, dan seni berbasis nilai-nilai Islam.'
  },
  {
    icon: Target,
    title: 'Misi',
    content: '1. Menyelenggarakan pendidikan tinggi Islam yang berkualitas. 2. Mengembangkan riset dan inovasi berbasis integrasi keislaman. 3. Melaksanakan pengabdian masyarakat. 4. Membangun kerjasama global.'
  },
]

export default function TentangPage() {
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
            Tentang UIN Malang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Mengenal lebih dekat kampus ulul albab yang berkomitmen mencetak generasi unggul
          </motion.p>
        </div>
      </section>

      {/* Sejarah */}
      <section id="sejarah" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Sejarah"
            title="Perjalanan UIN Malang"
            description="Dari IAIN hingga menjadi universitas Islam unggulan bereputasi internasional"
          />

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-uin-primary to-uin-accent hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {historyTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${index > 0 ? 'lg:mt-12' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-premium transition-all duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-4 py-1 bg-uin-primary text-white text-sm font-bold rounded-lg">
                          {item.year}
                        </span>
                        <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-4 h-4 bg-uin-accent rounded-full mx-auto ring-4 ring-uin-50 dark:ring-uin-900" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section id="visi-misi" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Visi & Misi"
            title="Arah dan Tujuan"
            description="Komitmen kami untuk mencetak generasi ulul albab yang unggul"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 0.15}>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.content}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Profil Kampus */}
      <section id="profil" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImagePlaceholder className="aspect-video w-full rounded-3xl" label="Kampus UIN Malang" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400 rounded-full text-sm font-medium mb-4">
                Profil Kampus
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Kampus dengan <span className="text-uin-primary">Fasilitas Modern</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                UIN Malang memiliki 3 kampus strategis dengan total lahan lebih dari 50 hektar. 
                Kampus 1 di Jalan Gajayana menjadi pusat aktivitas utama, Kampus 2 di Jalan Mayjen Haryono 
                untuk fakultas kedokteran, dan Kampus 3 di Jalan Raya Tlogomas sebagai pusat inovasi.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: '3 Kampus', desc: 'Strategis & Modern' },
                  { icon: Users, label: '50+ Hektar', desc: 'Total Lahan Kampus' },
                  { icon: BookOpen, label: '50+ Prodi', desc: 'Program Studi' },
                  { icon: Award, label: 'A Akreditasi', desc: 'Institusi' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                    <stat.icon className="w-6 h-6 text-uin-primary mb-2" />
                    <div className="font-bold text-gray-900 dark:text-white">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section id="struktur" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Struktur Organisasi"
            title="Pimpinan Kampus"
            description="Struktur organisasi dan kepemimpinan UIN Maulana Malik Ibrahim Malang"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-uin-primary to-uin-800 rounded-2xl p-8 text-center text-white mb-8"
            >
              <ImagePlaceholder className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-white/20" label="Rektor" />
              <h3 className="text-xl font-bold">Prof. Dr. Hj. Ilfi Nur Diana, M.Si.</h3>
              <p className="text-uin-accent">Rektor</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Prof. Dr. Budi Santoso', role: 'Wakil Rektor I', desc: 'Bidang Akademik' },
                { name: 'Prof. Dr. Siti Aminah', role: 'Wakil Rektor II', desc: 'Bidang Administrasi Umum' },
                { name: 'Prof. Dr. Ahmad Fauzi', role: 'Wakil Rektor III', desc: 'Bidang Kemahasiswaan' },
              ].map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center hover:shadow-premium transition-all duration-300"
                >
                  <ImagePlaceholder className="w-20 h-20 rounded-full mx-auto mb-4" label={leader.name} />
                  <h4 className="font-bold text-gray-900 dark:text-white">{leader.name}</h4>
                  <p className="text-sm text-uin-primary dark:text-uin-400 font-medium">{leader.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{leader.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Akreditasi */}
      <section id="akreditasi" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Akreditasi"
            title="Standar Kualitas Internasional"
            description="Berbagai akreditasi yang membuktikan komitmen kami terhadap kualitas"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'QS Stars', rating: '5+', desc: 'International Accreditation' },
              { title: 'BAN-PT', rating: 'A', desc: 'Akreditasi Institusi' },
              { title: 'ISO 9001', rating: 'A', desc: 'Quality Management' },
              { title: 'AUN-QA', rating: 'A', desc: 'ASEAN University Network' },
            ].map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 0.1}>
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-uin-primary to-uin-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <div className="text-3xl font-bold text-uin-primary dark:text-uin-400 mb-1">{item.rating}</div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

            {/* Video Profil */}
      <section
        id="video"
        className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Video Profil"
            title="Mengenal UIN Malang"
            description="Tonton video profil kampus untuk melihat lebih dekat kehidupan di UIN Malang"
          />
<div className="mt-12 max-w-4xl mx-auto">
  <video
    controls
    autoPlay
    muted
    loop
    className="w-full rounded-3xl shadow-2xl"
  >
    <source src="/videos/profil-uin-2026.mp4" type="video/mp4" />
  </video>
</div>
        </div>
      </section>
    </div>
  )
}