import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tentlifymern-production.up.railway.app' }),
    tagTypes: ['Jobs'],
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: ()=> ({
                url: '/api/jobs',
                method: 'GET'
            }),
            providesTags: ['Jobs']
        })
    })
})

export const { useGetAllJobsQuery } = jobApi