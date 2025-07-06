"use client"

import CTASection from "@/components/cta-section"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/header-section"
import ServicesSection from "@/components/service-section"
import TestimonialsSection from "@/components/testimonial-section"
import WorksSection from "@/components/work-section"


export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <WorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
