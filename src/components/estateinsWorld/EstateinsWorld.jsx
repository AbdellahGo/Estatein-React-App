import React from 'react'
import { container, margin_top, padding_x } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { estateinsWorldData } from '../../demoData/data'
import { groupLines2, worldImage1, worldImage2, worldImage3, worldImage4, worldImage5, worldImage6 } from '../../assets'
import { useInView } from 'react-intersection-observer'

const EstateinsWorld = () => {
    const [ref, inView] = useInView({ triggerOnce: true })
    const { title, description } = estateinsWorldData
    return (
        <div className={`estateins-world ${margin_top} ${container} ${padding_x}`} >
            <div className='overflow-hidden xxl:p-80 lg:p-60 p-24 border-1 border-grey-15 rounded-12 bg-grey-10 flex flex-col lg:gap-20 gap-50'
                style={{ backgroundImage: `url(${groupLines2})`, backgroundSize: 'cover' }}>
                <div ref={ref} className={`${inView ? 'slide-in-right' : ''} grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10`}>
                    <img src={worldImage1} alt="worldImage1" />
                    <img src={worldImage2} alt="worldImage2" />
                    <img src={worldImage3} alt="worldImage3" className='h-full' />
                    <div className='grid grid-cols-2 lg:gap-20 gap-10'>
                        <img src={worldImage4} alt="worldImage4" />
                        <img src={worldImage5} alt="worldImage5" />
                    </div>

                </div>
                <div ref={ref} className={`${inView ? 'slide-in-left' : ''} flex lg:flex-row flex-col items-center gap-20`}>
                    <SectionHeader title={title} description={description} />
                    <img src={worldImage6} alt="worldImage6" className='lg:w-[50%] w-full' />
                </div>
            </div>
        </div>
    )
}

export default EstateinsWorld