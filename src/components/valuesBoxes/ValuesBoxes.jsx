import React from 'react'
import { paragraph_classes } from '../../classes'

const ValuesBoxes = ({ content }) => {
  return (
    <div className='rounded-12 border-1 border-grey-15 xxl:p-60 lg:p-50 p-24 bg-grey-08'
      style={{ boxShadow: '0px 0px 0px 10px #191919' }}>
      {content.map((_, i) => (
        <div key={i} className={`grid md:grid-cols-2 grid-cols-1 
          ${i === 0 ? 'xxl:pb-30 md:pb-24 md:border-b-1 border-grey-15' : 'xxl:pt-30 md:pt-24'}`}>
          {content[i].map(({ id, title, desc, icon }) => (
            <div key={id}
              className={`
                  ${id === 1 || id === 3 ? 'xxl:pr-30 md:pr-24 md:border-r-1 border-grey-15' : 'xxl:pl-30 md:pl-24'}
                  ${id === 2 || id === 3 ? 'Mmd:py-20 Mmd:border-t-1 border-grey-15' : 'Mmd:border-t-1 border-grey-15 Mmd:pt-20'}
                  ${id === 1 ? 'Mmd:border-none Mmd:pt-0 Mmd:mb-20'  : ''}
                `}>
              <div className='flex items-center xxl:gap-14 lg:gap-10 gap-8'>
                <div className='xxl:p-20 lg:p-16 p-14 border-purple-60 border-1 rounded-full bg-grey-08'>
                  <img src={icon} alt="icon" className='xxl:w-[34px] lg:w-28 w-24'/>
                </div>
                <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>{title}</h3>
              </div>
              <p className={`${paragraph_classes} xxl:mt-20 lg:mt-16 mt-14 `}>{desc}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ValuesBoxes