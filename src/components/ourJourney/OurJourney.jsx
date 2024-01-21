import { container, padding_x, paragraph_classes } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { house } from '../../assets'
import { ourJourneyData } from '../../demoData/data'
const OurJourney = () => {
    const { title, description, stats } = ourJourneyData
    return (
        <div className={`our-journey xxl:mt-[100px] lg:mt-[70px] mt-50 ${container} ${padding_x} text-white`}>
            <div className='overflow-hidden lg:grid lg:grid-cols-2 Mlg:flex Mlg:flex-col-reverse items-center  xxl:gap-80 lg:gap-60 gap-20'>
                <div className='slide-in-left flex flex-col xxl:gap-80 lg:gap-50 gap-40'>
                    <SectionHeader title={title} description={description} />
                    <div className='flex Msm:flex-wrap xxl:gap-20 md:gap-16 gap-y-12 gap-x-[2.5%] self-stretch text-white'>
                        {stats.map(({ id, number, text }) => (
                            <div key={id} className={`border-1 border-grey-15 Msm:text-center bg-grey-10 md:rounded-12 rounded-8 xxl:py-16 md:py-14 xxl:px-24 md:px-20 p-16 sm:flex-1
                                ${id !== 3 ? 'w-[48.7%]' : 'w-full'}`}>
                                <h2 className='font-bold xxl:text-40 md:text-30 text-24 xxl:leading-[60px] md:leading-[45px] leading-[36px]'>{number}</h2>
                                <p className={`${paragraph_classes}`}>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='slide-in-right'>
                    <img src={house} alt="house image" />
                </div>
            </div>
        </div>
    )
}

export default OurJourney