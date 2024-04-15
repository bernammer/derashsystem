import '@reduxjs/toolkit'
import apiSlice from "../../api/apiSlice";

const authApiWithTag = apiSlice.enhanceEndpoints({addTagTypes: ['Authentication']})

const authApiWithTaggedEndpoint = authApiWithTag.injectEndpoints({
    endpoints: builder => ({
        signIn: builder.mutation({
            query(payload) {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    data: payload,
                    invalidatesTags: ['Authentication'],
                }
            },
            transformResponse(baseQueryReturnValue, meta, arg) {
                localStorage.setItem('token', baseQueryReturnValue.token)
                location.href = import.meta.env.VITE_LOCAL_API
                return baseQueryReturnValue
            },
            invalidatesTags: ['Authentication']
        }),
        employeeSignIn: builder.mutation({
            query(payload) {
                return {
                    url: '/employees/login',
                    method: 'POST',
                    data: payload,
                    invalidatesTags: ['Authentication'],
                }
            },
            transformResponse(baseQueryReturnValue, meta, arg) {
                localStorage.setItem('token', baseQueryReturnValue.token)
                const company = baseQueryReturnValue.employee.company
                localStorage.setItem('companyType', company.type)
                localStorage.setItem('companyName', company.name)
                localStorage.setItem('companyId', company._id)
                localStorage.setItem('isCompanyAdmin',  baseQueryReturnValue.employee.isCompanyAdmin)

                location.href = import.meta.env.VITE_LOCAL_API + '/dashboard'

                // console.log(baseQueryReturnValue)

                return baseQueryReturnValue
            },
            invalidatesTags: ['Authentication']
        }),
        superAdminSignIn: builder.mutation({
            query(payload) {
                return {
                    url: '/superadmins/login',
                    method: 'POST',
                    data: payload,
                    invalidatesTags: ['Authentication'],
                }
            },
            transformResponse(baseQueryReturnValue, meta, arg) {
                localStorage.setItem('token', baseQueryReturnValue.token)
                location.href = import.meta.env.VITE_LOCAL_API
                return baseQueryReturnValue
            },
            invalidatesTags: ['Authentication']
        }),
        signUp: builder.mutation({
            query: (payload) => ({
                url: '/auth/register',
                method: 'POST',
                body: payload,
                invalidatesTags: ['Authentication'],
            }),
        }),
        signOut: builder.mutation({
            query: (payload) => ({
                url: '/auth/logout',
                method: 'POST',
                invalidatesTags: ['Authentication'],
            }),
        }),
        forgotPassword: builder.mutation({
            query: (payload) => ({
                url: '/auth/reset_password',
                method: 'POST',
                body: payload,
                invalidatesTags: ['Authentication'],
            }),
        }),
        // getAllUsers: builder.query({
        //     query: () => ({url: '/users',}),
        //     transformResponse: (response, meta, arg) => response.users,
        //     transformErrorResponse: (response, metadata, arg) => response.status,
        //     prepareHandlers: ()=>{},
        //     overrideExisting: true,
        // }),
    })
})

export const {
    useSignUpMutation,
    useSignInMutation,
    useEmployeeSignInMutation,
    useSuperAdminSignInMutation,
    useSignOutMutation,
    useForgotPasswordMutation
} = authApiWithTaggedEndpoint
