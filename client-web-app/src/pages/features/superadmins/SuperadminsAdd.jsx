import React, {
    useState
} from 'react'
import {
    useForm
} from "react-hook-form";
import {
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
} from "./superadminsSlice";
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

const SuperadminsAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)



    const dispatch = useDispatch()
    const [createSuperadmin, superadminResult, superadminResponsePromise] = useCreateSuperadminMutation()
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
            firstName,
            lastName,
            phone_number,
            username,
        } = formData;

        toast.promise(createSuperadmin({

                    firstName,
                    lastName,
                    phone_number,
                    username,
                })
                .unwrap(), {
                    pending: `Adding a Superadmin `,
                    success: `Successfully added Superadmin `,
                    error: `Could not add Superadmin `,
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
        return (<Navigate to={`/superadmin`} replace={false}/>)
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
                                <span className="hidden xs:block ml-2">Add Superadmin</span>
                            </button>
                        </div>
                    </form>
                </div>
              
        </>
    )
}

export default SuperadminsAdd