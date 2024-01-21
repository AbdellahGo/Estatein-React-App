import { container, margin_top, margin_top2, padding_x, paragraph_classes } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { ourAchievementsData } from '../../demoData/data'
import { useInView } from 'react-intersection-observer'

const OurAchievements = () => {
  const [ref, inView] = useInView({triggerOnce: true})
  const { title, description, achievementsList } = ourAchievementsData
  return (
    <div className={`our-achievements ${margin_top} text-white ${container} ${padding_x}`} id='our_works'>
      <SectionHeader title={title} description={description} />
      <div className={`${margin_top2} overflow-hidden grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xxl:gap-40 lg:gap-30 gap-20`}>
        {achievementsList.map(({ id, title, desc }, i) => (
          <div ref={ref} key={id} className={`${inView ? `slide-boxes-to-top slide-box-${i + 1}`: ''} grey-box-shadow border-1 border-grey-15 xxl:rounded-12 xxl:p-50 lg:p-40 p-30 rounded-10 bg-grey-08`}>
            <h3 className='xxl:text-30 lg:text-24 text-20 font-semibold'>{title}</h3>
            <p className={`${paragraph_classes} xxl:mt-30 lg:mt-24 mt-16`}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurAchievements