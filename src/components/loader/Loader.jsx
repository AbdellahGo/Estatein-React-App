import React from 'react'
import { container, header_button_styles, margin_top2, padding_x } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'

const Loader = ({ title, description, link, linkContent, noContent }) => {
    return (
        <div className={`loader xxl:mt-115 xl:mt-115 mt-80 ${container} ${padding_x}`}>
            {noContent ? ''
                : <SectionHeader
                    title={title}
                    description={description}
                    link={link}
                    linkContent={linkContent}
                    buttonStyles={`bg-grey-10 border-1 border-grey-15 Mmd:hidden ${header_button_styles}`}
                />}
            <div className={`${margin_top2} w-fit mx-auto relative flex justify-center items-center`}>
                <div className='loader-to-right xxl:w-[200px] w-[150px] xxl:h-[200px] h-[150px] rounded-full border-y-[5px] border-purple-60 p-20 flex items-center'></div>
                <div className='absolute loader-to-left xxl:w-[160px] w-[110px] xxl:h-[160px] h-[110px] rounded-full border-x-[5px] border-purple-60'></div>
            </div>
        </div>
    )
}

export default Loader