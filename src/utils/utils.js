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

export const handleMediaChange = (initNumberShowingItemsF, initShowingItemsF, RangeF, numShowingItemsSmall, numShowingItemsMedium, numShowingItemsLarge) => {
    const mediumScreen = window.matchMedia('(max-width: 991.98px) and (min-width: 768px) ').matches
    const smallScreen = window.matchMedia('(max-width: 767.98px)').matches
    if (mediumScreen) {
        initNumberShowingItemsF(numShowingItemsMedium)
        initShowingItemsF(numShowingItemsMedium)
        RangeF(0)
    } else if (smallScreen) {
        initNumberShowingItemsF(numShowingItemsSmall)
        initShowingItemsF(numShowingItemsSmall)
        RangeF(0)
    } else {
        initNumberShowingItemsF(numShowingItemsLarge)
        initShowingItemsF(numShowingItemsLarge)
        RangeF(0)
    }
}
