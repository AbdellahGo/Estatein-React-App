import React from 'react'
import { button_style, paragraph_classes } from '../../classes'
import { useInView } from 'react-intersection-observer'

const OurClientsList = ({ ourClientsContainer, content }) => {
    const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <div ref={ourClientsContainer}
            className='p-[8px] our-clients-list grid md:grid-cols-2 grid-cols-1 xxl:gap-50 lg:gap-40 gap-30'>
            {content.map(({ id, date, companyName, info, opinion }, i) => (
                <div ref={ref} key={id} className={`${inView ? `slide-boxes slide-box-${i + 1}` : ''} flex flex-col xxl:gap-40 gap-30 grey-box-shadow lg:rounded-12 text-white
                    rounded-10 border-1 border-grey-15 xxl:p-50 lg:p-40 p-24 bg-grey-08`}>
                    <div className='flex md:flex-row flex-col xxl:gap-30 gap-20 justify-between'>
                        <div>
                            <p className={`${paragraph_classes}`}>{date}</p>
                            <h2 className='mt-6 xxl:text-30 lg:text-24 text-20 font-semibold'>{companyName}</h2>
                        </div>
                        <a target='_blank' href={`https://www.google.com/search?q=${companyName.split(' ').join('')}`}
                            className={`${button_style} border-grey-15 self-center border-1 md:w-fit text-center w-full bg-grey-10`}>Visit Website</a>
                    </div>
                    <div className='flex'>
                        {info.map(({ id, icon, value }) => (
                            <div key={id} className={`flex-1 ${id === 1 ? 'xxl:pr-30 lg:pr-20 pr-16 border-r-1 border-grey-15' : 'xxl:pl-30 lg:pl-20 pl-16'}`}>
                                <p className={`${paragraph_classes} flex gap-6`}>
                                    <img src={icon} alt="" />
                                    {id === 1 ? 'domain' : 'category'}
                                </p>
                                <h3 className='mt-8 xxl:text-18 lg:text-16 text-14 font-medium'>{value}</h3>
                            </div>
                        ))}
                    </div>
                    <div className='xxl:p-30 lg:p-24 p-20 border-1 border-grey-15 rounded-12'>
                        <p className={`${paragraph_classes}`}>What They Said 🤗</p>
                        <p className={`${paragraph_classes} xxl:mt-14 lg:mt-10 mt-8 text-white`}>{opinion}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurClientsList