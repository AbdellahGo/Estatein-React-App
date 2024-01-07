import React from 'react'
import { container, margin_top, margin_top2, padding_x, paragraph_classes } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { pricingDetailsData } from '../../demoData/data'
import PricingDetailsBox from '../pricingDetailsBox/PricingDetailsBox'

const PricingDetails = ({propertyPrice}) => {
    const {title, description, note, additionalFees, monthlyCosts, totalInitialCosts, monthlyExpenses} = pricingDetailsData
  return (
    <div className={`pricing-details ${margin_top} ${container} ${padding_x} text-white`}>
        <SectionHeader title={title} description={description} />
        <div className={`${margin_top2} flex sm:flex-row flex-col sm:items-center xxl:py-30 lg:py-20 py-24 xxl:px-50 lg:px-40 px-20 border-1 border-grey-15 xxl:rounded-12 rounded-8 bg-grey-10`}>
            <span className='xxl:text-24 lg:text-20 text-18 font-semibold xxl:pr-20 lg:pr-16 sm:pr-10 Msm:pb-10'>Note</span>
            <p className={`${paragraph_classes} xxl:pl-20 lg:pl-16 sm:pl-10 Msm:pt-10 sm:border-l-1 Msm:border-t-1 border-grey-15`}>{note}</p>
        </div>
        <div className='xxl:mt-50 lg:mt-40 mt-30 flex md:flex-row flex-col xxl:gap-50 lg:gap-40 gap-20'>
            <div className='md:w-[15%] w-full flex flex-col gap-6'>
                <span className={`${paragraph_classes}`}>Listing Price</span>
                <h3 className='xxl:text-40 lg:text-30 text-24 font-semibold'>${Number(propertyPrice).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 3 })}</h3>
            </div>
            <div className='md:w-[85%] w-full flex flex-col xxl:gap-50 lg:gap-40 gap-20'>
                <PricingDetailsBox content={additionalFees}/>
                <PricingDetailsBox content={monthlyCosts}/>
                <PricingDetailsBox content={totalInitialCosts}/>
                <PricingDetailsBox content={monthlyExpenses}/>
            </div>
        </div>
    </div>
  )
}

export default PricingDetails