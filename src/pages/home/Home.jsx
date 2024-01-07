import { useContext, useEffect } from 'react'
import { HeroSection, Properties, Testimonials, FAQ, CTA } from '../../components'
import { ThemeContext } from '../../contextApi'
import { propertiesDetails } from '../../demoData/data'
import { useGetPropertiesListQuery } from '../../redux/RTKApis/propertiesApi'

const Home = () => {
  const { title, description } = propertiesDetails
  const { navBarHeight } = useContext(ThemeContext)
  const { data, isLoading } = useGetPropertiesListQuery()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        <HeroSection />
        {isLoading ? 'Loading...' : <Properties title={title} description={description} propertiesList={data?.listing} />}
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </main>
  )
}

export default Home