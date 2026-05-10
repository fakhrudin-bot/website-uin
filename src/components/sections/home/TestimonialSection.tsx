'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/dummyData'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Testimoni"
          title="Apa Kata Mereka?"
          description="Pengalaman dan cerita inspiratif dari mahasiswa dan alumni UIN Malang"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-premium border border-gray-100 dark:border-gray-800 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-uin-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-uin-50 dark:ring-uin-900">
                  <ImagePlaceholder className="w-full h-full" label={testimonials[current].name} />
                </div>

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-uin-accent text-uin-accent" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonials[current].message}"
                </p>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[current].name}</h4>
                  <p className="text-sm text-uin-primary dark:text-uin-400">
                    {testimonials[current].role} • Angkatan {testimonials[current].year}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-uin-50 dark:hover:bg-uin-900/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-uin-primary w-8' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-uin-50 dark:hover:bg-uin-900/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
