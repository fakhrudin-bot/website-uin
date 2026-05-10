'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Grid3X3, Image as ImageIcon, Film, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { gallery } from '@/data/dummyData'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const categories = ['Semua', 'Kampus', 'Fasilitas', 'Olahraga', 'Budaya', 'Video']

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 })

  const filteredGallery = gallery.filter(
    (item) => activeCategory === 'Semua' || item.category === activeCategory || (activeCategory === 'Video' && item.type === 'video')
  )

  const openLightbox = (index: number) => setLightbox({ open: true, index })
  const closeLightbox = () => setLightbox({ open: false, index: 0 })
  const nextImage = () => setLightbox(prev => ({ ...prev, index: (prev.index + 1) % filteredGallery.length }))
  const prevImage = () => setLightbox(prev => ({ ...prev, index: (prev.index - 1 + filteredGallery.length) % filteredGallery.length }))

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
            Galeri Kampus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Dokumentasi visual keindahan kampus, kegiatan, dan fasilitas UIN Malang
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat
                    ? 'bg-uin-primary text-white shadow-glow'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {cat === 'Semua' && <Grid3X3 className="w-4 h-4" />}
                {cat === 'Video' && <Film className="w-4 h-4" />}
                {(cat !== 'Semua' && cat !== 'Video') && <ImageIcon className="w-4 h-4" />}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-square">
                    {item.type === 'video' ? (
  <video
    className="w-full h-full object-cover"
    muted
    loop
    autoPlay
  >
    <source src={item.video} type="video/mp4" />
  </video>
) : (
  <img
    src={'image' in item ? item.image : item.thumbnail}
    alt={item.title}
    className="w-full h-full object-cover"
  />
)}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-medium text-sm">{item.title}</h3>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && filteredGallery[lightbox.index] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-colors z-10 bg-white/10 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-colors z-10 bg-white/10 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
             {filteredGallery[lightbox.index].type === 'video' ? (
  <video
    controls
    autoPlay
    className="max-h-[70vh] w-auto rounded-lg"
  >
    <source
      src={filteredGallery[lightbox.index].video}
      type="video/mp4"
    />
  </video>
) : (
  <img
    src={
      filteredGallery[lightbox.index].image ||
      filteredGallery[lightbox.index].thumbnail
    }
    alt={filteredGallery[lightbox.index].title}
    className="max-h-[70vh] w-auto rounded-lg"
  />
)}
              <div className="text-center mt-4">
                <h3 className="text-white font-medium text-lg">{filteredGallery[lightbox.index].title}</h3>
                <p className="text-white/60 text-sm">{filteredGallery[lightbox.index].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
