'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export default function AnimatedCard({ 
  children, 
  className, 
  delay = 0,
  hover = true 
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden',
        hover && 'hover:shadow-premium hover:-translate-y-1 transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
