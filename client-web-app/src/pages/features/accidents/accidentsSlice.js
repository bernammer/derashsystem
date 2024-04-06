import apiSlice from "../../../api/apiSlice";

const accidentsApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Accidents']
})

const accidentsApiWithTaggedEndpoint = accidentsApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createAccident: builder.mutation({
            query: (payload) => ({
                url: '/accidents',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Accidents'],
        }),

        getAccidents: builder.query({
            query: () => ({
                url: '/accidents'
            }),
            providesTags: ['Accidents'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        getAccident: builder.query({
            query: (id) => ({
                url: `/accidents/${id}`
            }),
            providesTags: ['Accidents'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData.data
            },
        }, ),

        updateAccident: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/accidents/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Accidents'],
        }),

        destroyAccident: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/accidents/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Accidents'],
        }),

        searchIdNameLocation: builder.query({
            query: (keyWord) => ({
                url: `/accidents/searchIdNameLocation/${keyWord}`
            }),
            providesTags: ['Accidents'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

    })
})

export const {
    useCreateAccidentMutation,
    useLazyCreateAccidentMutation,
    useGetAccidentsQuery,
    useLazyGetAccidentsQuery,
    useGetAccidentQuery,
    useLazyGetAccidentQuery,
    useUpdateAccidentMutation,
    useLazyUpdateAccidentMutation,
    useDestroyAccidentMutation,
    useLazyDestroyAccidentMutation,
    useLazySearchIdNameLocationQuery,

} = accidentsApiWithTaggedEndpoint