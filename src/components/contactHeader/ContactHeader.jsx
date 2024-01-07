import React from 'react'
import { container, padding_x, paragraph_classes } from '../../classes'
import { contactUsHeaderData } from '../../demoData/data'
import SectionHeader from '../sectionHeader/SectionHeader'
import { arrowTopRightGrey } from '../../assets'

const ContactHeader = () => {
    const { title, description, headerList } = contactUsHeaderData
    return (
        <div>
            <div className='border-b-1 border-grey-15 xxl:pt-150 lg:pt-[100px] lg:pb-[100px] py-50 grey-bg-gradient'>
                <div className={`${padding_x} ${container}`}>
                    <SectionHeader noStars title={title} description={description} />
                </div>
            </div>
            <div className={`${container}`}>
                <div className='xxl:p-20 p-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xxl:gap-20 gap-10 border-1 border-grey-15 text-white Mxl:mt-20 Mlg:mt-0'>
                    {headerList.map(({ id, link, icon, title, links }) => (
                        <a key={id} href={`#${link}`} className='block'>
                            <div className='opacity-hide-show border-1 text-center h-full border-grey-15 xxl:rounded-12 rounded-10 xxl:py-40 py-30 xxl:px-20 px-16 bg-grey-10 relative'>
                                <img src={arrowTopRightGrey} alt="arrowRightTopIcon" className='absolute top-20 right-20 Mxxl:w-[26px] Mxxl:h-[26px]' />
                                <div className='borders-y w-fit xxl:p-10 md:p-[8px] p-6 mx-auto rounded-full'>
                                    <div className='borders-x xxl:p-14 md:p-10 p-[8px] rounded-full '>
                                        <img src={icon} alt="arrowRightTopIcon" className='xxl:w-[34px] md:w-[24px] w-[20px]  xxl:h-[34px] md:h-[24px] h-[20px]' />
                                    </div>
                                </div>
                                {id !== 4 ? (
                                    <p className='xxl:mt-20 md:mt-16 mt-14 xxl:text-20 md:text-16 text-14 font-semibold'>{title}</p>
                                ) : (
                                    <div className='flex flex-wrap xxl:gap-30 lg:gap-x-20 justify-center'>
                                        {links.map(({ id, title, link }) => (
                                            <a key={id} target='_blank' href={link}
                                                className='xxl:mt-20 md:mt-16 mt-14 xxl:text-20 md:text-16 text-14 font-semibold'>
                                                {title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactHeader