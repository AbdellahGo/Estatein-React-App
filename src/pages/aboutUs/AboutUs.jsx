import { useContext, useEffect, useState } from 'react'
import {OurJourney ,CTA, OurValues, OurAchievements, HowItWorks, OurTeam, OurClients } from '../../components'
import { ThemeContext } from '../../contextApi'
import Alert from '../../components/alert/Alert'

const AboutUs = () => {
  const { navBarHeight } = useContext(ThemeContext)
  const [sendMessage, setSendMessage] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  
  return (
    <main>
      <div style={{ paddingTop: `${navBarHeight}px` }}>
        {sendMessage && <Alert content='Then send your message successfully'/>}
        <OurJourney/>
        <OurValues/>
        <OurAchievements/>
        <HowItWorks/>
        <OurTeam setSendMessage={setSendMessage}/>
        <OurClients/>
        <CTA />
      </div>
    </main>
  )
}

export default AboutUs