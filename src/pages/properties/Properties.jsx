import { useContext, useEffect } from 'react'
import { CTA, PropertiesHeader, SearchAndFilters } from '../../components'
import { ThemeContext } from '../../contextApi'

const Properties = () => {
  const { navBarHeight } = useContext(ThemeContext)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        <PropertiesHeader />
        <SearchAndFilters/>
        <CTA />
      </div>
    </main>
  )
}

export default Properties