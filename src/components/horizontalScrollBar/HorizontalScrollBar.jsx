import { arrowDisabled, arrowActive } from '../../assets'
import Button from '../button/Button';
import './styles.css'


const HorizontalScrollBar = ({ component, slidLeft, initNumberShowingItems, slidRight, initShowingItems, listItemsLength, link, linkContent, buttonStyles }) => {
    return (
        <div className='horizontal-scroll-bar xxl:mt-80 md:mt-60 mt-40 relative'>
            <div className='overflow-hidden'>
                {component}
            </div>
            <div className={`xxl:mt-50 lg:mt-40 mt-30 xxl:pt-20 pt-16 border-t-1 border-grey-15 flex items-center md:justify-start  ${link ? 'justify-between' : 'justify-end Mmd:pt-35 items-start'} Msm:flex-col Msm:gap-28`}>
                {link && (
                    <Button link={link} content={linkContent}
                        styles={`block Msm:w-full Msm:text-center text-white ${buttonStyles}`} />
                )}
                <div className={`xxl:text-20 md:text-16 text-14 text-grey-60 font-medium xxl:mb-28 md:mb-20 md:mr-0 sm:mr-[57px] Msm:mr-0 ${!link && 'md:mb-0 sm:mb-12'}`}>
                    <span className='text-white mr-4'>{initShowingItems}</span>
                    of
                    <span className='ml-4'>{listItemsLength}</span>
                </div>
            </div>
            <p className='cursor-pointer absolute xxl:right-[70px] md:right-[56px] sm:right-[116px] Msm:left-0 sm:bottom-0 bottom-[-12px] xxl:p-14 p-10 border-1 border-grey-15 rounded-full'
                onClick={slidLeft}>
                <img src={initShowingItems > initNumberShowingItems ? arrowActive : arrowDisabled} alt="right-arrow"
                    className={`xxl:w-[30px] xxl:h-[30px] w-[24px] h-[24px] ${initShowingItems > initNumberShowingItems && 'rotate-[180deg]'}`} />
            </p>
            <p className='cursor-pointer absolute right-0 sm:bottom-0 bottom-[-12px] xxl:p-14 p-10 border-1 border-grey-15 rounded-full'
                onClick={slidRight}>
                <img src={initShowingItems >= listItemsLength ? arrowDisabled : arrowActive} alt="right-arrow"
                    className={`xxl:w-[30px] xxl:h-[30px] w-[24px] h-[24px] ${initShowingItems >= listItemsLength && 'rotate-[-180deg]'}`} />
            </p>
        </div>
    )
}

export default HorizontalScrollBar