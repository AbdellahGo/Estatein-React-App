import React from 'react'
import { paragraph_classes } from '../../classes'

const PricingDetailsBox = ({ content }) => {
    const { title, list } = content
    return (
        <div className='xxl:p-50 lg:p-40 p-20 border-1 border-grey-15 rounded-12'>
            <div className='flex justify-between gap-40 items-center xxl:pb-40 lg:pb-30 pb-20 border-b-1 border-grey-15'>
                <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>{title}</h3>
                <button className={`${paragraph_classes} outline-none xxl:rounded-10 rounded-8 border-1 border-grey-15 bg-grey-10 xxl:py-18 py-14 xxl:px-24 px-20 text-white`}>Learn More</button>
            </div>
            <div className='flex md:flex-wrap Mmd:flex-col xxl:gap-y-80 lg:gap-y-60 gap-y-40 gap-x-[4%] xxl:pt-40 lg:pt-30 pt-20'>
                {list.map(({ id, title, price, note }, i) => (
                    <div key={id} className={` Mmd:w-full border-1 border-grey-15 lg:p-20 p-16 rounded-8 h-fit
                            ${list.length === 5 ? (id === 5 ? 'w-full' : 'w-[48%]') : ''}
                            ${list.length === 2 ? 'w-full' : ''}
                            ${list.length === 4 ? 'w-[48%]' : ''}
                        `}>
                        <p className={`${paragraph_classes}`}>{title}</p>
                        <div className='flex  xxl:gap-16 lg:gap-12 gap-10 xxl:mt-16 lg:mt-12 mt-10'>
                            <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold'>{price}</h3>
                            {note && (
                                <p className={`${paragraph_classes} h-fit lg:rounded-28 rounded-[6px] border-1 border-grey-15 bg-grey-10 xxl:py-8 py-6 xxl:px-14 px-12`}>{note}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingDetailsBox