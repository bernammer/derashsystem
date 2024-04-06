import apiSlice from "../../../api/apiSlice";

const vehiclesApiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: ['Vehicles']
})

const vehiclesApiWithTaggedEndpoint = vehiclesApiWithTag.injectEndpoints({

    endpoints: builder => ({

        createVehicle: builder.mutation({
            query: (payload) => ({
                url: '/vehicles',
                method: 'POST',
                data: payload,
            }),
            invalidatesTags: ['Vehicles'],
        }),

        getVehicles: builder.query({
            query: () => ({
                url: '/vehicles'
            }),
            providesTags: ['Vehicles'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

        getVehicle: builder.query({
            query: (id) => ({
                url: `/vehicles/${id}`
            }),
            providesTags: ['Vehicles'],
            transformResponse: responseData => {
                // console.log(responseData['data'])
                return responseData.data
            },
        }, ),

        updateVehicle: builder.mutation({
            query: ({
                id,
                ...payload
            }) => ({
                url: `/vehicles/${id}`,
                method: 'PUT',
                data: payload,
            }),
            invalidatesTags: ['Vehicles'],
        }),

        destroyVehicle: builder.mutation({
            query: ({
                id
            }) => ({
                url: `/vehicles/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Vehicles'],
        }),

        searchIdPlateNumberChassisNumberMotorNumber: builder.query({
            query: (keyWord) => ({
                url: `/vehicles/searchIdPlateNumberChassisNumberMotorNumber/${keyWord}`
            }),
            providesTags: ['Vehicles'],
            transformResponse: responseData => {
                return responseData.data
            },
        }, ),

    })
})

export const {
    useCreateVehicleMutation,
    useLazyCreateVehicleMutation,
    useGetVehiclesQuery,
    useLazyGetVehiclesQuery,
    useGetVehicleQuery,
    useLazyGetVehicleQuery,
    useUpdateVehicleMutation,
    useLazyUpdateVehicleMutation,
    useDestroyVehicleMutation,
    useLazyDestroyVehicleMutation,
    useLazySearchIdPlateNumberChassisNumberMotorNumberQuery,

} = vehiclesApiWithTaggedEndpoint