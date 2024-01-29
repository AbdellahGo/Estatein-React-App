import { useContext, useEffect } from 'react'
import { HeroSection, Properties, Testimonials, FAQ, CTA, Error } from '../../components'
import { ThemeContext } from '../../contextApi'
import { propertiesDetails } from '../../demoData/data'
import { useGetPropertiesListQuery } from '../../redux/RTKApis/propertiesApi'
import Loader from '../../components/loader/Loader'

const Home = () => {
  const { title, description, link, linkContent } = propertiesDetails
  const { navBarHeight } = useContext(ThemeContext)
  const { data, isLoading, error } = useGetPropertiesListQuery()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        <HeroSection />
        {error ? <Error content='Sorry, the number of Requests for this month has ended' title={title} description={description} link={link} linkContent={linkContent}/>
          : (
            isLoading ? <Loader title={title} description={description} link={link} linkContent={linkContent} />
              : <Properties title={title} description={description} propertiesList={data?.listing} link={link} linkContent={linkContent} />
          )}
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </main>
  )
}

export default Home
// Sorry, the number of Requests for this month has ended