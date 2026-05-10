'use client'

import { Award, Users, Building2, GraduationCap, BookOpen, Globe } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import StatsCounter from '@/components/ui/StatsCounter'
import { achievements } from '@/data/dummyData'

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
}

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Statistik Kampus"
          title="UIN Malang dalam Angka"
          description="Data dan pencapaian yang menunjukkan keunggulan kampus kami"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <StatsCounter
              key={item.id}
              value={item.value}
              label={item.title}
              description={item.description}
              icon={iconMap[item.icon] || <Award className="w-6 h-6" />}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
