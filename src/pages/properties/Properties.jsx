import { useContext, useEffect, useState } from 'react'
import { CTA, PropertiesForm, PropertiesHeader, SearchAndFilters, SearchedProperty } from '../../components'
import { ThemeContext } from '../../contextApi'
import { useGetPropertiesListByFiltersQuery, useGetPropertiesListBySearchTermQuery } from '../../redux/RTKApis/propertiesApi'
import { searchedPropertyData } from '../../demoData/data'
import Loader from '../../components/loader/Loader'
import Alert from '../../components/alert/Alert'
const Properties = () => {
  const [sent, setSent] = useState(false)
  const [selectedSearch, setSelectedSearch] = useState('')
  const [area, setArea] = useState('Oxford')
  const [type, setType] = useState('')
  const [pricingRange, setPricingRange] = useState('')
  const [propertySize, setPropertySize] = useState('')
  const [status, setStatus] = useState('sale')
  const filters = { area, type, minimum_price: pricingRange.split('|')[0], maximum_price: pricingRange.split('|')[1], area_min: propertySize.split('|')[0], area_max: propertySize.split('|')[1], status }
  const { data: filterData, isFetching: isFetchingFilters } = useGetPropertiesListByFiltersQuery(filters)
  const { data: searchedData, isFetching: isFetchingSelectedSearch } = useGetPropertiesListBySearchTermQuery(selectedSearch)
  const { navBarHeight } = useContext(ThemeContext)
  const { title, description } = searchedPropertyData



  const handleChange = (ev, index) => {
    if (index === 0) {
      setArea(ev?.target.value)
    } else if (index === 1) {
      setType(ev?.target.value)
    } else if (index === 2) {
      setPricingRange(ev?.target.value)
    } else if (index === 3) {
      setPropertySize(ev?.target.value)
    } else if (index === 4) {
      setStatus(ev?.target.value)
    }
    setSelectedSearch('')
  }


  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])


  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
      {sent && <Alert content='Your data has been sent successfully' />}
        <PropertiesHeader />
        <SearchAndFilters handleChange={handleChange} setSelectedSearch={setSelectedSearch} />
        {isFetchingFilters || isFetchingSelectedSearch ? <Loader title={title} description={description} />
          : <SearchedProperty title={title} description={description} propertiesList={searchedData ? searchedData?.listing : filterData?.listing} />}
        <PropertiesForm setSent={setSent}/>
        <CTA />
      </div>
    </main>
  )
}

export default Properties