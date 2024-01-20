import { useContext, useEffect } from 'react'
import { HeroSection, Properties, Testimonials, FAQ, CTA } from '../../components'
import { ThemeContext } from '../../contextApi'
import { propertiesDetails } from '../../demoData/data'
import { useGetPropertiesListQuery } from '../../redux/RTKApis/propertiesApi'
import Loader from '../../components/loader/Loader'

const Home = () => {
  const { title, description, link, linkContent } = propertiesDetails
  const { navBarHeight } = useContext(ThemeContext)
  const { data, isLoading } = useGetPropertiesListQuery()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        <HeroSection />
        {isLoading ? <Loader title={title} description={description} link={link} linkContent={linkContent}/>
          : <Properties title={title} description={description} propertiesList={data?.listing} link={link} linkContent={linkContent} />}
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </main>
  )
}

export default Home