import React from 'react'
import { arrowTopRightGrey } from '../../assets'
const ServicesList = ({ services }) => {
    return (
        <div className='services-list xxl:p-20 p-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xxl:gap-20 gap-10 border-1 border-grey-15 text-white Mxl:mt-20 Mlg:mt-0'>
            {services.map(({ id, icon, serviceTitle }) => (
                <div key={id} className='opacity-hide-show border-1 text-center border-grey-15 xxl:rounded-12 rounded-10 xxl:py-40 py-30 xxl:px-20 px-16 bg-grey-10 relative'>
                    <img src={arrowTopRightGrey} alt="arrowRightTopIcon" className='absolute top-20 right-20 Mxxl:w-[26px] Mxxl:h-[26px]' />
                    <div className='borders-y w-fit xxl:p-10 md:p-[8px] p-6 mx-auto rounded-full'>
                        <div className='borders-x xxl:p-14 md:p-10 p-[8px] rounded-full '>
                            <img src={icon} alt="arrowRightTopIcon" className='xxl:w-[34px] md:w-[24px] w-[20px]  xxl:h-[34px] md:h-[24px] h-[20px]' />
                        </div>
                    </div>
                    <p className='xxl:mt-20 md:mt-16 mt-14 xxl:text-20 md:text-16 text-14 font-semibold'>{serviceTitle}</p>
                </div>
            ))}
        </div>
    )
}

export default ServicesList