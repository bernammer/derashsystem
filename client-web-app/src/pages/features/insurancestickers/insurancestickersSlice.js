import apiSlice from "../../../api/apiSlice";

const insurancestickersApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Insurancestickers']
})

const insurancestickersApiWithTaggedEndpoint = insurancestickersApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createInsurancesticker: builder.mutation({
            query: (payload) => ({
                url: '/insurancestickers',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Insurancestickers'],
        }),

        getInsurancestickers: builder.query({
            query: () => ({
                url: '/insurancestickers'
            }),
            providesTags: ['Insurancestickers'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        getInsurancesticker: builder.query({
            query: (id) => ({
                url: `/insurancestickers/${id}`
            }),
            providesTags: ['Insurancestickers'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData.data
            },
        }, ),

        updateInsurancesticker: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/insurancestickers/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Insurancestickers'],
        }),

        destroyInsurancesticker: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/insurancestickers/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Insurancestickers'],
        }),

    })
})

export const {
    useCreateInsurancestickerMutation,
    useLazyCreateInsurancestickerMutation,
    useGetInsurancestickersQuery,
    useLazyGetInsurancestickersQuery,
    useGetInsurancestickerQuery,
    useLazyGetInsurancestickerQuery,
    useUpdateInsurancestickerMutation,
    useLazyUpdateInsurancestickerMutation,
    useDestroyInsurancestickerMutation,
    useLazyDestroyInsurancestickerMutation,

} = insurancestickersApiWithTaggedEndpoint