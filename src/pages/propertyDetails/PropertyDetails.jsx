import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contextApi'
import { CTA, FAQ, PropertyContactForm, PropertyDetailsHeader, PricingDetails } from '../../components'
import { useGetPropertyPyIdQuery } from '../../redux/RTKApis/propertiesApi'
import { useParams } from 'react-router-dom'
import Alert from '../../components/alert/Alert'


const PropertyDetails = () => {
  const { id } = useParams()
  const { navBarHeight } = useContext(ThemeContext)
  const { data, isLoading } = useGetPropertyPyIdQuery(id)
  const [send, setSend] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (isLoading) return <p className='p-20 bg-purple-60 text-white'>Loading...</p>


  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        {send && <Alert content='Your data has been sent successfully' />}
        <PropertyDetailsHeader propertyDetails={data?.listing[0]} />
        <PropertyContactForm selectedProperty={`${data?.listing[0].title}, ${data?.listing[0].displayable_address}`} setSend={setSend}/>
        <PricingDetails propertyPrice={data?.listing[0]?.price} />
        <FAQ />
        <CTA />
      </div>
    </main>
  )
}

export default PropertyDetails