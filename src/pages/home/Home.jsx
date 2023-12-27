import React, { useContext } from 'react'
import { HeroSection, Properties, Testimonials, FAQ, CTA } from '../../components'
import { ThemeContext } from '../../contextApi'

const Home = () => {
  const { navBarHeight } = useContext(ThemeContext)

  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        <HeroSection />
        <Properties />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </main>
  )
}

export default Home