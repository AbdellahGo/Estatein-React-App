import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contextApi'
import { ContactHeader, OurOffices, CTA, EstateinsWorld, ContactForm } from '../../components'
import Alert from '../../components/alert/Alert'


const ContactUs = () => {
  const { navBarHeight } = useContext(ThemeContext)
  const [connect, setConnect] = useState(false)
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        {connect && <Alert content='Your data has been sent successfully' />}
        <ContactHeader />
        <ContactForm setConnect={setConnect} />
        <OurOffices />
        <EstateinsWorld />
        <CTA />
      </div>
    </main>
  )
}

export default ContactUs