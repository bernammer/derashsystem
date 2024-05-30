import React, {
    useState
} from 'react'
import {
    useForm
} from "react-hook-form";
import {
    useCreateCompanyMutation,
    useLazyCreateCompanyMutation,
    useGetCompaniesQuery,
    useLazyGetCompaniesQuery,
    useGetCompanyQuery,
    useLazyGetCompanyQuery,
    useUpdateCompanyMutation,
    useLazyUpdateCompanyMutation,
    useDestroyCompanyMutation,
    useLazyDestroyCompanyMutation,
    useLazySearchIdNameLocationQuery,
} from "./companiesSlice";
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

const CompaniesAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)



    const dispatch = useDispatch()
    const [createCompany, companyResult, companyResponsePromise] = useCreateCompanyMutation()
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
            name,
            location,
            size,
            socialMediaAccounts,
            type,
        } = formData;

        toast.promise(createCompany({

                    name,
                    location,
                    size,
                    socialMediaAccounts,
                    type,
                })
                .unwrap(), {
                    pending: `Adding a Company `,
                    success: `Successfully added Company `,
                    error: `Could not add Company `,
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
        return (<Navigate to={`/company`} replace={false}/>)
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
                htmlFor = "name" >
                    Name  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="name"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
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
                    defaultValue={''}
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
                                        defaultValue={''}
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
                                        defaultValue={''}
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
                    defaultValue={''}
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
                                <span className="hidden xs:block ml-2">Add Company</span>
                            </button>
                        </div>
                    </form>
                </div>
              
        </>
    )
}

export default CompaniesAdd