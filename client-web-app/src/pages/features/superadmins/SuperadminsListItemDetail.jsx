import React, {
    useEffect
} from 'react'
import {
    useLazyGetSuperadminQuery,
    useUpdateSuperadminMutation
} from "./superadminsSlice"
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

const SuperadminsListDetail = ({}) => {
    const {
        superadminId
    } = useParams();
    const [superadminTrigger, superadminResult, superadminLastPromiseInfo] = useLazyGetSuperadminQuery()

    const [updateSuperadmin] = useUpdateSuperadminMutation()

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
            superadminTrigger(superadminId)
            .unwrap(), {
                pending: `Fetching Superadmin detail`,
                success: `Fetched Superadmin detail successfully`,
                error: `Could not get Superadmin detail`,
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
    }, [superadminId]);


    const onFormSubmit = async (formData) => {
        const {
            firstName,
            lastName,
            phone_number,
            username,
        } = formData;

        toast.promise(updateSuperadmin({
            id: superadminResult.data.id,
            firstName,
            lastName,
            phone_number,
            username,
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


    if (superadminResult.isLoading || superadminResult.isUninitialized || superadminResult.isFetching) {
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

    if (superadminResult.isError) {

        toast.error("Could not fetch Superadmin detail", {
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

    if (superadminResult.isSuccess) {
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
                    defaultValue={superadminResult.data.firstName ?? '-'}
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
                    defaultValue={superadminResult.data.lastName ?? '-'}
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
                                     defaultValue={superadminResult.data.phone_number ?? '-'}
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
                    defaultValue={superadminResult.data.username ?? '-'}
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
                                <span className="hidden xs:block ml-1">Update Superadmin </span>
                            </button>
                        </div>
                    </form>
                </div>
        </>

        );
    }


}
export default SuperadminsListDetail