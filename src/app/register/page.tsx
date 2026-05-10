'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, EyeOff, GraduationCap, Lock, Mail, User, ArrowRight, CheckCircle } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nim: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Nama wajib diisi'
      if (!formData.email) newErrors.email = 'Email wajib diisi'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Format email tidak valid'
      if (!formData.nim) newErrors.nim = 'NIM wajib diisi'
    } else {
      if (!formData.password) newErrors.password = 'Password wajib diisi'
      else if (formData.password.length < 6) newErrors.password = 'Password minimal 6 karakter'
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Password tidak cocok'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) setStep(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Handle registration
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-uin-primary via-uin-800 to-uin-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-uin-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md mx-4"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-glass">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-uin-primary to-uin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Buat Akun Baru</h1>
            <p className="text-white/60 text-sm mt-1">Daftar untuk mengakses layanan UIN Malang</p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-2 mb-8">
            <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-uin-accent' : 'bg-white/20'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 1 ? 'bg-uin-accent text-white' : 'bg-white/20 text-white/60'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-uin-accent' : 'bg-white/20'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 2 ? 'bg-uin-accent text-white' : 'bg-white/20 text-white/60'
            }`}>
              2
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm text-white/80 mb-2">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-uin-accent focus:border-transparent ${errors.name ? 'border-red-400' : 'border-white/20'}`}
                      placeholder="Nama lengkap Anda"
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-white/80 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-uin-accent focus:border-transparent ${errors.email ? 'border-red-400' : 'border-white/20'}`}
                      placeholder="email@uin-malang.ac.id"
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-white/80 mb-2">NIM</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      value={formData.nim}
                      onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-uin-accent focus:border-transparent ${errors.nim ? 'border-red-400' : 'border-white/20'}`}
                      placeholder="210202600001"
                    />
                  </div>
                  {errors.nim && <p className="text-red-400 text-xs mt-1">{errors.nim}</p>}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full py-4 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-premium"
                >
                  Lanjutkan
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm text-white/80 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`w-full pl-12 pr-12 py-3.5 bg-white/10 border rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-uin-accent focus:border-transparent ${errors.password ? 'border-red-400' : 'border-white/20'}`}
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

                <div>
                  <label className="block text-sm text-white/80 mb-2">Konfirmasi Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-uin-accent focus:border-transparent ${errors.confirmPassword ? 'border-red-400' : 'border-white/20'}`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
                  >
                    Kembali
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-white text-uin-primary rounded-xl font-bold hover:bg-uin-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-premium"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Daftar
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Sudah punya akun?{' '}
              <Link href="/login" className="text-uin-accent hover:text-white font-medium transition-colors">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
