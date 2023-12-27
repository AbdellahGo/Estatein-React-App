import React, { useState } from 'react'
import Button from '../button/Button'
import { paragraph_classes } from '../../classes'

const PropertiesList = ({ content, propertiesContainer }) => {

  const [isReadMore, setIsReadMore] = useState(null)
  return (
    <div ref={propertiesContainer}
      className='properties grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-30 md:gap-20 gap-30'>
      {content.map(({ id, propertyImages, propertyTitle, propertyDescription, features, propertyPrice }) => (
        <div key={id} className='xxl:p-40 xl:p-30 md:p-20 p-24 flex flex-col  xxl:gap-30 md:gap-20 gap-16 rounded-12 border-1 border-grey-15'>
          <img src={propertyImages[1]} alt="property image" className='rounded-10 xxl:h-[318px] xl::h-[255px] md:h-[200px] h-[373px] object-cover' />
          <div className={`content flex flex-col ${!isReadMore ? 'justify-between' : ''} flex-1 xxl:gap-30 md:gap-24 gap-20`}>
            <h3 className='xxl:text-24 md:text-20 text-18 text-white font-semibold'>{id}{propertyTitle}</h3>
            <p className={`${paragraph_classes}`}>{isReadMore === id ? propertyDescription : `${propertyDescription.substring(0, 74)}...`}<button className='text-white' style={{ textDecoration: 'underline #999' }}
              onClick={() => setIsReadMore(isReadMore === id ? null : id)}>Read More</button></p>
            <div className='flex gap-10 flex-wrap '>
              {features.map(({ id, icon, content }) => (
                <div key={id} className='flex gap-4 justify-center items-center py-8 px-14 border-1 border-grey-15 bg-grey-10 rounded-28 xxl:text-18 
                    text-14 text-white font-medium flex-auto'>
                  <img src={icon} alt={content} />
                  {content}
                </div>
              ))}
            </div>
            <div className='flex xl:flex-row md:flex-col Msm:flex-wrap justify-between xxl:gap-50 xl:gap-40 md:gap-20 Mmd:gap-30'>
              <div className='xxl:text-18 text-14 text-grey-60 font-medium Msm:w-full'>Price
                <span className='block xxl:text-24 md:text-20 text-18 font-semibold text-white'>{propertyPrice}</span>
              </div>
              <Button link={`/property-details/${id}`} content='View Property Details' styles='text-white Msm:w-full text-center bg-purple-60 xxl:px-[41px] xl:px-[37px] px-[20px]' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertiesList