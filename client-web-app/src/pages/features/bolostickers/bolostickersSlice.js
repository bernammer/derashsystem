import apiSlice from "../../../api/apiSlice";

const bolostickersApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Bolostickers']
})

const bolostickersApiWithTaggedEndpoint = bolostickersApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createBolosticker: builder.mutation({
            query: (payload) => ({
                url: '/bolo/bolostickers',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Bolostickers'],
        }),

        getBolostickers: builder.query({
            query: () => ({
                url: '/bolo/bolostickers'
            }),
            providesTags: ['Bolostickers'],
            transformResponse: responseData => {
                return responseData
            },
        }, ),

        updateBolosticker: builder.mutation({
            query: ({
                        id,
                        ...payload
                    }) => ({
                url: `/bolo/bolostickers/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Bolostickers'],
        }),

        getBolosticker: builder.query({
            query: (id) => ({
                url: `/bolo/bolostickers/${id}`
            }),
            providesTags: ['Bolostickers'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData
            },
        }, ),

    })
})

export const {
    useCreateBolostickerMutation,
    useLazyCreateBolostickerMutation,
    useGetBolostickersQuery,
    useLazyGetBolostickersQuery,
    useGetBolostickerQuery,
    useLazyGetBolostickerQuery,
    useUpdateBolostickerMutation,

} = bolostickersApiWithTaggedEndpoint