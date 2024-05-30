import apiSlice from "../../../api/apiSlice";

const employeesApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Employees']
})

const employeesApiWithTaggedEndpoint = employeesApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createEmployee: builder.mutation({
            query: (payload) => ({
                url: '/employees/create',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Employees'],
        }),

        getEmployees: builder.query({
            query: () => ({
                url: '/employees'
            }),
            providesTags: ['Employees'],
            transformResponse: responseData => {
                console.log(responseData)
                return responseData
            },
        }, ),

        getEmployee: builder.query({
            query: (id) => ({
                url: `/employees/${id}`
            }),
            providesTags: ['Employees'],
            transformResponse: responseData => {
                console.log(responseData)
                return responseData
            },
        }, ),

        updateEmployee: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/employees/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Employees'],
        }),

        destroyEmployee: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/employees/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Employees'],
        }),

        toggleAdmin: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/employees/${id}/toggle-admin`,
                method: 'POST',
            }),
            invalidatesTags: ['Employees'],
        }),

        checkUsername: builder.query({
            query: (username) => ({
                url: `/employees/employeeExist/${username}`
            }),
            providesTags: ['Employees'],
            transformResponse: responseData => {
                console.log(responseData)
                return responseData
            },
        }, ),

    })
})

export const {
    useCreateEmployeeMutation,
    useLazyCreateEmployeeMutation,
    useGetEmployeesQuery,
    useLazyGetEmployeesQuery,
    useGetEmployeeQuery,
    useLazyGetEmployeeQuery,
    useUpdateEmployeeMutation,
    useLazyUpdateEmployeeMutation,
    useDestroyEmployeeMutation,
    useLazyDestroyEmployeeMutation,
    useToggleAdminMutation,
    useLazyCheckUsernameQuery,

} = employeesApiWithTaggedEndpoint