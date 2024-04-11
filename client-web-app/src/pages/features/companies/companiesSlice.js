import apiSlice from "../../../api/apiSlice";

const companiesApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Companies']
})

const companiesApiWithTaggedEndpoint = companiesApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createCompany: builder.mutation({
            query: (payload) => ({
                url: '/companies',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Companies'],
        }),

        getCompanies: builder.query({
            query: () => ({
                url: '/companies/getAll'
            }),
            providesTags: ['Companies'],
            transformResponse: responseData => {
                return responseData
            },
        }, ),

        getCompany: builder.query({
            query: (id) => ({
                url: `/companies/${id}`
            }),
            providesTags: ['Companies'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData.data
            },
        }, ),

        updateCompany: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/companies/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Companies'],
        }),

        destroyCompany: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/companies/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Companies'],
        }),

        searchIdNameLocation: builder.query({
            query: (keyWord) => ({
                url: `/companies/searchIdNameLocation/${keyWord}`
            }),
            providesTags: ['Companies'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

    })
})

export const {
    useCreateCompanyMutation,
    useLazyCreateCompanyMutation,
    useGetCompaniesQuery,
    useLazyGetCompaniesQuery,
    useGetCompanyQuery,
    useLazyGetCompanyQuery,
    useUpdateCompanyMutation,
    useLazyUpdateCompanyMutation,
    useDestroyCompanyMutation,
    useLazyDestroyCompanyMutation,
    useLazySearchIdNameLocationQuery,

} = companiesApiWithTaggedEndpoint