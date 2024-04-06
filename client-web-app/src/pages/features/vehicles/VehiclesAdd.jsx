import React, {
    useState
} from 'react'
import {
    useForm
} from "react-hook-form";
import {
    useCreateVehicleMutation,
    useLazyCreateVehicleMutation,
    useGetVehiclesQuery,
    useLazyGetVehiclesQuery,
    useGetVehicleQuery,
    useLazyGetVehicleQuery,
    useUpdateVehicleMutation,
    useLazyUpdateVehicleMutation,
    useDestroyVehicleMutation,
    useLazyDestroyVehicleMutation,
    useLazySearchIdPlateNumberChassisNumberMotorNumberQuery,
} from "./vehiclesSlice";
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

const VehiclesAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)



    const dispatch = useDispatch()
    const [createVehicle, vehicleResult, vehicleResponsePromise] = useCreateVehicleMutation()
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
            plateNumber,
            chassisNumber,
            vehicleType,
            buildInCountry,
            builtInYear,
            carModel,
            motorNumber,
            bodyType,
            color,
            gasType,
            motorHorsePower,
            titleCertificateBookNumber,
            cc,
            cylinderNumber,
            allowedWork,
            axleQuantity,
            licensedCapacitySeats,
            licensedCapacityKg,
            licensedCapacityKgLiter,
        } = formData;

        toast.promise(createVehicle({

                    plateNumber,
                    chassisNumber,
                    vehicleType,
                    buildInCountry,
                    builtInYear,
                    carModel,
                    motorNumber,
                    bodyType,
                    color,
                    gasType,
                    motorHorsePower,
                    titleCertificateBookNumber,
                    cc,
                    cylinderNumber,
                    allowedWork,
                    axleQuantity,
                    licensedCapacitySeats,
                    licensedCapacityKg,
                    licensedCapacityKgLiter,
                })
                .unwrap(), {
                    pending: `Adding a Vehicle `,
                    success: `Successfully added Vehicle `,
                    error: `Could not add Vehicle `,
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
        return (<Navigate to={`/vehicle`} replace={false}/>)
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
                htmlFor = "chassisNumber" >
                    Chassis Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="chassisNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="chassisNumber"
                    {...register('chassisNumber', {
                            required: {value: true, message: "Chassis Number  is required"},

                        }
                    )}
                />
                {errors.chassisNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.chassisNumber.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "vehicleType" >
                    Vehicle Type  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="vehicleType"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="vehicleType"
                    {...register('vehicleType', {
                            required: {value: true, message: "Vehicle Type  is required"},

                        }
                    )}
                />
                {errors.vehicleType && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.vehicleType.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "buildInCountry" >
                    Build In Country  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="buildInCountry"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="buildInCountry"
                    {...register('buildInCountry', {
                            required: {value: true, message: "Build In Country  is required"},

                        }
                    )}
                />
                {errors.buildInCountry && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.buildInCountry.message}</span></p>}
            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="builtInYear">
                                    Built In Year  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="builtInYear" 
                                    className="form-input w-full ml-2 "
                                     type="date"
                                     defaultValue={''}
                                     name="builtInYear"
                                       {...register('builtInYear', {
                                            required: {value: true, message: "Built In Year  is required"},
}
                                     )} 
                                />
                            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "carModel" >
                    Car Model  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="carModel"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="carModel"
                    {...register('carModel', {
                            required: {value: true, message: "Car Model  is required"},

                        }
                    )}
                />
                {errors.carModel && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.carModel.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "motorNumber" >
                    Motor Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="motorNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="motorNumber"
                    {...register('motorNumber', {
                            required: {value: true, message: "Motor Number  is required"},

                        }
                    )}
                />
                {errors.motorNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.motorNumber.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "bodyType" >
                    Body Type  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="bodyType"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="bodyType"
                    {...register('bodyType', {
                            required: {value: true, message: "Body Type  is required"},

                        }
                    )}
                />
                {errors.bodyType && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.bodyType.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "color" >
                    Color  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="color"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="color"
                    {...register('color', {
                            required: {value: true, message: "Color  is required"},

                        }
                    )}
                />
                {errors.color && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.color.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "gasType" >
                    Gas Type  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="gasType"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="gasType"
                    {...register('gasType', {
                            required: {value: true, message: "Gas Type  is required"},

                        }
                    )}
                />
                {errors.gasType && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.gasType.message}</span></p>}
            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="motorHorsePower">
                                    Motor Horse Power  <span className="text-rose-500">*</span>
                                </label>
                                <input 
                                    id="motorHorsePower" 
                                    className="form-input full ml-2 "
                                     type="number"
                                     step="any"
                                     defaultValue={0}
                                     name="motorHorsePower"
                                       {...register('motorHorsePower', {
                                            required: {value: true, message: "Motor Horse Power  is required"},
}
                                     )} 
                                />
                            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "titleCertificateBookNumber" >
                    Title Certificate Book Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="titleCertificateBookNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="titleCertificateBookNumber"
                    {...register('titleCertificateBookNumber', {
                            required: {value: true, message: "Title Certificate Book Number  is required"},

                        }
                    )}
                />
                {errors.titleCertificateBookNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.titleCertificateBookNumber.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "cc" >
                    Cc  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="cc"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="cc"
                    {...register('cc', {
                            required: {value: true, message: "Cc  is required"},

                        }
                    )}
                />
                {errors.cc && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.cc.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "cylinderNumber" >
                    Cylinder Number  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="cylinderNumber"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="cylinderNumber"
                    {...register('cylinderNumber', {
                            required: {value: true, message: "Cylinder Number  is required"},

                        }
                    )}
                />
                {errors.cylinderNumber && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.cylinderNumber.message}</span></p>}
            </div>
                
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "allowedWork" >
                    Allowed Work  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="allowedWork"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={''}
                    name="allowedWork"
                    {...register('allowedWork', {
                            required: {value: true, message: "Allowed Work  is required"},

                        }
                    )}
                />
                {errors.allowedWork && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.allowedWork.message}</span></p>}
            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="axleQuantity">
                                    Axle Quantity  <span className="text-rose-500">*</span>
                                </label>
                                <input 
                                    id="axleQuantity" 
                                    className="form-input full ml-2 "
                                     type="number"
                                     step="any"
                                     defaultValue={0}
                                     name="axleQuantity"
                                       {...register('axleQuantity', {
                                            required: {value: true, message: "Axle Quantity  is required"},
}
                                     )} 
                                />
                            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="licensedCapacitySeats">
                                    Licensed Capacity Seats  <span className="text-rose-500">*</span>
                                </label>
                                <input 
                                    id="licensedCapacitySeats" 
                                    className="form-input full ml-2 "
                                     type="number"
                                     step="any"
                                     defaultValue={0}
                                     name="licensedCapacitySeats"
                                       {...register('licensedCapacitySeats', {
                                            required: {value: true, message: "Licensed Capacity Seats  is required"},
}
                                     )} 
                                />
                            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="licensedCapacityKg">
                                    Licensed Capacity Kg  <span className="text-rose-500">*</span>
                                </label>
                                <input 
                                    id="licensedCapacityKg" 
                                    className="form-input full ml-2 "
                                     type="number"
                                     step="any"
                                     defaultValue={0}
                                     name="licensedCapacityKg"
                                       {...register('licensedCapacityKg', {
                                            required: {value: true, message: "Licensed Capacity Kg  is required"},
}
                                     )} 
                                />
                            </div>
                
                            <div 
                            className="pb-5">
                                <label 
                                className="block text-sm font-medium mb-1" 
                                htmlFor="licensedCapacityKgLiter">
                                    Licensed Capacity Kg Liter  <span className="text-rose-500">*</span>
                                </label>
                                <input 
                                    id="licensedCapacityKgLiter" 
                                    className="form-input full ml-2 "
                                     type="number"
                                     step="any"
                                     defaultValue={0}
                                     name="licensedCapacityKgLiter"
                                       {...register('licensedCapacityKgLiter', {
                                            required: {value: true, message: "Licensed Capacity Kg Liter  is required"},
}
                                     )} 
                                />
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
                                <span className="hidden xs:block ml-2">Add Vehicle</span>
                            </button>
                        </div>
                    </form>
                </div>
              
        </>
    )
}

export default VehiclesAdd