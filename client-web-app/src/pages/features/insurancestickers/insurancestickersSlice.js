import apiSlice from "../../../api/apiSlice";

const insurancestickersApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Insurancestickers']
})
const insurancesticker = 'insuracesticker'
const insurancestickersApiWithTaggedEndpoint = insurancestickersApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createInsurancesticker: builder.mutation({
            query: (payload) => ({
                url: `/${insurancesticker}/create`,
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Insurancestickers'],
        }),

        getInsurancestickers: builder.query({
            query: () => ({
                url: `/${insurancesticker}/getAll`
            }),
            providesTags: ['Insurancestickers'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        getInsurancesticker: builder.query({
            query: (id) => ({
                url: `/${insurancesticker}/${id}`
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
                url: `/${insurancesticker}/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Insurancestickers'],
        }),

        destroyInsurancesticker: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/${insurancesticker}/${id}`,
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