import React from 'react'
import { container, header_button_styles, padding_x } from '../../classes'
import { boxesLift, boxesRight } from '../../assets'
import SectionHeader from '../sectionHeader/SectionHeader'
import { CTADetails } from '../../demoData/data'
const CTA = () => {
  const { title, description } = CTADetails
  return (
    <div className={`xxl:mt-[96px] xl:mt-[72px] mt-80 ${container} ${padding_x} text-white`}>
      <div className='border-y-1 border-grey-15 xxl:py-[100px] md:py-[60px] py-[50px] relative overflow-hidden'>
        <img src={boxesLift} alt="boxesLift" className='absolute lg:bottom-0 Mlg:top-0 left-0 z-[-1]' />
        <img src={boxesRight} alt="boxesRight" className='absolute bottom-0  right-0 z-[-1]' />
        <div className='z-50'>
          <SectionHeader cta link='/properties' linkContent='Explore Properties' title={title} description={description} buttonStyles={`xxl:w-[23%] xl:w-[25%] lg:w-[54%] md:w-[100%] text-center w-[80%] bg-purple-60`} />
        </div>
      </div>
    </div>
  )
}

export default CTA