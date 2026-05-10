'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, HelpCircle, ChevronDown, UserPlus, GitBranch, Upload, CreditCard, ClipboardCheck, GraduationCap } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { pmbSteps, pmbRequirements } from '@/data/dummyData'

const iconMap: Record<string, React.ReactNode> = {
  UserPlus: <UserPlus className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  Upload: <Upload className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
}

const faqs = [
  { q: 'Kapan pendaftaran mahasiswa baru dibuka?', a: 'Pendaftaran mahasiswa baru tahun 2026/2027 dibuka mulai 15 Januari hingga 30 Juni 2026.' },
  { q: 'Berapa biaya pendaftaran?', a: 'Biaya pendaftaran bervariasi sesuai jalur seleksi, mulai dari Rp 150.000 hingga Rp 300.000.' },
  { q: 'Apakah ada program beasiswa?', a: 'Ya, UIN Malang menyediakan berbagai beasiswa seperti KIP-Kuliah, Beasiswa Unggulan, dan beasiswa dari mitra.' },
  { q: 'Bagaimana jika tidak lulus SNBP?', a: 'Jika tidak lulus SNBP, kamu masih bisa mendaftar melalui jalur SNBT, SPAN-PTKIN, atau Jalur Mandiri.' },
  { q: 'Apakah ada tes khusus untuk jalur mandiri?', a: 'Ya, jalur mandiri UIN Malang memiliki tes seleksi mandiri yang terdiri dari tes akademik dan tes keislaman.' },
]

export default function PMBPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 border border-white/20"
          >
            <GraduationCap className="w-4 h-4 text-uin-accent" />
            <span>Penerimaan Mahasiswa Baru 2026/2027</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Daftar Sekarang di{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-uin-accent to-gold-400">
              UIN Malang
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
          >
            Bergabunglah dengan 25.000+ mahasiswa dari seluruh Indonesia. Pilih jalur seleksi yang sesuai dengan potensimu.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/pmb/daftar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-all duration-300 hover:shadow-premium active:scale-95"
            >
              Daftar Online Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Alur Pendaftaran"
            title="Langkah-langkah Mendaftar"
            description="Ikuti 6 langkah sederhana untuk menjadi mahasiswa UIN Malang"
          />

          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-uin-primary to-uin-accent hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pmbSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-premium transition-all duration-300 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center text-white mb-4">
                      {iconMap[step.icon] || <CheckCircle className="w-6 h-6" />}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-uin-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jalur Seleksi */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Jalur Seleksi"
            title="Pilih Jalur yang Sesuai"
            description="Berbagai jalur masuk untuk memberikan kesempatan terbaik bagi calon mahasiswa"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {pmbRequirements.map((req, index) => (
              <AnimatedCard key={req.type} delay={index * 0.1}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-uin-primary dark:text-uin-400 font-medium">{req.type}</span>
                      <h3 className="font-bold text-gray-900 dark:text-white">{req.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {req.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-uin-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Form Registration CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Form Pendaftaran <span className="text-uin-accent">Modern</span>
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Sistem pendaftaran online kami dirancang untuk memudahkan calon mahasiswa 
                mendaftar dari mana saja. Dengan verifikasi otomatis dan tracking real-time.
              </p>
              <ul className="space-y-3 mb-8">
                {['Pendaftaran 100% online', 'Verifikasi dokumen otomatis', 'Tracking status real-time', 'Pembayaran virtual account'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-uin-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/pmb/daftar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-all duration-300"
              >
                Mulai Pendaftaran
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/80 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-uin-accent" placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-uin-accent" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-2">Pilihan Jalur</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-uin-accent">
                    <option>SNBP</option>
                    <option>SNBT</option>
                    <option>SPAN-PTKIN</option>
                    <option>Jalur Mandiri</option>
                  </select>
                </div>
                <button className="w-full py-3 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-colors">
                  Lanjutkan Pendaftaran
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Temukan jawaban untuk pertanyaan umum seputar pendaftaran mahasiswa baru"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className="font-medium text-gray-900 dark:text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-uin-primary shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="px-5 pb-5"
                  >
                    <p className="text-gray-600 dark:text-gray-400 pl-8">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
