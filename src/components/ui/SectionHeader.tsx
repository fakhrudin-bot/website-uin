'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  align = 'center',
  light = false 
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400 rounded-full text-sm font-medium mb-4">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
          {description}
        </p>
      )}
      <div className={`mt-6 flex ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className="w-20 h-1 bg-gradient-to-r from-uin-primary to-uin-accent rounded-full" />
      </div>
    </motion.div>
  )
}
