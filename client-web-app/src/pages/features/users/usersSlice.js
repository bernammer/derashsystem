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

        getUsersIncludeTrashed: builder.query({
            query: () => ({
                url: '/users/includeTrashed'
            }),
            providesTags: ['Users'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        getUsersTrashed: builder.query({
            query: () => ({
                url: '/users/trashed'
            }),
            providesTags: ['Users'],
            transformResponse: responseData => {
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

        deleteUser: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/users/${id}/force`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'],
        }),

        restoreUser: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/users/restore/${id}/`,
                method: 'POST',
            }),
            invalidatesTags: ['Users'],
        }, ),

        toggleStatus: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/users/${id}/toggleStatus`,
                method: 'POST',
            }),
            invalidatesTags: ['Users'],
        }),

        counterViewCounter: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/users/${id}/viewCounterCounter`,
                method: 'POST',
            }),
            invalidatesTags: ['Users'],
        }),

        searchNameEmail: builder.query({
            query: (keyWord) => ({
                url: `/users/searchNameEmail/${keyWord}`
            }),
            providesTags: ['Users'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        turnToTrueStatus: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/users/${id}/turnToTrueStatus`,
                method: 'POST',
            }),
            invalidatesTags: ['Users'],
        }),

        turnToFalseStatus: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/users/${id}/turnToFalseStatus`,
                method: 'POST',
            }),
            invalidatesTags: ['Users'],
        }),

        checkRecordEmail: builder.query({
            query: (keyWord) => ({
                url: `/users/checkRecordEmail/${keyWord}`
            }),
            providesTags: ['Users'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
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
    useGetUsersIncludeTrashedQuery,
    useLazyGetUsersIncludeTrashedQuery,
    useGetUsersTrashedQuery,
    useLazyGetUsersTrashedQuery,
    useUpdateUserMutation,
    useLazyUpdateUserMutation,
    useDestroyUserMutation,
    useLazyDestroyUserMutation,
    useDeleteUserMutation,
    useLazyDeleteUserMutation,
    useRestoreUserMutation,
    useLazyRestoreUserMutation,
    useToggleStatusMutation,
    useLazyToggleStatusMutation,
    useCounterViewCounterMutation,
    useLazyCounterViewCounterMutation,
    useLazySearchNameEmailQuery,
    useTurnToTrueStatusMutation,
    useLazyTurnToTrueStatusMutation,
    useTurnToFalseStatusMutation,
    useLazyTurnToFalseStatusMutation,
    useLazyCheckRecordEmailQuery,

} = usersApiWithTaggedEndpoint