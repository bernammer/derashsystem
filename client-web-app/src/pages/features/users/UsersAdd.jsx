import React, {
    useState
} from 'react'
import {
    useForm
} from "react-hook-form";
import {
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
} from "./usersSlice";
import {
    useDispatch
} from "react-redux";
import {
    SketchPicker
} from "react-color";
import {
    Navigate
} from "react-router-dom";
import {
    Bounce,
    toast
} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
    CKEditor
} from "@ckeditor/ckeditor5-react";

const UsersAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)



    const dispatch = useDispatch()
    const [createUser, userResult, userResponsePromise] = useCreateUserMutation()
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        },
    } = useForm();

    const onFormSubmit = async (formData) => {
        const {
            username,
            firstName,
            lastName,
            phone_number,
            driverLicense,
            city,
            country,
            houseNumber,
            residentAddress,
            birthdate,
            vehicles,
            adminVerification,
        } = formData;

        toast.promise(createUser({

                    username,
                    firstName,
                    lastName,
                    phone_number,
                    driverLicense,
                    city,
                    country,
                    houseNumber,
                    residentAddress,
                    birthdate,
                    vehicles,
                    adminVerification,
                })
                .unwrap(), {
                    pending: `Adding a User `,
                    success: `Successfully added User `,
                    error: `Could not add User `,
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                })
            .then(result => {
                setRedirectToList(true)
            })
    }

    if (redirectToList) {
        return (<Navigate to={`/user`} replace={false}/>)
    }

    return (
        <>
            
                
                <div className="border-t border-slate-200">
                    <form className="row p-3" onSubmit={handleSubmit(onFormSubmit)}>

                        <div className="grid grid-cols-2 gap-x-5">
                        
                            
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "username" >
                    Username  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="username"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="username"
                    {...register('username', {
                            required: {value: true, message: "Username  is required"},

                        }
                    )}
                />
                {errors.username && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.username.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "firstName" >
                    First Name  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="firstName"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="firstName"
                    {...register('firstName', {
                            required: {value: true, message: "First Name  is required"},

                        }
                    )}
                />
                {errors.firstName && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.firstName.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "lastName" >
                    Last Name  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="lastName"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="lastName"
                    {...register('lastName', {
                            required: {value: true, message: "Last Name  is required"},

                        }
                    )}
                />
                {errors.lastName && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.lastName.message}</span></p>}
            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="phone_number">
                                    Phone Number  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="phone_number" 
                                    className="form-input w-full ml-2 "
                                     type="text"
                                     defaultValue={''}
                                     name="phone_number"
                                       {...register('phone_number', {
                                            required: {value: true, message: "Phone Number  is required"},
}
                                     )} 
                                />
                            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "driverLicense" >
                    Driver License  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="driverLicense"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="driverLicense"
                    {...register('driverLicense', {
                            required: {value: true, message: "Driver License  is required"},

                        }
                    )}
                />
                {errors.driverLicense && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.driverLicense.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "city" >
                    City  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="city"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="city"
                    {...register('city', {
                            required: {value: true, message: "City  is required"},

                        }
                    )}
                />
                {errors.city && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.city.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "country" >
                    Country  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="country"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="country"
                    {...register('country', {
                            required: {value: true, message: "Country  is required"},

                        }
                    )}
                />
                {errors.country && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.country.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "houseNumber" >
                    House Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="houseNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="houseNumber"
                    {...register('houseNumber', {
                            required: {value: true, message: "House Number  is required"},

                        }
                    )}
                />
                {errors.houseNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.houseNumber.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "residentAddress" >
                    Resident Address  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="residentAddress"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="residentAddress"
                    {...register('residentAddress', {
                            required: {value: true, message: "Resident Address  is required"},

                        }
                    )}
                />
                {errors.residentAddress && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.residentAddress.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "birthdate" >
                    Birthdate  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="birthdate"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="birthdate"
                    {...register('birthdate', {
                            required: {value: true, message: "Birthdate  is required"},

                        }
                    )}
                />
                {errors.birthdate && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.birthdate.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "vehicles" >
                    Vehicles  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="vehicles"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="vehicles"
                    {...register('vehicles', {
                            required: {value: true, message: "Vehicles  is required"},

                        }
                    )}
                />
                {errors.vehicles && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.vehicles.message}</span></p>}
            </div>
                
                            <div className="pb-5">
                                    <label 
                                    className="block text-sm font-medium mb-1" 
                                    htmlFor="adminVerification">
                                        Admin Verification  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="adminVerification"
                                        defaultValue={''}
                                        {...register('adminVerification', {
                                            required: {value: true, message: "Admin Verification  is required"},
}
                                        )}
                                    ></textarea>
                                </div>
                
                        
                        </div>
                        <div className="flex">
                        <button
                            className="ml-auto mt-auto btn btn-sm border-red-500 hover:bg-red-600 text-red-400 hover:text-white"
                            type="button"
                            onClick={(event) => {
                                history.back()
                            }}
                        >
                            <span className="hidden xs:block ml-0">Cancel</span>
                        </button>
                            <button className="ml-2 mt-auto btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
                                    type="submit"
                            >
                                <span className="hidden xs:block ml-2">Add User</span>
                            </button>
                        </div>
                    </form>
                </div>
              
        </>
    )
}

export default UsersAdd