import { useContext, useEffect } from 'react'
import { CTA, HeaderSection } from '../../components'
import { ThemeContext } from '../../contextApi'
import { servicesHeaderSectionData } from '../../demoData/data'

const Services = () => {
  const { navBarHeight } = useContext(ThemeContext)
  const { title, description, id, servicesList } = servicesHeaderSectionData

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        <HeaderSection title={title} description={description} id={id} content={servicesList} />
        <CTA />
      </div>
    </main>
  )
}

export default Services