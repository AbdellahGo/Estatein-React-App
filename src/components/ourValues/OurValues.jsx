import { container, margin_top, padding_x } from '../../classes.js'
import SectionHeader from '../sectionHeader/SectionHeader.jsx'
import { ourValuesDate } from '../../demoData/data.js'
import ValuesBoxes from '../valuesBoxes/ValuesBoxes.jsx'
import { useInView } from 'react-intersection-observer'
const OurValues = () => {
    const [ref, inView] = useInView({triggerOnce: true})
    const { title, description, valuesList } = ourValuesDate
    return (
        <div className={`our-values ${margin_top} ${container} ${padding_x} text-white`} id='our_story'>
            <div className='flex lg:items-center lg:flex-row flex-col xxl:gap-80 lg:gap-60 gap-40 overflow-hidden'>
                <div ref={ref} className={`${inView ? 'slide-in-left': ''} lg:w-[33%] w-full`}>
                    <SectionHeader title={title} description={description} />
                </div>
                <div ref={ref} className={`${inView ? 'slide-in-right': ''} lg:w-[63%] w-full`}>
                    <ValuesBoxes content={valuesList}/>
                </div>
            </div>
        </div>
    )
}

export default OurValues