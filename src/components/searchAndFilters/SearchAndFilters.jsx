import React from 'react'
import { container, margin_top, padding_x } from '../../classes'
import { search } from '../../assets'

const SearchAndFilters = () => {
    return (
        <div className={`search-and-filters lg:mt-[-52px] ${container} ${padding_x}`} id='search_and_Filter'>
            <form className='xxl:px-[148px] lg:px-[90px]'>
                <div className='flex items-center Msm:flex-wrap lg:gap-50 gap-20 xxl:p-20 lg:p-16 p-10 border-1 border-grey-15 rounded-12 grey-box-shadow bg-grey-08'>
                    <input type="text" placeholder='Search For A Property'
                        className='block text-grey-40 bg-grey-08 xxl:text-24 lg:text-20 text-16 font-medium flex-1 Msm:p-10 outline-none' />
                    <button type='submit'
                        className='flex items-center xl:w-[17%] lg:w-[25%]  bg-purple-60 xxl:rounded-10 rounded-8 Msm:mx-auto
                            xxl:px-24 xxl:py-18 px-20 py-14 text-white gap-8'>
                        <img src={search} alt="" />
                        <span className='md:block hidden xxl:text-18 text-14 font-medium'>Find Property</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchAndFilters





{/* 

type:
Detached house
Farmhouse
Flat
End terrace house
Maisonette
Terraced house
Semi-detached house
Cottage
Detached bungalow

status:
for_sale
for_rent

*/}