import React, {
    useState
} from 'react'
import {
    useForm
} from "react-hook-form";
import {
    useCreateBolostickerMutation,
    useLazyCreateBolostickerMutation,
    useGetBolostickersQuery,
    useLazyGetBolostickersQuery,
    useGetBolostickerQuery,
    useLazyGetBolostickerQuery,
} from "./bolostickersSlice";
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

const BolostickersAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)



    const dispatch = useDispatch()
    const [createBolosticker, bolostickerResult, bolostickerResponsePromise] = useCreateBolostickerMutation()
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
            vehicle,
            company,
            type,
            endDate,
            plateNumber,
            capacity,
            receiptNumber,
            examinationNumber,
        } = formData;

        toast.promise(createBolosticker({

                    vehicle,
                    company,
                    type,
                    endDate,
                    plateNumber,
                    capacity,
                    receiptNumber,
                    examinationNumber,
                })
                .unwrap(), {
                    pending: `Adding a Bolosticker `,
                    success: `Successfully added Bolosticker `,
                    error: `Could not add Bolosticker `,
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
        return (<Navigate to={`/bolosticker`} replace={false}/>)
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
                htmlFor = "vehicle" >
                    Vehicle  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="vehicle"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="vehicle"
                    {...register('vehicle', {
                            required: {value: true, message: "Vehicle  is required"},

                        }
                    )}
                />
                {errors.vehicle && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.vehicle.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "company" >
                    Company  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="company"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="company"
                    {...register('company', {
                            required: {value: true, message: "Company  is required"},

                        }
                    )}
                />
                {errors.company && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.company.message}</span></p>}
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
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="endDate">
                                    End Date  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="endDate" 
                                    className="form-input w-full ml-2 "
                                     type="date"
                                     defaultValue={''}
                                     name="endDate"
                                       {...register('endDate', {
                                            required: {value: true, message: "End Date  is required"},
}
                                     )} 
                                />
                            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "plateNumber" >
                    Plate Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="plateNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="plateNumber"
                    {...register('plateNumber', {
                            required: {value: true, message: "Plate Number  is required"},

                        }
                    )}
                />
                {errors.plateNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.plateNumber.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "capacity" >
                    Capacity  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="capacity"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="capacity"
                    {...register('capacity', {
                            required: {value: true, message: "Capacity  is required"},

                        }
                    )}
                />
                {errors.capacity && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.capacity.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "receiptNumber" >
                    Receipt Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="receiptNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="receiptNumber"
                    {...register('receiptNumber', {
                            required: {value: true, message: "Receipt Number  is required"},

                        }
                    )}
                />
                {errors.receiptNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.receiptNumber.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "examinationNumber" >
                    Examination Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="examinationNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="examinationNumber"
                    {...register('examinationNumber', {
                            required: {value: true, message: "Examination Number  is required"},

                        }
                    )}
                />
                {errors.examinationNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.examinationNumber.message}</span></p>}
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
                                <span className="hidden xs:block ml-2">Add Bolosticker</span>
                            </button>
                        </div>
                    </form>
                </div>
              
        </>
    )
}

export default BolostickersAdd