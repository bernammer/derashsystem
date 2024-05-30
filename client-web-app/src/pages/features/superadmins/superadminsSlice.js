import apiSlice from "../../../api/apiSlice";

const superadminsApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Superadmins']
})

const superadminsApiWithTaggedEndpoint = superadminsApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createSuperadmin: builder.mutation({
            query: (payload) => ({
                url: '/superadmins',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Superadmins'],
        }),

        getSuperadmins: builder.query({
            query: () => ({
                url: '/superadmins'
            }),
            providesTags: ['Superadmins'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        getSuperadmin: builder.query({
            query: (id) => ({
                url: `/superadmins/${id}`
            }),
            providesTags: ['Superadmins'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData.data
            },
        }, ),

        updateSuperadmin: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/superadmins/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Superadmins'],
        }),

        destroySuperadmin: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/superadmins/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Superadmins'],
        }),

        searchIdFirstNameLastNamePhoneNumberUsername: builder.query({
            query: (keyWord) => ({
                url: `/superadmins/searchIdFirstNameLastNamePhoneNumberUsername/${keyWord}`
            }),
            providesTags: ['Superadmins'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

    })
})

export const {
    useCreateSuperadminMutation,
    useLazyCreateSuperadminMutation,
    useGetSuperadminsQuery,
    useLazyGetSuperadminsQuery,
    useGetSuperadminQuery,
    useLazyGetSuperadminQuery,
    useUpdateSuperadminMutation,
    useLazyUpdateSuperadminMutation,
    useDestroySuperadminMutation,
    useLazyDestroySuperadminMutation,
    useLazySearchIdFirstNameLastNamePhoneNumberUsernameQuery,

} = superadminsApiWithTaggedEndpoint