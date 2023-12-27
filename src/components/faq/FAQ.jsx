import { FAQDetails } from '../../demoData/data'
import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import { container, margin_top, padding_x } from '../../classes'
import HorizontalScrollBar from '../horizontalScrollBar/HorizontalScrollBar'
import {findRest, handleMediaChange} from '../../utils/utils'
import FAQList from '../faqList/FAQList'


const FAQ = () => {
  const { title, description, faqList } = FAQDetails
  const [range, setRange] = useState(0)
  const [finalRest, setFinalRest] = useState(null)
  const [initNumberShowingItems, setInitNumberShowingItems] = useState(3)
  const [initShowingItems, setInitShowingItems] = useState(initNumberShowingItems)
  const FAQContainer = useRef(null)
  const listItemsLength = faqList.length
  const restOfListItems = faqList.slice(initShowingItems).length

  const slidLeft = () => {
    if (initShowingItems > initNumberShowingItems) {
      FAQContainer.current.classList.add('slid-left')
      if (finalRest > restOfListItems) {
        setInitShowingItems(prev => prev = prev - finalRest)
      } else {
        setInitShowingItems(prev => prev = prev - initNumberShowingItems)
      }
      setRange(prev => prev = prev - initNumberShowingItems)
    }
    setTimeout(() => {
      FAQContainer.current.classList.remove('slid-left')
    }, 500)
  }

  const slidRight = () => {
    if (listItemsLength > initShowingItems) {
      FAQContainer.current.classList.add('slid-right')
      if (initNumberShowingItems > restOfListItems) {
        setInitShowingItems(prev => prev = prev + restOfListItems)
      } else {
        setInitShowingItems(prev => prev = prev + initNumberShowingItems)
      }
      setRange(initShowingItems)
    }
    setTimeout(() => {
      FAQContainer.current.classList.remove('slid-right')
    }, 500)
  }

  useEffect(() => {
    window.addEventListener('resize', () => handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange));
    handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange);
    return () => window.removeEventListener('resize', handleMediaChange);
  }, []);

  useEffect(() => {
    findRest(initNumberShowingItems, listItemsLength, faqList, setFinalRest)
  }, [initShowingItems])

  return (
<div className={`faq ${margin_top} ${container} ${padding_x}`}>
            <SectionHeader
                title={title}
                description={description}
            />
            <HorizontalScrollBar
                slidLeft={slidLeft}
                slidRight={slidRight}
                initNumberShowingItems={initNumberShowingItems}
                initShowingItems={initShowingItems}
                listItemsLength={listItemsLength}
                component={
                    <FAQList
                        faqContainer={FAQContainer}
                        content={faqList.slice(range, initShowingItems)}
                    />
                }
            />
        </div>
  )
}

export default FAQ