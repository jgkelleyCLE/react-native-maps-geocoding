import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tentApi = createApi({
    reducerPath: 'tentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tentlifymern-production.up.railway.app' }),
    tagTypes: ['Tents'],
    endpoints: (builder) => ({
        getAllTents: builder.query({
            query: ()=> ({
                url: '/api/tents',
                method: 'GET'
            }),
            providesTags: ["Tents"]
        }),
        getTent: builder.query({
            query: (id) => ({
                url: `/api/tents/${id}`,
                method: 'GET'
            }),
            providesTags: ["Tents"]
        }),
        
    })
})

export const { useGetAllTentsQuery, useGetTentQuery } = tentApi