import { useInView } from "react-intersection-observer"
import { groupLines } from "../../assets"
import { container, margin_top, padding_x, paragraph_classes } from "../../classes"
import { investmentsFeaturesData } from "../../demoData/data"
import Button from "../button/Button"
import SectionHeader from "../sectionHeader/SectionHeader"


const InvestmentsFeatures = () => {
    const [ref, inView] = useInView({ triggerOnce: true })
    const { title, title2, description, description2, investmentsFeaturesList, link } = investmentsFeaturesData
    return (
        <div className={`overflow-hidden investments-features ${margin_top} text-white ${container} ${padding_x}`} id="closing_success">
            <div className="flex xl:flex-row flex-col xxl:gap-60 lg:gap-50 gap-40">
                <div ref={ref} className={`${inView ? 'slide-in-left' : ''} flex flex-col xxl:gap-50 lg:gap-40 gap-30`}>
                    <SectionHeader title={title} description={description} />
                    <div className='flex flex-col xxl:gap-30 gap-20 justify-center w-full xxl:p-50 lg:p-40 p-24 border-1 border-grey-15 xxl:rounded-12 rounded-10 bg-grey-10 '
                        style={{ backgroundImage: `url(${groupLines})`, backgroundSize: 'cover' }}>
                        <h3 className="xxl:text-24 lg:text-[22px] text-20 md:font-semibold font-bold">{title2}</h3>
                        <p className={`${paragraph_classes} md:text-white`}>{description2}</p>
                        <Button link={link} content='Learn More' styles='bg-grey-08 border-grey-15 border-1 w-full text-center' />
                    </div>
                </div>
                <div ref={ref} className={`${inView ? 'slide-in-right' : ''} grid md:grid-cols-2 grid-cols-1 gap-10 rounded-12 p-10 bg-grey-10`}>
                    {investmentsFeaturesList.map(({ id, icon, title, desc }) => (
                        <div key={id} className="flex flex-col xxl:gap-30 lg:gap-24 gap-16 border-1 border-grey-15 xxl:rounded-12 rounded-10 xxl:p-50 lg:p-40 p-24 bg-grey-08">
                            <div className="flex xxl:gap-20 lg:gap-16 gap-12 items-center">
                                <div className='borders-y w-fit xxl:p-10 md:p-[8px] p-6 rounded-full'>
                                    <div className='borders-x xxl:p-14 md:p-10 p-[8px] rounded-full '>
                                        <img src={icon} alt="arrowRightTopIcon" className='xxl:w-[34px] md:w-[24px] w-[20px]  xxl:h-[34px] md:h-[24px] h-[20px]' />
                                    </div>
                                </div>
                                <h3 className="xxl:text-24 lg:text-20 text-18 font-semibold">{title}</h3>
                            </div>
                            <p className={`${paragraph_classes}`}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InvestmentsFeatures