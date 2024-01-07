import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




const baseUrl = 'https://zoopla.p.rapidapi.com/properties/list'

const headers = {
    'X-RapidAPI-Key': '49f3c31663mshe1dcc885ed4af90p16d824jsnef379fc22904',
    'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
}


export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers }),
    endpoints: (builder) => ({
        getPropertiesList: builder.query({
            query: () => '?area=Oxford, Oxfordshire&listing_status=sale'
        }),
        getPropertyPyId: builder.query({
            query: (id) => `?listing_id=${id}`
        })
    })
})



export const { useGetPropertiesListQuery, useGetPropertyPyIdQuery } = propertiesApi