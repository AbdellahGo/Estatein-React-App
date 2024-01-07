import React from 'react'
import { container, padding_x } from '../../classes'
import { PropertyDetails, PropertyImages } from '../../components'

const PropertyDetailsHeader = ({propertyDetails}) => {
    return (
        <div className={`property-details-header ${container} ${padding_x} xxl:mt-120 lg:mt-80 mt-60`}>
            <PropertyImages content={propertyDetails}/>
            <PropertyDetails content={propertyDetails}/>
        </div>
    )
}

export default PropertyDetailsHeader