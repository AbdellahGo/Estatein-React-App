import { useContext, useEffect } from 'react'
import { HeroSection, Properties, Testimonials, FAQ, CTA } from '../../components'
import { ThemeContext } from '../../contextApi'

const Home = () => {
  const { navBarHeight } = useContext(ThemeContext)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

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