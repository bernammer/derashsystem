import apiSlice from "../../../api/apiSlice";

const usersApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Users']
})

const usersApiWithTaggedEndpoint = usersApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createUser: builder.mutation({
            query: (payload) => ({
                url: '/users',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Users'],
        }),

        getUsers: builder.query({
            query: () => ({
                url: '/users'
            }),
            providesTags: ['Users'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        getUser: builder.query({
            query: (id) => ({
                url: `/users/${id}`
            }),
            providesTags: ['Users'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData.data
            },
        }, ),

        updateUser: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Users'],
        }),

        destroyUser: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'],
        }),

        searchIdUsernameFirstNameLastNamePhoneNumberDriverLicenseHouseNumberResidentAddressBirthdate: builder.query({
            query: (keyWord) => ({
                url: `/users/searchIdUsernameFirstNameLastNamePhoneNumberDriverLicenseHouseNumberResidentAddressBirthdate/${keyWord}`
            }),
            providesTags: ['Users'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

    })
})

export const {
    useCreateUserMutation,
    useLazyCreateUserMutation,
    useGetUsersQuery,
    useLazyGetUsersQuery,
    useGetUserQuery,
    useLazyGetUserQuery,
    useUpdateUserMutation,
    useLazyUpdateUserMutation,
    useDestroyUserMutation,
    useLazyDestroyUserMutation,
    useLazySearchIdUsernameFirstNameLastNamePhoneNumberDriverLicenseHouseNumberResidentAddressBirthdateQuery,

} = usersApiWithTaggedEndpoint