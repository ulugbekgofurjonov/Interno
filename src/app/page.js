import { blogs } from '@/data/blogs'  // 1. Import qilish
import BlogsCard from '@/components/ui/BlogsCard'
import Projects from '@/components/sections/Projects'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Challenge from '@/components/sections/Challenge'
import Testimonials from '@/components/sections/Testimonials'
import Brands from '@/components/sections/Brands'
import StatsSection from '@/components/sections/StateSection'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services/>
        <Challenge/>
        <Testimonials/>
        <Brands/>
        <Projects/>
        <StatsSection/>
      </main>
    </div>

  )
}