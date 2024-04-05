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
                name,
                email,
                phone,
                age,
            } = formData;

            toast.promise(updateUser({
                id: userResult.data.id,
                name,
                email,
                phone,
                age,
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
                htmlFor = "name" >
                    Name  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="name"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={userResult.data.name ?? '-'}
                    name="name"
                    {...register('name', {
                            required: {value: true, message: "Name  is required"},

                        }
                    )}
                />
                {errors.name && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.name.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "email" >
                    Email  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="email"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={userResult.data.email ?? '-'}
                    name="email"
                    {...register('email', {
                            required: {value: true, message: "Email  is required"},
pattern: {value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
message: 'You must provide a valid email'},

                        }
                    )}
                />
                {errors.email && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.email.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "phone" >
                    Phone  
                    </label>
                <input
                    id="phone"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={userResult.data.phone ?? '-'}
                    name="phone"
                    {...register('phone', {
                            required: {value: false},

                        }
                    )}
                />
                {errors.phone && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.phone.message}</span></p>}
            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="age">
                                    Age  
                                </label>
                                <input 
                                    id="age" 
                                    className="form-input full ml-2 "
                                     type="number"
                                     step="any"
                                     defaultValue={userResult.data.age ?? '0'}
                                     name="age"
                                       {...register('age', {
                                            required: {value: false},
}
                                     )} 
                                />
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