import React, { useEffect, useRef, useState } from 'react'
import { findRest, handleMediaChange } from '../../utils/utils'
import PropertiesList from '../propertiesList/PropertiesList'
import HorizontalScrollBar from '../horizontalScrollBar/HorizontalScrollBar'
import SectionHeader from '../sectionHeader/SectionHeader'
import { container, padding_x } from '../../classes'

const SearchedProperty = ({ title, description, propertiesList }) => {
    const [range, setRange] = useState(0)
    const [finalRest, setFinalRest] = useState(null)
    const [initNumberShowingItems, setInitNumberShowingItems] = useState(3)
    const [initShowingItems, setInitShowingItems] = useState(initNumberShowingItems)
    const propertiesContainer = useRef(null)
    const listItemsLength = propertiesList?.length
    const restOfListItems = propertiesList?.slice(initShowingItems).length 


    const slidLeft = () => {
        if (initShowingItems > initNumberShowingItems) {
            propertiesContainer.current.classList.add('slid-left')
            if (finalRest > restOfListItems) {
                setInitShowingItems(prev => prev = prev - finalRest)
            } else {
                setInitShowingItems(prev => prev = prev - initNumberShowingItems)
            }
            setRange(prev => prev = prev - initNumberShowingItems)
        }
        setTimeout(() => {
            propertiesContainer.current.classList.remove('slid-left')
        }, 500)
    }

    const slidRight = () => {
        if (listItemsLength > initShowingItems) {
            propertiesContainer.current.classList.add('slid-right')
            if (initNumberShowingItems > restOfListItems) {
                setInitShowingItems(prev => prev = prev + restOfListItems)
            } else {
                setInitShowingItems(prev => prev = prev + initNumberShowingItems)
            }
            setRange(initShowingItems)
        }
        setTimeout(() => {
            propertiesContainer.current.classList.remove('slid-right')
        }, 500)
    }


    useEffect(() => {
        window.addEventListener('resize', () => handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange, 1, 2, 3));
        handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange, 1, 2, 3);
        return () => window.removeEventListener('resize', handleMediaChange);
    }, []);

    useEffect(() => {
        findRest(initNumberShowingItems, listItemsLength, propertiesList, setFinalRest)
    }, [initShowingItems])

    return (
<div className={`xxl:mt-115 xl:mt-115 mt-80 ${container} ${padding_x}`} id='properties'>
            <SectionHeader
                title={title}
                description={description}
            />
            <HorizontalScrollBar
                link='/properties'
                linkContent='View All Properties'
                buttonStyles='md:hidden bg-grey-10 border-1 border-grey-15'
                slidLeft={slidLeft}
                slidRight={slidRight}
                initNumberShowingItems={initNumberShowingItems}
                initShowingItems={initShowingItems}
                listItemsLength={listItemsLength}
                component={
                    <PropertiesList
                        propertiesContainer={propertiesContainer}
                        content={propertiesList?.slice(range, initShowingItems)}
                    />
                }
            />
        </div>
    )
}

export default SearchedProperty