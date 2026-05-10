'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatsCounterProps {
  value: string
  label: string
  description: string
  icon: React.ReactNode
  delay?: number
}

export default function StatsCounter({ value, label, description, icon, delay = 0 }: StatsCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, numericValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-uin-primary to-uin-700 rounded-xl flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-semibold text-uin-primary dark:text-uin-400 mb-1">{label}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{description}</div>
    </motion.div>
  )
}
