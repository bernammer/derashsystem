import React, {
    useEffect
} from 'react'
import {
    useLazyGetUserQuery,
    useUpdateUserMutation
} from "./usersSlice"
import {
    useDispatch
} from "react-redux";
import {
    useForm
} from "react-hook-form";
import {
    Lightbox
} from "react-modal-image-responsive";
import {
    useParams
} from "react-router-dom";
import SadFace from "../../../images/sad-face.svg";
import {
    ClipLoader
} from "react-spinners";
import {
    Bounce,
    toast
} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = import.meta.env.VITE_LOCAL_API

const UsersListDetail = ({}) => {
    const {
        userId
    } = useParams();
    const [userTrigger, userResult, userLastPromiseInfo] = useLazyGetUserQuery()

    const [updateUser] = useUpdateUserMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        },
    } = useForm()

    const dispatch = useDispatch()

    useEffect(() => {
        toast.promise(
            userTrigger(userId)
            .unwrap(), {
                pending: `Fetching User detail`,
                success: `Fetched User detail successfully`,
                error: `Could not get User detail`,
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            })
    }, [userId]);


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

        toast.promise(updateUser({
            id: userResult.data.id,
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
        }).unwrap(), {
            pending: "Creating Project",
            success: `Successfully updated the record`,
            error: `Could not update record`,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
        })

    }


    if (userResult.isLoading || userResult.isUninitialized || userResult.isFetching) {
        return (
            <div className={`flex items-center justify-center h-screen`}>
            <ClipLoader
                className={`my-auto`}
                color={`#000000`}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
        )
    }

    if (userResult.isError) {

        toast.error("Could not fetch User detail", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
        })

        return (<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            <div className="max-w-2xl m-auto mt-16">
                                <div className="text-center px-4">
                                    <div className="inline-flex mb-8">
                                        <img src={SadFace} width="176" height="176"
                                             alt="404 illustration"/>
                                    </div>
                                    <div className="mb-6 text-3xl">Something Went Wrong</div>
                                </div>
                            </div>
                        </div>)
    }

    if (userResult.isSuccess) {
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
                    defaultValue={userResult.data.username ?? '-'}
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
                    defaultValue={userResult.data.firstName ?? '-'}
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
                    defaultValue={userResult.data.lastName ?? '-'}
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
                                     defaultValue={userResult.data.phone_number ?? '-'}
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
                    defaultValue={userResult.data.houseNumber ?? '-'}
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
                    defaultValue={userResult.data.nationality ?? '-'}
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
                    defaultValue={userResult.data.sex ?? '-'}
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
                    defaultValue={userResult.data.subCity ?? '-'}
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
                    defaultValue={userResult.data.wereda ?? '-'}
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
                    defaultValue={userResult.data.birthdate ?? '-'}
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
                                        defaultValue={userResult.data.vehicles ?? '-'}
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
                                        defaultValue={userResult.data.adminVerification ?? '-'}
                                        {...register('adminVerification', {
                                            required: {value: true, message: "Admin Verification  is required"},
}
                                        )}
                                    ></textarea>
                                </div>
                
                        </div>
                        <div className="flex">
                            <button className="ml-auto mt-auto btn bg-red-500 hover:bg-red-600 text-white"
                                    type="button"
                                    onClick={event => {
                                            history.back()
                                        }
                                    }
                            >
                                <span className="hidden xs:block ml-1">Cancel</span>
                            </button>
                            <button className="ml-2 mt-auto btn bg-indigo-500 hover:bg-indigo-600 text-white"
                                    type="submit"
                            >
                                <span className="hidden xs:block ml-1">Update User </span>
                            </button>
                        </div>
                    </form>
                </div>
        </>

        );
    }


}
export default UsersListDetail