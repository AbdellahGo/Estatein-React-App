import SectionHeader from '../sectionHeader/SectionHeader'
import { container, padding_x } from '../../classes'
import ServicesList from '../servicesList/ServicesList'


const HeaderSection = ({ title, description, id, content }) => {
    return (
        <div id={id}>
            <div className='border-b-1 border-grey-15 xxl:pt-150 lg:pt-[100px] lg:pb-[100px] py-50 grey-bg-gradient'>
                <div className={`${padding_x} ${container}`}>
                    <SectionHeader noStars title={title} description={description} />
                </div>
            </div>
            <div className={`${container}`}>
                <ServicesList content={content} />
            </div>
        </div>
    )
}

export default HeaderSection