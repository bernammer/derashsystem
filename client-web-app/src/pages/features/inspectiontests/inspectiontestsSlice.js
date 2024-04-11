import apiSlice from "../../../api/apiSlice";

const inspectiontestsApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Inspectiontests']
})

const inspectiontestsApiWithTaggedEndpoint = inspectiontestsApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createInspectiontest: builder.mutation({
            query: (payload) => ({
                url: '/inspection/inspectiontest',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Inspectiontests'],
        }),

        getInspectiontests: builder.query({
            query: () => ({
                url: '/inspection/inspectiontests'
            }),
            providesTags: ['Inspectiontests'],
            transformResponse: responseData => {
                return responseData
            },
        }, ),

        getInspectiontest: builder.query({
            query: (id) => ({
                url: `/inspection/inspectiontest/${id}`
            }),
            providesTags: ['Inspectiontests'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData
            },
        }, ),

        updateInspectiontest: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/inspection/inspectiontest/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Inspectiontests'],
        }),

        destroyInspectiontest: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/inspectiontests/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Inspectiontests'],
        }),

    })
})

export const {
    useCreateInspectiontestMutation,
    useLazyCreateInspectiontestMutation,
    useGetInspectiontestsQuery,
    useLazyGetInspectiontestsQuery,
    useGetInspectiontestQuery,
    useLazyGetInspectiontestQuery,
    useUpdateInspectiontestMutation,
    useLazyUpdateInspectiontestMutation,
    useDestroyInspectiontestMutation,
    useLazyDestroyInspectiontestMutation,

} = inspectiontestsApiWithTaggedEndpoint