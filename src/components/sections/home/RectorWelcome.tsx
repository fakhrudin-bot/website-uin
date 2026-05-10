'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Quote } from 'lucide-react'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function RectorWelcome() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-uin-primary/10 to-uin-accent/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img 
  src="/images/rektor.webp" 
  alt="Prof. Dr. Hj. Ilfi Nur Diana, M.Si. - Rektor UIN Malang"
  className="aspect-[3/4] w-full object-cover"
/>
              </div>

              {/* Info Card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-premium border border-gray-100 dark:border-gray-800 max-w-xs">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Prof. Dr. Hj. Ilfi Nur Diana, M.Si.</h4>
                <p className="text-sm text-uin-primary dark:text-uin-400 font-medium">Rektor UIN Malang</p>
                <p className="text-xs text-gray-500 mt-2">Periode 2022 - 2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400 rounded-full text-sm font-medium mb-6">
              Sambutan Rektor
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Selamat Datang di{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uin-primary to-uin-accent">
                UIN Malang
              </span>
            </h2>

            <div className="relative mb-6">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-uin-primary/20" />
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed pl-6">
                UIN Maulana Malik Ibrahim Malang berkomitmen untuk mencetak lulusan yang unggul, 
                berkarakter, dan berwawasan global. Kami mengintegrasikan nilai-nilai Islam dengan 
                ilmu pengetahuan modern untuk membangun peradaban yang lebih baik.
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Dengan fasilitas modern, dosen berkualitas, dan kurikulum yang relevan dengan 
              perkembangan zaman, kami siap membimbing generasi muda Indonesia menjadi pemimpin 
              masa depan yang berlandaskan nilai-nilai keislaman.
            </p>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-uin-primary to-transparent" />
              <span className="text-sm text-gray-500 italic">"Mencetak Ulul Albab untuk Peradaban"</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
