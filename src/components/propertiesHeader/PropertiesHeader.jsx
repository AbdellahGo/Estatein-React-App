import React from 'react'
import { container, padding_x } from '../../classes'
import {propertiesHeaderData} from '../../demoData/data'
import SectionHeader from '../sectionHeader/SectionHeader'

const PropertiesHeader = () => {
    const {title, description} = propertiesHeaderData
    return (
        <div className='border-b-1 border-grey-15 xxl:pt-150 xxl:pb-[160px] lg:pb-[130px] lg:pt-[100px] py-50 grey-bg-gradient'>
            <div className={`${padding_x} ${container}`}>
                <SectionHeader noStars title={title} description={description} />
            </div>
        </div>
    )
}

export default PropertiesHeader