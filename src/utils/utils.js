export const findRest = (numShowingItems, listLen, itemsList, finalRestF) => {
    for (let i = 0; i < listLen; i += numShowingItems) {
        let restCalculated = itemsList.slice(i).length
        if (numShowingItems > restCalculated) {
            finalRestF(restCalculated)
        } else {
            finalRestF(0)
        }
    }
}

export const handleMediaChange = (initNumberShowingItemsF, initShowingItemsF, RangeF) => {
    const mediumScreen = window.matchMedia('(max-width: 991.98px) and (min-width: 768px) ').matches
    const smallScreen = window.matchMedia('(max-width: 767.98px)').matches
    if (mediumScreen) {
        initNumberShowingItemsF(2)
        initShowingItemsF(2)
        RangeF(0)
    } else if (smallScreen) {
        initNumberShowingItemsF(1)
        initShowingItemsF(1)
        RangeF(0)
    } else {
        initNumberShowingItemsF(3)
        initShowingItemsF(3)
        RangeF(0)
    }
}
