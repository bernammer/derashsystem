import React, {
    useEffect
} from 'react'
import {
    useLazyGetCompanyQuery,
    useUpdateCompanyMutation
} from "./companiesSlice"
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

const CompaniesListDetail = ({}) => {
    const {
        companyId
    } = useParams();
    const [companyTrigger, companyResult, companyLastPromiseInfo] = useLazyGetCompanyQuery()

    const [updateCompany] = useUpdateCompanyMutation()

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
            companyTrigger(companyId)
            .unwrap(), {
                pending: `Fetching Company detail`,
                success: `Fetched Company detail successfully`,
                error: `Could not get Company detail`,
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
    }, [companyId]);


    const onFormSubmit = async (formData) => {
        const {
            name,
            location,
            size,
            socialMediaAccounts,
            type,
        } = formData;

        toast.promise(updateCompany({
            id: companyResult.data.id,
            name,
            location,
            size,
            socialMediaAccounts,
            type,
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


    if (companyResult.isLoading || companyResult.isUninitialized || companyResult.isFetching) {
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

    if (companyResult.isError) {

        toast.error("Could not fetch Company detail", {
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

    if (companyResult.isSuccess) {
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
                    defaultValue={companyResult.data.name ?? '-'}
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
                htmlFor = "location" >
                    Location  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="location"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={companyResult.data.location ?? '-'}
                    name="location"
                    {...register('location', {
                            required: {value: true, message: "Location  is required"},

                        }
                    )}
                />
                {errors.location && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.location.message}</span></p>}
            </div>
                
                            <div className="pb-5">
                                    <label 
                                    className="block text-sm font-medium mb-1" 
                                    htmlFor="size">
                                        Size  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="size"
                                        defaultValue={companyResult.data.size ?? '-'}
                                        {...register('size', {
                                            required: {value: true, message: "Size  is required"},
}
                                        )}
                                    ></textarea>
                                </div>
                
                            <div className="pb-5">
                                    <label 
                                    className="block text-sm font-medium mb-1" 
                                    htmlFor="socialMediaAccounts">
                                        Social Media Accounts  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="socialMediaAccounts"
                                        defaultValue={companyResult.data.socialMediaAccounts ?? '-'}
                                        {...register('socialMediaAccounts', {
                                            required: {value: true, message: "Social Media Accounts  is required"},
}
                                        )}
                                    ></textarea>
                                </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "type" >
                    Type  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="type"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={companyResult.data.type ?? '-'}
                    name="type"
                    {...register('type', {
                            required: {value: true, message: "Type  is required"},

                        }
                    )}
                />
                {errors.type && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.type.message}</span></p>}
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
                                <span className="hidden xs:block ml-1">Update Company </span>
                            </button>
                        </div>
                    </form>
                </div>
        </>

        );
    }


}
export default CompaniesListDetail