'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon,
}: GradientButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 active:scale-95'

  const variants = {
    primary: 'bg-gradient-to-r from-uin-primary to-uin-700 text-white hover:shadow-glow hover:from-uin-800 hover:to-uin-900',
    secondary: 'bg-gradient-to-r from-uin-accent to-gold-600 text-white hover:shadow-premium',
    outline: 'border-2 border-uin-primary text-uin-primary hover:bg-uin-primary hover:text-white dark:border-uin-400 dark:text-uin-400',
    ghost: 'text-uin-primary dark:text-uin-400 hover:bg-uin-50 dark:hover:bg-uin-900/50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  )
}
