import { container, margin_top, margin_top2, padding_x, paragraph_classes } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { ourTeamData } from '../../demoData/data'
import { send, twitter } from '../../assets'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const OurTeam = ({ setSendMessage }) => {
    const [ref, inView] = useInView({triggerOnce: true})
    const { title, description, ourTeamList } = ourTeamData
    const inputsText = useRef([])

    const handleSendMessage = (e, index) => {
        const inputsList = inputsText.current
        e.preventDefault()
        if (inputsList[index].value) {
            setSendMessage(true)
            setTimeout(() => setSendMessage(false), 1000)
            inputsList[index].value = ''
        }
    }
    return (
        <div className={`our-team ${margin_top} text-white ${container} ${padding_x}`} id='our_team'>
            <SectionHeader title={title} description={description} />
            <div className={`${margin_top2} overflow-hidden grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xxl:gap-30 gap-20`}>
                {ourTeamList.map(({ id, personName, job, image }, i) => (
                    <div ref={ref} key={id} className={`${inView ? `slide-boxes-to-top slide-box-${i + 1}` : ''} xxl:p-30 lg:p-24 p-20 border-1 border-grey-15 rounded-12 flex flex-col lg:gap-50 md:gap-40 gap-20 relative`}>
                        <img src={image} alt="Image of a person" className='w-full' />
                        <div>
                            <a href='https://twitter.com/home'
                                target='_blank' className='block xxl:py-14 py-10 xxl:px-[26px] px-20 bg-purple-60 rounded-[43px] w-fit md:absolute xl:top-[47%] lg:top-[55%] md:top-[50%] md:left-[50%] md:translate-x-[-50%] mx-auto '>
                                <img src={twitter} alt="twitter icon" className='xxl:w-24 w-20' />
                            </a>
                            <h3 className='xxl:text-24 lg:text-20 text-18 font-semibold text-center Mmd:mt-6'>{personName}</h3>
                            <p className={`${paragraph_classes} text-center mt-6`}>{job}</p>
                            <form className='xxl:mt-24 lg:mt-20 mt-16'>
                                <div className='flex sm:flex-row flex-col gap-20 xxl:py-14 xxl:pl-24 xxl:pr-14 lg:py-10 lg:pl-20 lg:pr-10 sm:py-8 sm:pl-24 sm:pr-8 px-30 py-20 sm:rounded-full rounded-[40px] border-1 border-grey-15 bg-grey-10'>
                                    <input ref={(el) => inputsText.current[i] = el} type="text" placeholder='Say Hello 👋' className='bg-grey-10 outline-none xl:w-[80%] lg:w-[89%] md:w-[77%] sm:w-[92%]' />
                                    <button onClick={(e) => handleSendMessage(e, i)} type='submit' className='block xxl:p-10 lg:p-8 p-14 rounded-full bg-purple-60 xxl:w-[18%] xl:w-[20%] lg:w-[11%] md:w-[23%] sm:w-[8%] '>
                                        <img src={send} alt="send icon" className='xxl:w-24 sm:w-20 mx-auto' />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam