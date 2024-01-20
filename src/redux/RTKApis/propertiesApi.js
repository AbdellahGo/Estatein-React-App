import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




const baseUrl = 'https://zoopla.p.rapidapi.com/'

const headers = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY_ZOOPLA,
    'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
}


export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers }),
    endpoints: (builder) => ({
        getPropertiesList: builder.query({
            query: () => 'properties/list?area=Oxford, Oxfordshire&listing_status=sale'
        }),
        getPropertiesListByFilters: builder.query({
            query: ({ area, type, minimum_price, maximum_price, area_min, area_max, status }) => {
                return `properties/list?area=${area}&listing_status=${status}&property_type=${type}&floor_area_max=${area_max}&floor_area_min=${area_min}&maximum_price=${maximum_price}&minimum_price=${minimum_price}`
            }

        }),
        getPropertyPyId: builder.query({
            query: (id) => `properties/list?listing_id=${id}`
        }),
        getAutoComplete: builder.query({
            query: (searchTerm) => `auto-complete?search_term=${searchTerm}`
        }),
        getPropertiesListBySearchTerm: builder.query({
            query: (searchTerm) => `properties/list?area=${searchTerm}`
        }),
    })
})


export const { useGetPropertiesListQuery, useGetPropertyPyIdQuery, useGetPropertiesListByFiltersQuery, useGetAutoCompleteQuery, useGetPropertiesListBySearchTermQuery } = propertiesApi