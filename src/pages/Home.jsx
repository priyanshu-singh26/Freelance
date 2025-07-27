import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../components/Navbar'
import AboutWebDesign from '../sections/About'
import Services from '../sections/Services'
import USP from '../sections/Usp'
import InfoWebDesign from '../sections/Info'
import Adds from '../components/Adds'
import TechPartnersSection from '../sections/Tech1'
import TechEcommerceSection from '../sections/Tech2'
import AdsTechnologiesSection from '../components/Ads2'
import OurCaseStudies from '../sections/OurWork'
import OurClientTestimonials from '../sections/OurClient'
import FAQSection from '../sections/Faq'
import BlogPostsPage from '../sections/Blog'
import ContactFormSection from '../sections/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutWebDesign />
        <Services />
        <USP />
        <InfoWebDesign />
        <Adds />
        <TechPartnersSection />
        <TechEcommerceSection />
        <AdsTechnologiesSection />
        <OurCaseStudies />
        <OurClientTestimonials />
        <FAQSection />
        <BlogPostsPage />
        <ContactFormSection />
        <Footer />
    </div>
  )
}

export default Home