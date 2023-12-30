import React from 'react'
import { paragraph_classes } from '../../classes.js'
import { stars } from '../../assets'
import Button from '../button/Button.jsx'
const SectionHeader = ({cta,noStars,  link, linkContent, title, description, buttonStyles }) => {
  return (
    <div className='text-white '>
      {!noStars && <img src={stars} alt="stars" className='relative left-[-15px] Mxxl:w-[54px] Mxxl:h-24 Mmd:w-[45px] Mmd:h-[20px]' />}
      <div className='mt-10'>
        <h2 className='xxl:text-48 lg:text-38 text-28 font-semibold'>{title}</h2>
        <div className={`flex ${cta ? 'flex-col md:flex-row gap-30 items-center' : ''} justify-between items-start xxl:gap-200 xl:gap-150 lg:gap-[100px] md:gap-[50px]`}>
          <p className={`${paragraph_classes} xxl:mt-14 md:mt-10`}>{description}</p>
          {link && (
            <Button link={link} content={linkContent} styles={`${buttonStyles}`} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionHeader