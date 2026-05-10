'use client'

import { cn } from '@/lib/utils'
import { GraduationCap, Image } from 'lucide-react'

interface ImagePlaceholderProps {
  className?: string
  icon?: 'campus' | 'image'
  label?: string
}

export default function ImagePlaceholder({ 
  className, 
  icon = 'campus',
  label 
}: ImagePlaceholderProps) {
  return (
    <div className={cn(
      'bg-gradient-to-br from-uin-50 to-uin-100 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center gap-3',
      className
    )}>
      {icon === 'campus' ? (
        <GraduationCap className="w-12 h-12 text-uin-primary/40 dark:text-uin-400/40" />
      ) : (
        <Image className="w-12 h-12 text-uin-primary/40 dark:text-uin-400/40" />
      )}
      {label && (
        <span className="text-sm text-uin-primary/60 dark:text-uin-400/60 font-medium">{label}</span>
      )}
    </div>
  )
}
