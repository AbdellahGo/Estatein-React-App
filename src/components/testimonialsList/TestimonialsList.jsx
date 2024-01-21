import { useInView } from 'react-intersection-observer'
import { paragraph_classes } from '../../classes'

const TestimonialsList = ({ testimonialsContainer, content }) => {
    const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <div ref={testimonialsContainer}
            className="testimonials-list grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-30 md:gap-20 gap-30">
            {content.map(({ id, rating, title, desc, userName, userAddress, userImage }, i) => (
                <div ref={ref} key={id} className={`${inView ? `slide-boxes slide-box-${i + 1}` : ''} xxl:p-50 xl:p-40 md:p-20 p-24 flex flex-col xxl:gap-40 xl:gap-30 gap-24 rounded-10 border-1 border-grey-15 bg-grey-08 text-white`}
                    >
                    <div className="flex xxl:gap-10 gap-8">
                        {rating.map((image, i) => (
                            <div key={i} className="rounded-full xxl:p-10 md:p-8 p-6 border-1 border-grey-15 bg-grey-08">
                                <img src={image} alt="yellow star" className="xxl:w-24 md:w-20 w-18" />
                            </div>
                        ))}
                    </div>
                    <div className='flex xxl:gap-30 md:gap-20 gap-30 flex-col justify-between flex-1'>
                        <div className="flex flex-col xll:gap-14 md:gap-10 gap-8">
                            <h3 className="xll:text-24 md:text-20 text-18 font-semibold">{title}</h3>
                            <p className={`${paragraph_classes} text-white`}>{desc}</p>
                        </div>
                        <div className="flex items-center xxl:gap-12 gap-10">
                            <img src={userImage} alt="avatar" className='rounded-full xxl:w-60 w-50' />
                            <div>
                                <h4 className='xxl:text-20 md:text-18 text-16 font-medium'>{userName}</h4>
                                <p className={`${paragraph_classes}`}>{userAddress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TestimonialsList