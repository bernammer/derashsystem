import React, {
    useState
} from 'react'
import {
    useForm
} from "react-hook-form";
import {
    useCreateAccidentMutation,
    useLazyCreateAccidentMutation,
    useGetAccidentsQuery,
    useLazyGetAccidentsQuery,
    useGetAccidentQuery,
    useLazyGetAccidentQuery,
    useUpdateAccidentMutation,
    useLazyUpdateAccidentMutation,
    useDestroyAccidentMutation,
    useLazyDestroyAccidentMutation,
} from "./accidentsSlice";
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

const AccidentsAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)



    const dispatch = useDispatch()
    const [createAccident, accidentResult, accidentResponsePromise] = useCreateAccidentMutation()
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
            location,
            involvedVehicles,
            accidentType,
            accidentSeverity,
            photos,
            payment,
        } = formData;

        toast.promise(createAccident({

                    location,
                    involvedVehicles,
                    accidentType,
                    accidentSeverity,
                    photos,
                    payment,
                })
                .unwrap(), {
                    pending: `Adding a Accident `,
                    success: `Successfully added Accident `,
                    error: `Could not add Accident `,
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
        return (<Navigate to={`/accident`} replace={false}/>)
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
                                    htmlFor="involvedVehicles">
                                        Involved Vehicles  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="involvedVehicles"
                                        defaultValue={''}
                                        {...register('involvedVehicles', {
                                            required: {value: true, message: "Involved Vehicles  is required"},
}
                                        )}
                                    ></textarea>
                                </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "accidentType" >
                    Accident Type  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="accidentType"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="accidentType"
                    {...register('accidentType', {
                            required: {value: true, message: "Accident Type  is required"},

                        }
                    )}
                />
                {errors.accidentType && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.accidentType.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "accidentSeverity" >
                    Accident Severity  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="accidentSeverity"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="accidentSeverity"
                    {...register('accidentSeverity', {
                            required: {value: true, message: "Accident Severity  is required"},

                        }
                    )}
                />
                {errors.accidentSeverity && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.accidentSeverity.message}</span></p>}
            </div>
                
                            <div className="pb-5">
                                    <label 
                                    className="block text-sm font-medium mb-1" 
                                    htmlFor="photos">
                                        Photos  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="photos"
                                        defaultValue={''}
                                        {...register('photos', {
                                            required: {value: true, message: "Photos  is required"},
}
                                        )}
                                    ></textarea>
                                </div>
                
                            <div className="pb-5">
                                    <label 
                                    className="block text-sm font-medium mb-1" 
                                    htmlFor="payment">
                                        Payment  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="payment"
                                        defaultValue={''}
                                        {...register('payment', {
                                            required: {value: true, message: "Payment  is required"},
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
                                <span className="hidden xs:block ml-2">Add Accident</span>
                            </button>
                        </div>
                    </form>
                </div>
              
        </>
    )
}

export default AccidentsAdd