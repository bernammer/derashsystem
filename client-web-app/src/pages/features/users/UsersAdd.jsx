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
            houseNumber,
            nationality,
            sex,
            subCity,
            wereda,
            birthdate,
            vehicles,
            adminVerification,
        } = formData;

        toast.promise(createUser({

                    username,
                    firstName,
                    lastName,
                    phone_number,
                    houseNumber,
                    nationality,
                    sex,
                    subCity,
                    wereda,
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
                htmlFor = "nationality" >
                    Nationality  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="nationality"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="nationality"
                    {...register('nationality', {
                            required: {value: true, message: "Nationality  is required"},

                        }
                    )}
                />
                {errors.nationality && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.nationality.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "sex" >
                    Sex  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="sex"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="sex"
                    {...register('sex', {
                            required: {value: true, message: "Sex  is required"},

                        }
                    )}
                />
                {errors.sex && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.sex.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "subCity" >
                    Sub City  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="subCity"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="subCity"
                    {...register('subCity', {
                            required: {value: true, message: "Sub City  is required"},

                        }
                    )}
                />
                {errors.subCity && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.subCity.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "wereda" >
                    Wereda  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="wereda"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="wereda"
                    {...register('wereda', {
                            required: {value: true, message: "Wereda  is required"},

                        }
                    )}
                />
                {errors.wereda && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.wereda.message}</span></p>}
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
                
                            <div className="pb-5">
                                    <label 
                                    className="block text-sm font-medium mb-1" 
                                    htmlFor="vehicles">
                                        Vehicles  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="vehicles"
                                        defaultValue={''}
                                        {...register('vehicles', {
                                            required: {value: true, message: "Vehicles  is required"},
}
                                        )}
                                    ></textarea>
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