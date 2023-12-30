import { container, margin_top, margin_top2, padding_x, paragraph_classes } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { howItWorksData } from '../../demoData/data'
import './styles.css'

const HowItWorks = () => {
    const { title, description, howItWorksList } = howItWorksData
    return (
        <div className={`how-it-works ${margin_top} text-white ${container} ${padding_x}`} id='how_it_works'>
            <SectionHeader title={title} description={description} />
            <div className={`${margin_top2} grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xxl:gap-y-50 lg:gap-y-40 xxl:gap-x-30 lg:gap-x-20 gap-30`}>
                {howItWorksList.map(({ id, title, desc }) => (
                    <div key={id} className='how-it-works-box'>
                        <span className='block xxl:py-16 py-14 xxl:px-20 px-16 border-l-1 border-purple-60 xxl:text-20 text-16 font-medium'
                        >Step 0{id}</span>
                        <div className='relative xxl:p-50 lg:p-40 p-30 border-1 border-grey-15 
                            xxl:rounded-12 rounded-10 left-top-purple-gradient xxl:h-[288px] xl:h-[249px] lg:h-[375px] md:h-[274px]'
                            style={{ borderTopLeftRadius: '0' }}>
                            <h3 className='xxl:text-26 lg:text-20 text-18 font-semibold'>{title}</h3>
                            <p className={`${paragraph_classes} xxl:mt-20 lg:mt-16 mt-14`}>{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowItWorks