import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import { container, padding_x, margin_top } from '../../classes'
import { testimonialsDetails } from '../../demoData/data'
import HorizontalScrollBar from '../horizontalScrollBar/HorizontalScrollBar'
import TestimonialsList from '../testimonialsList/TestimonialsList'
import {findRest, handleMediaChange} from '../../utils/utils'


const Testimonials = () => {
    const { title, description, testimonialsList } = testimonialsDetails
    const [range, setRange] = useState(0)
    const [finalRest, setFinalRest] = useState(null)
    const [initNumberShowingItems, setInitNumberShowingItems] = useState(3)
    const [initShowingItems, setInitShowingItems] = useState(initNumberShowingItems)
    const testimonialsContainer = useRef(null)
    const listItemsLength = testimonialsList.length
    const restOfListItems = testimonialsList.slice(initShowingItems).length

    const slidLeft = () => {
        if (initShowingItems > initNumberShowingItems) {
            testimonialsContainer.current.classList.add('slid-left')
            if (finalRest > restOfListItems) {
                setInitShowingItems(prev => prev = prev - finalRest)
            } else {
                setInitShowingItems(prev => prev = prev - initNumberShowingItems)
            }
            setRange(prev => prev = prev - initNumberShowingItems)
        }
        setTimeout(() => {
            testimonialsContainer.current.classList.remove('slid-left')
        }, 500)
    }

    const slidRight = () => {
        if (listItemsLength > initShowingItems) {
            testimonialsContainer.current.classList.add('slid-right')
            if (initNumberShowingItems > restOfListItems) {
                setInitShowingItems(prev => prev = prev + restOfListItems)
            } else {
                setInitShowingItems(prev => prev = prev + initNumberShowingItems)
            }
            setRange(initShowingItems)
        }
        setTimeout(() => {
            testimonialsContainer.current.classList.remove('slid-right')
        }, 500)
    }


    useEffect(() => {
        window.addEventListener('resize', () => handleMediaChange(setInitNumberShowingItems, setInitShowingItems,  setRange));
        handleMediaChange(setInitNumberShowingItems, setInitShowingItems,  setRange);
        return () => window.removeEventListener('resize', handleMediaChange);
    }, []);

    useEffect(() => {
        findRest(initNumberShowingItems, listItemsLength, testimonialsList, setFinalRest)
    }, [initShowingItems])

    return (
        <div className={`testimonials ${margin_top}  ${container} ${padding_x}`}>
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
                    <TestimonialsList
                        testimonialsContainer={testimonialsContainer}
                        content={testimonialsList.slice(range, initShowingItems)}
                    />
                }
            />
        </div>
    )
}

export default Testimonials

