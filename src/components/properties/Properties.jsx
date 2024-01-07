import React, { useEffect, useRef, useState } from 'react'
import { container, padding_x, header_button_styles } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import HorizontalScrollBar from '../horizontalScrollBar/HorizontalScrollBar.jsx'
import PropertiesList from '../propertiesList/PropertiesList.jsx'
import { findRest, handleMediaChange } from '../../utils/utils'

const Properties = ({ title, description, propertiesList, isLoading }) => {
    const [range, setRange] = useState(0) //? Represents the range of items to display
    const [finalRest, setFinalRest] = useState(null) //? Represents the final number of remaining items
    const [initNumberShowingItems, setInitNumberShowingItems] = useState(3) //? Represents the initial number of items to show
    const [initShowingItems, setInitShowingItems] = useState(initNumberShowingItems) //? Represents the current number of items being shown
    const propertiesContainer = useRef(null) //? References the properties container element
    const listItemsLength = propertiesList.length // ?Stores the length of the propertiesList array
    const restOfListItems = propertiesList.slice(initShowingItems).length //? Stores the length of the remaining propertiesList items



    const slidLeft = () => {
        if (initShowingItems > initNumberShowingItems) {
            propertiesContainer.current.classList.add('slid-left') //? Adds the 'slid-left' class to the properties container element
            if (finalRest > restOfListItems) {
                setInitShowingItems(prev => prev = prev - finalRest) //? Decreases the initShowingItems value by the finalRest value
            } else {
                setInitShowingItems(prev => prev = prev - initNumberShowingItems) //? Decreases the initShowingItems value by the initNumberShowingItems value
            }
            setRange(prev => prev = prev - initNumberShowingItems) //? Updates the range value based on the updated initShowingItems value
        }
        setTimeout(() => {
            propertiesContainer.current.classList.remove('slid-left') //? Removes the 'slid-left' class from the properties container element after 500ms
        }, 500)
    }

    const slidRight = () => {
        if (listItemsLength > initShowingItems) {
            propertiesContainer.current.classList.add('slid-right') //? Adds the 'slid-right' class to the properties container element
            if (initNumberShowingItems > restOfListItems) {
                setInitShowingItems(prev => prev = prev + restOfListItems) //? Increases the initShowingItems value by the restOfListItems value
            } else {
                setInitShowingItems(prev => prev = prev + initNumberShowingItems) //? Increases the initShowingItems value by the initNumberShowingItems value
            }
            setRange(initShowingItems) //? Sets the range value to the current initShowingItems value
        }
        setTimeout(() => {
            propertiesContainer.current.classList.remove('slid-right') //? Removes the 'slid-right' class from the properties container element after 500ms
        }, 500)
    }


    useEffect(() => {
        window.addEventListener('resize', () => handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange, 1, 2, 3));
        handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange, 1, 2, 3);
        return () => window.removeEventListener('resize', handleMediaChange);
    }, []);
    useEffect(() => {
        findRest(initNumberShowingItems, listItemsLength, propertiesList, setFinalRest) //? Calculates and sets the finalRest value
    }, [initShowingItems])

    if (isLoading) return 'Loading...'

    return (
        <div className={`xxl:mt-115 xl:mt-115 mt-80 ${container} ${padding_x}`} id='properties'>
            <SectionHeader
                title={title}
                description={description}
                link='/properties'
                linkContent='View All Properties'
                buttonStyles={`bg-grey-10 border-1 border-grey-15 Mmd:hidden ${header_button_styles}`}
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
                        content={propertiesList.slice(range, initShowingItems)}
                    />
                }
            />
        </div>
    )
}

export default Properties