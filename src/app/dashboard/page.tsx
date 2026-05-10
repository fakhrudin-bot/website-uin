'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, Calendar, BookOpen, Bell, GraduationCap, 
  Clock, MapPin, Mail, Phone, ChevronRight, Star,
  TrendingUp, Award, FileText
} from 'lucide-react'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { dashboardData } from '@/data/dummyData'

const menuItems = [
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'schedule', label: 'Jadwal', icon: Calendar },
  { id: 'grades', label: 'Nilai', icon: Star },
  { id: 'announcements', label: 'Pengumuman', icon: Bell },
  { id: 'courses', label: 'Mata Kuliah', icon: BookOpen },
]

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState('profile')
  const { student, schedule, grades, announcements } = dashboardData

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden sticky top-24">
              {/* Profile Summary */}
              <div className="p-6 bg-gradient-to-br from-uin-primary to-uin-800 text-white">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/20 mx-auto mb-4">
  <img
    src={student.photo}
    alt={student.name}
    className="w-full h-full object-cover object-top scale-110"
  />
</div>
                <h3 className="text-center font-bold">{student.name}</h3>
                <p className="text-center text-sm text-white/80">{student.nim}</p>
                <p className="text-center text-xs text-white/60 mt-1">{student.program}</p>
              </div>

              {/* Menu */}
              <nav className="p-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 mb-1 ${
                      activeMenu === item.id
                        ? 'bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile */}
              {activeMenu === 'profile' && (
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profil Mahasiswa</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <User className="w-5 h-5 text-uin-primary" />
                          <div>
                            <p className="text-xs text-gray-500">Nama Lengkap</p>
                            <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <GraduationCap className="w-5 h-5 text-uin-primary" />
                          <div>
                            <p className="text-xs text-gray-500">NIM</p>
                            <p className="font-medium text-gray-900 dark:text-white">{student.nim}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <BookOpen className="w-5 h-5 text-uin-primary" />
                          <div>
                            <p className="text-xs text-gray-500">Program Studi</p>
                            <p className="font-medium text-gray-900 dark:text-white">{student.program}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <Mail className="w-5 h-5 text-uin-primary" />
                          <div>
                            <p className="text-xs text-gray-500">Email</p>
                            <p className="font-medium text-gray-900 dark:text-white">{student.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <Phone className="w-5 h-5 text-uin-primary" />
                          <div>
                            <p className="text-xs text-gray-500">Telepon</p>
                            <p className="font-medium text-gray-900 dark:text-white">{student.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <MapPin className="w-5 h-5 text-uin-primary" />
                          <div>
                            <p className="text-xs text-gray-500">Alamat</p>
                            <p className="font-medium text-gray-900 dark:text-white">{student.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GPA Card */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-uin-primary to-uin-800 rounded-2xl p-6 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-uin-accent" />
                        <span className="text-sm text-white/80">IPK</span>
                      </div>
                      <div className="text-4xl font-bold">{student.gpa}</div>
                      <div className="text-sm text-white/60 mt-1">Cum Laude Potential</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-uin-primary" />
                        <span className="text-sm text-gray-500">Semester</span>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">6</div>
                      <div className="text-sm text-gray-500 mt-1">Semester Aktif</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-6 h-6 text-uin-primary" />
                        <span className="text-sm text-gray-500">SKS</span>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">100</div>
                      <div className="text-sm text-gray-500 mt-1">Total SKS Diambil</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Schedule */}
              {activeMenu === 'schedule' && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Jadwal Kuliah</h2>
                  <div className="space-y-6">
                    {schedule.map((day) => (
                      <div key={day.day}>
                        <h3 className="font-bold text-uin-primary dark:text-uin-400 mb-3 flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          {day.day}
                        </h3>
                        <div className="space-y-3">
                          {day.courses.map((course, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-soft transition-all">
                              <div className="w-14 text-center">
                                <Clock className="w-5 h-5 text-uin-primary mx-auto mb-1" />
                                <span className="text-xs text-gray-500">{course.time}</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white">{course.course}</h4>
                                <p className="text-sm text-gray-500">{course.lecturer}</p>
                              </div>
                              <div className="text-right">
                                <span className="px-3 py-1 bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400 text-xs rounded-lg">
                                  {course.room}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grades */}
              {activeMenu === 'grades' && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nilai Semester</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">Mata Kuliah</th>
                          <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">SKS</th>
                          <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">UTS</th>
                          <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">UAS</th>
                          <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">Tugas</th>
                          <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">Nilai</th>
                          <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">Huruf</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grades.map((grade, i) => (
                          <tr key={i} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="py-4 px-4 text-sm text-gray-900 dark:text-white font-medium">{grade.course}</td>
                            <td className="py-4 px-4 text-sm text-center text-gray-600 dark:text-gray-400">{grade.sks}</td>
                            <td className="py-4 px-4 text-sm text-center text-gray-600 dark:text-gray-400">{grade.uts}</td>
                            <td className="py-4 px-4 text-sm text-center text-gray-600 dark:text-gray-400">{grade.uas}</td>
                            <td className="py-4 px-4 text-sm text-center text-gray-600 dark:text-gray-400">{grade.tugas}</td>
                            <td className="py-4 px-4 text-sm text-center font-bold text-gray-900 dark:text-white">{grade.final}</td>
                            <td className="py-4 px-4 text-center">
                              <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                                grade.grade === 'A' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                grade.grade === 'A-' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                              }`}>
                                {grade.grade}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Announcements */}
              {activeMenu === 'announcements' && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pengumuman</h2>
                  <div className="space-y-4">
                    {announcements.map((item) => (
                      <div
                        key={item.id}
                        className={`p-5 rounded-xl border-l-4 ${
                          item.priority === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-900/10' :
                          item.priority === 'medium' ? 'border-l-uin-primary bg-uin-50/50 dark:bg-uin-900/10' :
                          'border-l-gray-400 bg-gray-50 dark:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            item.priority === 'high' ? 'bg-red-100 text-red-700' :
                            item.priority === 'medium' ? 'bg-uin-100 text-uin-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {item.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.content}</p>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Courses */}
              {activeMenu === 'courses' && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mata Kuliah Semester Ini</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {grades.map((grade, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-soft transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-medium text-gray-900 dark:text-white">{grade.course}</h4>
                          <span className="px-2 py-1 bg-uin-100 dark:bg-uin-900/30 text-uin-primary dark:text-uin-400 text-xs rounded font-medium">
                            {grade.sks} SKS
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                          <div 
                            className="bg-uin-primary h-2 rounded-full transition-all"
                            style={{ width: `${(grade.final / 100) * 100}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Progress</span>
                          <span>{grade.final}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
