import React from 'react'
import { container, header_button_styles, margin_top2, padding_x, paragraph_classes } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { bigGroupLines, wondered } from '../../assets'

const Error = ({ content, title, description, link, linkContent, noContent }) => {
    return (
        <div className={`error xxl:mt-115 xl:mt-115 mt-80 ${container} ${padding_x}`}>
            {noContent ? ''
                : <SectionHeader
                    title={title}
                    description={description}
                    link={link}
                    linkContent={linkContent}
                    buttonStyles={`bg-grey-10 border-1 border-grey-15 Mmd:hidden ${header_button_styles}`}
                />}
            <div className='mt-20 flex gap-10 items-center p-20 border-1 border-grey-30 rounded-10'
                style={{ background: `url(${bigGroupLines})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <img src={wondered} alt="wondered icon" />
                <p className={`${paragraph_classes} text-white`}>{content}</p>
            </div>
        </div>
    )
}

export default Error