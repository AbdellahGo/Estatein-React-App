import React, { useEffect, useState } from 'react'
import { margin_top2, paragraph_classes } from '../../classes'
import Button from '../button/Button'
import {groupLines } from '../../assets'

const ValuesList = ({ title, description, content, link }) => {

    const [sliceItems, setSliceItems] = useState(3)

    const handleMediaChange = () => {
        const MaxLgMedia = window.matchMedia('(max-width: 1439.98px)').matches
        if (MaxLgMedia) {
            setSliceItems(4)
        } else {
            setSliceItems(3)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleMediaChange);
        handleMediaChange();
        return () => window.removeEventListener('resize', handleMediaChange);
    }, [])

    return (
        <div className={`${margin_top2} flex flex-col xxl:gap-30 gap-20`}>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xxl:gap-30 gap-20'>
                {content.slice(0, sliceItems).map(({ id, icon, ValueTitle, desc }) => (
                    <div key={id} className='xxl:p-50 lg:p-40 p-24 xxl:rounded-12 rounded-10 border-1 border-grey-15'>
                        <div className='flex items-center xxl:gap-20 lg:gap-16 gap-10'>
                            <div className='borders-y w-fit xxl:p-10 md:p-[8px] p-6 rounded-full'>
                                <div className='borders-x xxl:p-14 md:p-10 p-[8px] rounded-full '>
                                    <img src={icon} alt="arrowRightTopIcon" className='xxl:w-[34px] md:w-[24px] w-[20px]  xxl:h-[34px] md:h-[24px] h-[20px]' />
                                </div>
                            </div>
                            <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>{ValueTitle}</h3>
                        </div>
                        <p className={`${paragraph_classes} xxl:mt-30 lg:mt-20 mt-16`}>{desc}</p>
                    </div>
                ))}
            </div>
            <div className='flex xl:flex-row flex-col xxl:gap-30 gap-20'>
                {sliceItems === 3 && (
                    <div className='xl:w-[40%] w-full xxl:p-50 lg:p-40 p-24 xxl:rounded-12 rounded-10 border-1 border-grey-15'>
                        <div className='flex items-center xxl:gap-20 lg:gap-16 gap-10'>
                            <div className='borders-y w-fit xxl:p-10 md:p-[8px] p-6 rounded-full'>
                                <div className='borders-x xxl:p-14 md:p-10 p-[8px] rounded-full '>
                                    <img src={content[3].icon} alt="arrowRightTopIcon" className='xxl:w-[34px] md:w-[24px] w-[20px]  xxl:h-[34px] md:h-[24px] h-[20px]' />
                                </div>
                            </div>
                            <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>{content[3].ValueTitle}</h3>
                        </div>
                        <p className={`${paragraph_classes} xxl:mt-30 lg:mt-20 mt-16`}>{content[3].desc}</p>
                    </div>
                )}
                <div className='flex flex-col justify-center xl:w-[85%] w-full xxl:p-50 lg:p-40 p-24 border-1 border-grey-15 xxl:rounded-12 rounded-10 bg-grey-10 '
                    style={{ backgroundImage: `url(${groupLines})`, backgroundSize: 'cover' }}>
                    <div className='flex justify-between items-center md:flex-row flex-col xxl:gap-20 lg:gap-14 gap-20'>
                        <h3 className='xxl:text-30 lg:text-24 text-20 font-bold'>{title}</h3>
                        <Button link={link} styles='bg-grey-08 border-grey-15 border-1 Mmd:w-full Mmd:text-center' content='Learn More' />
                    </div>
                    <p className={`${paragraph_classes} xxl:mt-30 mt-20`}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ValuesList