import React, { useState } from 'react'
import { container, margin_top, margin_top2, padding_x, paragraph_classes } from '../../classes'
import { ourOfficesData } from '../../demoData/data'
import SectionHeader from '../sectionHeader/SectionHeader'
import { useInView } from 'react-intersection-observer'

const OurOffices = () => {
    const [ref, inView] = useInView({ triggerOnce: true })
    const [active, setActive] = useState('all')
    const { title, description, filter, officesList } = ourOfficesData
    return (
        <div className={`our-offices ${margin_top} ${container} ${padding_x} text-white`} id='our_offices'>
            <SectionHeader
                title={title}
                description={description}
            />
            <div className={`${margin_top2}`}>
                <div className='xxl:rounded-12 rounded-8 p-10 bg-grey-10 flex gap-10 Msm:flex-wrap w-fit'>
                    {filter.map(({ id, title, value }) => (
                        <button key={id} className={`${active === value ? 'bg-grey-08' : ''} xxl:rounded-10 rounded-8 border-1 border-grey-15 xxl:py-18 py-14 xxl:px-24 px-20 text-white
                             xxl:text-18 text-14 font-medium w-[158px] Msm:flex-1`} onClick={() => setActive(value)}>
                            {title}
                        </button>
                    ))}
                </div>
                <div className='overflow-hidden xxl:mt-50 lg:mt-40 mt-30 flex md:flex-row flex-col xxl:gap-30 gap-20'>
                    {officesList.map(({ id, type, title, desc, contact, link, value }, i) => (
                        <div ref={ref} key={id} className={`${inView ? `slide-boxes-to-top slide-box-${i + 1}` : ''} border-1 border-grey-15 xxl:rounded-12 rounded-8 xxl:p-50 lg:p-40 p-24 bg-grey-08
                        ${active === 'all' ? 'flex flex-1' : (value === active ? 'flex lg:w-[50%] w-full' : 'hidden')} flex-col justify-between xxl:gap-40 lg:gap-30 gap-24`}>
                            <div>
                                <p className={`${paragraph_classes} text-white`}>{type}</p>
                                <h2 className='xxl:text-30 lg:text-24 text-20 font-semibold'>{title}</h2>
                                <p className={`${paragraph_classes} xxl:mt-14 mt-10`}>{desc}</p>
                            </div>
                            <div className='flex xxl:gap-10 gap-8 flex-wrap'>
                                {contact.map(({ id, title, icon }) => (
                                    <div key={id} className='border-1 border-grey-15 rounded-28 xxl:py-14 py-10 xxl:px-20 px-16 bg-grey-10 flex gap-6 items-center'>
                                        <img src={icon} alt="icon" className='xxl:w-24 w-20' />
                                        <p className={`${paragraph_classes}`}>{title}</p>
                                    </div>
                                ))}
                            </div>
                            <a href={link} target='_blank' className='bg-purple-60 xxl:py-18 py-14 xxl:px-24 px-20 rounded-10 xxl:text-18 text-14 font-medium text-center'>
                                Get Direction
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurOffices