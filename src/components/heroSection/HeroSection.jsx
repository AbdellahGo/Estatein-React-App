import { Fragment } from 'react'
import { container, paragraph_classes } from '../../classes'
import { heroSectionData } from '../../demoData/data'
import { arrowRightTop, buildings } from '../../assets'
import { NavLink } from 'react-router-dom'
import ServicesList from '../servicesList/ServicesList'
import './styles.css'
import Button from '../button/Button'


const HeroSection = () => {
  const { title, description, stats, buttons, services } = heroSectionData
  const circleText = '✨Discover Your Dream Property'
  return (
    <div className={`hero-section ${container} xxl:mt-[35px] xl:mt-0 md:mt-30 mt-40 Mmd:px-16 `} id='hero_section'>
      <div className='flex lg:flex-row flex-col-reverse  xxl:gap-80 xl:gap-60 lg:gap-40 items-center overflow-hidden'>
        <div className='slide-in-left lg:w-[50%] w-full xxl:pl-162 xl:pl-80 lg:pl-40 flex flex-col justify-center items-start xxl:gap-60 xl:gap-50 lg:gap-20 gap-40 self-stretch
          Mlg:mt-[56px]'>
          <div className='text'>
            <h1 className='xxl:text-60 xl:text-46 text-28 font-semibold xxl:leading-[72px] xl:leading-[55px] text-white '>{title}</h1>
            <p className={`${paragraph_classes} xxl:mt-24 md:mt-20 mt-16 `}>{description}</p>
          </div>
          <div className='buttons flex Msm:flex-col text-center xxl:gap-20 gap-16 text-white self-stretch'>
            {buttons.map(({ id, content, link, classes }) => (
              <Fragment key={id}>
                <Button link={link} content={content} styles={classes}/>
              </Fragment>
            ))}
          </div>
          <div className='flex Msm:flex-wrap  xxl:gap-20 md:gap-16 gap-y-12 gap-x-[2.5%] self-stretch text-white'>
            {stats.map(({ id, number, text }) => (
              <div key={id} className={`border-1 border-grey-15 Msm:text-center bg-grey-10 md:rounded-12 rounded-8 xxl:py-16 md:py-14 xxl:px-24 md:px-20 p-16 sm:flex-1
                  ${id !== 3 ? 'w-[48.7%]' : 'w-full'}`}>
                <h2 className='font-bold xxl:text-40 md:text-30 text-24 xxl:leading-[60px] md:leading-[45px] leading-[36px]'>{number}</h2>
                <p className={`${paragraph_classes}`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='slide-in-right lg:w-[50%] w-full bg-grey-10 Mlg:border-1 Mlg:border-grey-15 Mlg:rounded-12 relative'>
          <div className='absolute xxl:top-[144px] xl:top-[90px] lg:top-[35px] xxl:right-[821px] xl:right-[595px] lg:right-[350px] Mlg:left-0 Mlg:bottom-[-40px]'>
            <div className="circle-text w-fit relative flex justify-center items-center">
              <div className="container bg-grey-10 border-1 border-grey-15 relative xxl:h-[175px] xxl:w-[175px] w-[130px] h-[130px] rounded-full">
                <div className="container-spans absolute left-[50%] top-[50%]">
                  <span className="text-ring relative" style={{ '--total': 30 }}>
                    <span aria-hidden="true">
                      {circleText.split('').map((letter, i) => (
                        <span key={i} style={{ '--index': `${i}` }}>{letter}</span>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
              <div className='absolute rounded-full flex justify-center items-center xxl:w-[80px] w-[58px] xxl:h-[80px] h-[58px] bg-grey-10 border-1 border-grey-15'>
                <NavLink to='/services'>
                  <img src={arrowRightTop} alt="arrowRightTop" className='xxl:w-[34px] xxl:h-[34px] w-[24px] h-[24px]' />
                </NavLink>
              </div>
            </div>
          </div>
          <img src={buildings} alt="buildings image" className='w-full' />
        </div>
      </div>
      <ServicesList content={services} />
    </div>
  )
}

export default HeroSection