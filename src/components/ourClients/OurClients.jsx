import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import { container, margin_top, padding_x } from '../../classes'
import HorizontalScrollBar from '../horizontalScrollBar/HorizontalScrollBar'
import { findRest, handleMediaChange } from '../../utils/utils'
import OurClientsList from '../ourClientsList/OurClientsList'
import { ourClientsData } from '../../demoData/data'

const OurClients = () => {
    const { title, description, ourClientsList } = ourClientsData
    const [range, setRange] = useState(0)
    const [finalRest, setFinalRest] = useState(null)
    const [initNumberShowingItems, setInitNumberShowingItems] = useState(2)
    const [initShowingItems, setInitShowingItems] = useState(initNumberShowingItems)
    const ourClientsContainer = useRef(null)
    const listItemsLength = ourClientsList.length
    const restOfListItems = ourClientsList.slice(initShowingItems).length

    const slidLeft = () => {
        if (initShowingItems > initNumberShowingItems) {
            ourClientsContainer.current.classList.add('slid-left')
            if (finalRest > restOfListItems) {
                setInitShowingItems(prev => prev = prev - finalRest)
            } else {
                setInitShowingItems(prev => prev = prev - initNumberShowingItems)
            }
            setRange(prev => prev = prev - initNumberShowingItems)
        }
        setTimeout(() => {
            ourClientsContainer.current.classList.remove('slid-left')
        }, 500)
    }

    const slidRight = () => {
        if (listItemsLength > initShowingItems) {
            ourClientsContainer.current.classList.add('slid-right')
            if (initNumberShowingItems > restOfListItems) {
                setInitShowingItems(prev => prev = prev + restOfListItems)
            } else {
                setInitShowingItems(prev => prev = prev + initNumberShowingItems)
            }
            setRange(initShowingItems)
        }
        setTimeout(() => {
            ourClientsContainer.current.classList.remove('slid-right')
        }, 500)
    }

    useEffect(() => {
        window.addEventListener('resize', () => handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange, 1, 2, 2));
        handleMediaChange(setInitNumberShowingItems, setInitShowingItems, setRange, 1, 2, 2);
        return () => window.removeEventListener('resize', handleMediaChange);
    }, []);

    useEffect(() => {
        findRest(initNumberShowingItems, listItemsLength, ourClientsList, setFinalRest)
    }, [initShowingItems])

    return (
        <div className={`our-clients ${margin_top} ${container} ${padding_x}`} id='our_clients'>
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
                    <OurClientsList
                        ourClientsContainer={ourClientsContainer}
                        content={ourClientsList.slice(range, initShowingItems)}
                    />
                }
            />
        </div>
    )
}

export default OurClients