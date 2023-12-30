import { container, margin_top, padding_x } from '../../classes.js'
import SectionHeader from '../sectionHeader/SectionHeader.jsx'
import { ourValuesDate } from '../../demoData/data.js'
import ValuesBoxes from '../valuesBoxes/ValuesBoxes.jsx'
const OurValues = () => {
    const { title, description, valuesList } = ourValuesDate
    return (
        <div className={`our-values ${margin_top} ${container} ${padding_x} text-white`} id='our_story'>
            <div className='flex lg:items-center lg:flex-row flex-col xxl:gap-80 lg:gap-60 gap-40'>
                <div className='lg:w-[33%] w-full'>
                    <SectionHeader title={title} description={description} />
                </div>
                <div className='lg:w-[63%] w-full'>
                    <ValuesBoxes content={valuesList}/>
                </div>
            </div>
        </div>
    )
}

export default OurValues