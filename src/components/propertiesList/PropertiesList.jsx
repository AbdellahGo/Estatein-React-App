import React, { useState } from 'react'
import Button from '../button/Button'
import { paragraph_classes } from '../../classes'
import { bathroom, bed, villa } from '../../assets'
import { useInView } from 'react-intersection-observer'

const PropertiesList = ({ content, propertiesContainer }) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [isReadMore, setIsReadMore] = useState(null)

  const removeHtmlTags = (html) => {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  return (
    <div ref={propertiesContainer}
      className='properties grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-30 md:gap-20 gap-30'>
      {content?.map(({ listing_id, num_bedrooms, num_bathrooms, short_description, property_type, title, price, original_image }, i) => (
        <div ref={ref} key={listing_id} className={`${inView ? `slide-boxes slide-box-${i + 1}` : ''} xxl:p-40 xl:p-30 md:p-20 p-24 flex flex-col  xxl:gap-30 md:gap-20 gap-16 rounded-12 border-1 border-grey-15`}>
          <img src={original_image[0]} alt="property image" className='text-white rounded-10 xxl:h-[318px] xl::h-[255px] md:h-[200px] h-[373px] object-cover' />
          <div className={`content flex flex-col ${!isReadMore ? 'justify-between' : ''} flex-1 xxl:gap-30 md:gap-24 gap-20`}>
            <h3 className='xxl:text-24 md:text-20 text-18 text-white font-semibold'>{title}</h3>
            <p className={`${paragraph_classes}`}>{short_description ? isReadMore === listing_id ? removeHtmlTags(short_description) : `${removeHtmlTags(short_description)?.substring(0, 74)}...` : 'not found'}
              <button className='text-white' style={{ textDecoration: 'underline #999' }}
                onClick={() => setIsReadMore(isReadMore === listing_id ? null : listing_id)}>Read More</button>
            </p>
            <div className='flex gap-10 flex-wrap '>
              <div className='flex justify-center gap-8 items-center py-8 px-14 border-1 border-grey-15 bg-grey-10 rounded-28 xxl:text-18 
                      text-14 text-white font-medium flex-auto'>
                <img src={bed} alt='bed icon' />
                <span>{num_bedrooms ? num_bedrooms : 0}</span>
              </div>
              <div className='flex justify-center gap-8 items-center py-8 px-14 border-1 border-grey-15 bg-grey-10 rounded-28 xxl:text-18 
                      text-14 text-white font-medium flex-auto'>
                <img src={bathroom} alt='bathroom icon' />
                <span>{num_bathrooms ? num_bathrooms : 0}</span>
              </div>
              <div className='flex justify-center gap-8 items-center py-8 px-14 border-1 border-grey-15 bg-grey-10 rounded-28 xxl:text-18 
                      text-14 text-white font-medium flex-auto'>
                <img src={villa} alt='villa icon' />
                <span>{property_type ? property_type : 'villa'}</span>
              </div>
            </div>
            <div className='flex xl:flex-row md:flex-col Msm:flex-wrap justify-between xxl:gap-50 xl:gap-35 md:gap-20 Mmd:gap-30'>
              <div className='xxl:text-18 text-14 text-grey-60 font-medium Msm:w-full'>Price
                <span className='block xxl:text-24 md:text-20 text-18 font-semibold text-white'>${Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 3 })}</span>
              </div>
              <Button link={`/property-details/${listing_id}`} content='View Property Details' styles='text-white Msm:w-full text-center bg-purple-60 xxl:px-[41px] xl:px-[37px] px-[20px]' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertiesList