import React from 'react'
import { paragraph_classes } from '../../classes'
import { area, greyBathroom, greyBed, whiteLightning } from '../../assets'

const PropertyDetails = ({ content }) => {
  const { short_description, num_bathrooms, num_bedrooms, floor_area, bullet } = content
  const areaValue = floor_area ? `${floor_area.max_floor_area.value} Square Feet` : 'not Found'

  const removeHtmlTags = (html) => {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }


  return (
    <div className='property-details xxl:mt-30 mt-20 text-white grid md:grid-cols-2 grid-cols-1 xxl:gap-30 gap-20'>
      <div className='h-fit flex flex-col xxl:gap-50 lg:gap-40 gap-20 xxl:p-50 lg:p-40 p-20 border-1 border-grey-15 xxl:rounded-12 rounded-10'>
        <div className='flex flex-col xxl:gap-14 gap-10'>
          <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>Description</h3>
          <p className={`${paragraph_classes}`}>{removeHtmlTags(short_description)}</p>
        </div>
        <div className='flex flex-wrap xl:gap-y-0 lg:gap-y-10 gap-y-20 xxl:pt-20 lg:pt-16 pt-20 border-t-1 border-grey-15'>
          <div className='xl:flex-1 Mxl:w-[50%] xxl:pr-20 lg:pr-10 pr-20 flex flex-col xxl:gap-10 gap-8'>
            <p className={`${paragraph_classes} flex items-center gap-8`}>
              <img src={greyBed} alt="bed icon" />
              Bedrooms
            </p>
            <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>
              {num_bedrooms < 10 ? `0${num_bedrooms}` : num_bedrooms}
            </h3>
          </div>
          <div className='xl:flex-1 Mxl:w-[50%] xxl:px-20 xl:px-10 lg:pl-10 pl-20 flex flex-col xxl:gap-10 gap-8 border-l-1 border-grey-15'>
            <p className={`${paragraph_classes} flex items-center gap-8`}>
              <img src={greyBathroom} alt="Bathroom icon" />
              Bathrooms
            </p>
            <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>
              {num_bathrooms < 10 ? `0${num_bathrooms}` : num_bathrooms}
            </h3>
          </div>
          <div className='xl:flex-1 Mxl:w-full xxl:pl-20 xl:pl-10 Mxl:pt-10 Mmd:pt-20 flex flex-col xxl:gap-10 gap-8 xl:border-l-1 Mxl:border-t-1 border-grey-15'>
            <p className={`${paragraph_classes} flex items-center gap-8`}>
              <img src={area} alt="area icon" />
              Area
            </p>
            <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>
              {areaValue}
            </h3>
          </div>
        </div>
      </div>
      <div className='h-fit xxl:p-50 lg:p-40 p-20 rounded-12 border-1 border-grey-15'>
        <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>Key Features and Amenities</h3>
        <ul className='flex flex-col xxl:gap-30 lg:gap-20 gap-18 xxl:mt-50 lg:mt-40 mt-20'>
          {bullet?.map((item) => (
            <li className='flex items-center gap-10 xxl:py-18 lg:py-14 py-10 xxl:px-24 lg:px-16 px-12 border-l-1 border-purple-60 black-grey-gradient'>
              <img src={whiteLightning} alt="whiteLightning icon" />
              <span className={`${paragraph_classes}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PropertyDetails