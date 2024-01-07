import React, { useState } from 'react'
import { whiteLocation, arrowActive, arrowDisabled } from '../../assets'
import { paragraph_classes } from '../../classes'

const PropertyImages = ({ content }) => {
    const [activeImage, setActiveImage] = useState(0)
    const { title, displayable_address, price, original_image } = content
    const listShowingImg = original_image.slice(0, 9)
    return (
        <div className='property-images text-white'>
            <div className='flex flex-wrap lg:gap-50 gap-10 justify-between sm:items-center items-end'>
                <h3 className='block sm:hidden Msm:w-full xxl:text-30 lg:text-24 text-20 font-semibold'>{title}</h3>
                <div className='flex lg:gap-20 gap-10'>
                    <h3 className='hidden sm:flex items-center xxl:text-30 lg:text-24 text-20 font-semibold'>{title}</h3>
                    <p className={`flex xxl:text-18 text-14 font-medium gap-8 ${paragraph_classes} items-center text-white xxl:p-10 p-8 border-1 border-grey-15 xxl:rounded-8 rounded-[6px]`}>
                        <img src={whiteLocation} alt="white location icon" className='xxl:w-24 w-20' />
                        {displayable_address}
                    </p>
                </div>
                <div className='flex sm:flex-col Msm:gap-8 flex-row Mms:items-center'>
                    <span className={`${paragraph_classes}`}>Price</span>
                    <span className='xxl:text-24 lg:text-20 text-18 font-semibold'>${Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 3 })}</span>
                </div>
            </div>
            <div className='xxl:mt-50 lg:mt-40 mt-30 rounded-12 xxl:p-50 lg:p-40 p-20 border-1 border-grey-15 bg-grey-10'>
                <div className='flex md:flex-col flex-col-reverse xxl:gap-30 gap-20'>
                    <div className='flex border-1 bg-grey-08 border-grey-15 rounded-12 xxl:p-20 p-10 xxl:gap-20 gap-10'>
                        {listShowingImg.map((img, i) => (
                            <div key={i} className={`small-img w-[50%] relative cursor-pointer 
                            after:w-full after:h-full ${activeImage === i ? 'after:hidden' : 'after:bg-[#00000080]'} after:absolute after:top-0 after:left-0 after:rounded-8`}
                                onClick={() => setActiveImage(i)}>
                                <img src={img} alt="property image" className='w-full rounded-8' />
                            </div>
                        ))}
                    </div>
                    <div className='xxl:h-[600px] xl:h-[500px] lg:h-[400px] md:h-[300px]'>
                        <img src={original_image[activeImage]} alt="" className='rounded-10 h-full w-full object-cover' />
                    </div>
                </div>
                <div className='mx-auto xxl:mt-30 mt-20 p-10 bg-grey-08 rounded-[100px] w-fit flex items-center justify-between gap-10'>
                    <div className='xxl:p-14 p-10 border-1 border-grey-15 rounded-full cursor-pointer'
                        onClick={() => setActiveImage(prev => prev > 0 ? prev -= 1 : 0)}>
                        <img src={activeImage > 0 ? arrowActive : arrowDisabled} alt="arrow left control"
                            className={`${activeImage > 0 ? 'rotate-180' : ''}`} />
                    </div>
                    <div className='flex gap-4'>
                        {listShowingImg.map((_, i) => (
                            <div key={i} className={`${activeImage === i ? 'bg-purple-60' : 'bg-grey-30'} lg:w-[30px] w-[20px] lg:h-[10px] h-[5px] rounded-8 cursor-pointer`}
                                onClick={() => setActiveImage(i)} />
                        ))}
                    </div>
                    <div className='xxl:p-14 p-10 border-1 border-grey-15 rounded-full cursor-pointer'
                        onClick={() => setActiveImage(prev => prev < listShowingImg.length - 1 ? prev += 1 : listShowingImg.length - 1)}>
                        <img src={activeImage < listShowingImg.length - 1 ? arrowActive : arrowDisabled} alt="arrow right control"
                            className={`${activeImage < listShowingImg.length - 1 ? '' : 'rotate-180'}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyImages
// 8 => 8