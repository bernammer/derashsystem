import apiSlice from "../../../api/apiSlice";

const bolostickersApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Bolostickers']
})

const bolostickersApiWithTaggedEndpoint = bolostickersApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createBolosticker: builder.mutation({
            query: (payload) => ({
                url: '/bolostickers',
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
                return responseData.data
            },
        }, ),

        getBolosticker: builder.query({
            query: (id) => ({
                url: `/bolostickers/${id}`
            }),
            providesTags: ['Bolostickers'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData.data
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

} = bolostickersApiWithTaggedEndpoint