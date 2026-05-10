'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, EyeOff, GraduationCap, Lock, Mail, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.email) newErrors.email = 'Email wajib diisi'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Format email tidak valid'
    if (!formData.password) newErrors.password = 'Password wajib diisi'
    else if (formData.password.length < 6) newErrors.password = 'Password minimal 6 karakter'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Handle login
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-uin-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md mx-4"
      >
        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-glass">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-uin-primary to-uin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Selamat Datang</h1>
            <p className="text-white/60 text-sm mt-1">Masuk ke akun UIN Malang Anda</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-white/80 mb-2">Email / NIM</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-uin-accent focus:border-transparent transition-all ${
                    errors.email ? 'border-red-400' : 'border-white/20'
                  }`}
                  placeholder="email@uin-malang.ac.id"
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`w-full pl-12 pr-12 py-3.5 bg-white/10 border rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-uin-accent focus:border-transparent transition-all ${
                    errors.password ? 'border-red-400' : 'border-white/20'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                <input type="checkbox" className="rounded border-white/20 bg-white/10 text-uin-primary" />
                Ingat saya
              </label>
              <Link href="/forgot-password" className="text-uin-accent hover:text-white transition-colors">
                Lupa password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-premium"
            >
              Masuk
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Belum punya akun?{' '}
              <Link href="/register" className="text-uin-accent hover:text-white font-medium transition-colors">
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
