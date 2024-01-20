import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contextApi'
import { CTA, FAQ, PropertyContactForm, PropertyDetailsHeader, PricingDetails } from '../../components'
import { useGetPropertyPyIdQuery } from '../../redux/RTKApis/propertiesApi'
import { useParams } from 'react-router-dom'
import Alert from '../../components/alert/Alert'
import Loader from '../../components/loader/Loader'


const PropertyDetails = () => {
  const { id } = useParams()
  const { navBarHeight } = useContext(ThemeContext)
  const { data, isLoading } = useGetPropertyPyIdQuery(id)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])



  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        {sent && <Alert content='Your data has been sent successfully' />}
        {isLoading ? <Loader noContent/> : <PropertyDetailsHeader propertyDetails={data?.listing[0]} />}
        <PropertyContactForm selectedProperty={`${data?.listing[0].title}, ${data?.listing[0].displayable_address}`} setSent={setSent} />
        <PricingDetails propertyPrice={data?.listing[0]?.price} />
        <FAQ />
        <CTA />
      </div>
    </main>
  )
}

export default PropertyDetails