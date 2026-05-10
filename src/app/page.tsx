import HeroSection from '@/components/sections/home/HeroSection'
import RectorWelcome from '@/components/sections/home/RectorWelcome'
import StatsSection from '@/components/sections/home/StatsSection'
import NewsSection from '@/components/sections/home/NewsSection'
import FacultySection from '@/components/sections/home/FacultySection'
import AchievementSection from '@/components/sections/home/AchievementSection'
import EventsSection from '@/components/sections/home/EventsSection'
import TestimonialSection from '@/components/sections/home/TestimonialSection'
import CTASection from '@/components/sections/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RectorWelcome />
      <StatsSection />
      <FacultySection />
      <NewsSection />
      <AchievementSection />
      <EventsSection />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
