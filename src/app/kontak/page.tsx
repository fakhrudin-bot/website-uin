'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube, Linkedin, CheckCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCard from '@/components/ui/AnimatedCard'

export default function KontakPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('success')
    setTimeout(() => setFormStatus('idle'), 3000)
  }

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
            Hubungi Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Kami siap membantu menjawab pertanyaan dan memberikan informasi yang Anda butuhkan
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            {[
              { icon: MapPin, title: 'Alamat', content: 'Jl. Gajayana No. 50, Dinoyo, Malang, Jawa Timur 65144' },
{ icon: Phone, title: 'Telepon', content: '(0341) 551354\nFax: (0341) 551354' },
              { icon: Mail, title: 'Email', content: 'info@uin-malang.ac.id\nhumas@uin-malang.ac.id' },
              { icon: Clock, title: 'Jam Operasional', content: 'Senin - Jumat\n08:00 - 16:00 WIB' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCard>
                  <div className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">{item.content}</p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda secepatnya.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-uin-primary dark:focus:ring-uin-500 focus:border-transparent text-gray-900 dark:text-white"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-uin-primary dark:focus:ring-uin-500 focus:border-transparent text-gray-900 dark:text-white"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subjek</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-uin-primary dark:focus:ring-uin-500 focus:border-transparent text-gray-900 dark:text-white">
                    <option>Pertanyaan Umum</option>
                    <option>Pendaftaran Mahasiswa</option>
                    <option>Kerjasama</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-uin-primary dark:focus:ring-uin-500 focus:border-transparent text-gray-900 dark:text-white resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-uin-primary text-white rounded-xl font-bold hover:bg-uin-800 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Pesan Terkirim!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-uin-primary mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Peta Lokasi Kampus</p>
                    <p className="text-sm text-gray-500">Jl. Gajayana No. 50, Malang</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Sosial Media</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Facebook, name: 'Facebook', handle: '@uinmalang', color: 'bg-blue-600' },
                    { icon: Instagram, name: 'Instagram', handle: '@uinmalang', color: 'bg-gradient-to-br from-purple-600 to-pink-500' },
                    { icon: Twitter, name: 'Twitter', handle: '@uinmalang', color: 'bg-sky-500' },
                    { icon: Youtube, name: 'Youtube', handle: 'UIN Malang', color: 'bg-red-600' },
                    { icon: Linkedin, name: 'LinkedIn', handle: 'UIN Malang', color: 'bg-blue-700' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-soft transition-all duration-300"
                    >
                      <div className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{social.name}</div>
                        <div className="text-xs text-gray-500">{social.handle}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
