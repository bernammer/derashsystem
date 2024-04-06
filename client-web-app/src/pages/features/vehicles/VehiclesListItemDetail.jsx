import React, {
    useEffect
} from 'react'
import {
    useLazyGetVehicleQuery,
    useUpdateVehicleMutation
} from "./vehiclesSlice"
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

const VehiclesListDetail = ({}) => {
    const {
        vehicleId
    } = useParams();
    const [vehicleTrigger, vehicleResult, vehicleLastPromiseInfo] = useLazyGetVehicleQuery()

    const [updateVehicle] = useUpdateVehicleMutation()

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
            vehicleTrigger(vehicleId)
            .unwrap(), {
                pending: `Fetching Vehicle detail`,
                success: `Fetched Vehicle detail successfully`,
                error: `Could not get Vehicle detail`,
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
    }, [vehicleId]);


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

        toast.promise(updateVehicle({
            id: vehicleResult.data.id,
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


    if (vehicleResult.isLoading || vehicleResult.isUninitialized || vehicleResult.isFetching) {
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

    if (vehicleResult.isError) {

        toast.error("Could not fetch Vehicle detail", {
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

    if (vehicleResult.isSuccess) {
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
                    defaultValue={vehicleResult.data.plateNumber ?? '-'}
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
                    defaultValue={vehicleResult.data.chassisNumber ?? '-'}
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
                    defaultValue={vehicleResult.data.vehicleType ?? '-'}
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
                    defaultValue={vehicleResult.data.buildInCountry ?? '-'}
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
                                     defaultValue={vehicleResult.data.builtInYear ?? ''}
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
                    defaultValue={vehicleResult.data.carModel ?? '-'}
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
                    defaultValue={vehicleResult.data.motorNumber ?? '-'}
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
                    defaultValue={vehicleResult.data.bodyType ?? '-'}
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
                    defaultValue={vehicleResult.data.color ?? '-'}
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
                    defaultValue={vehicleResult.data.gasType ?? '-'}
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
                                     defaultValue={vehicleResult.data.motorHorsePower ?? '0'}
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
                    defaultValue={vehicleResult.data.titleCertificateBookNumber ?? '-'}
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
                    defaultValue={vehicleResult.data.cc ?? '-'}
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
                    defaultValue={vehicleResult.data.cylinderNumber ?? '-'}
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
                    defaultValue={vehicleResult.data.allowedWork ?? '-'}
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
                                     defaultValue={vehicleResult.data.axleQuantity ?? '0'}
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
                                     defaultValue={vehicleResult.data.licensedCapacitySeats ?? '0'}
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
                                     defaultValue={vehicleResult.data.licensedCapacityKg ?? '0'}
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
                                     defaultValue={vehicleResult.data.licensedCapacityKgLiter ?? '0'}
                                     name="licensedCapacityKgLiter"
                                       {...register('licensedCapacityKgLiter', {
                                            required: {value: true, message: "Licensed Capacity Kg Liter  is required"},
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
                                <span className="hidden xs:block ml-1">Update Vehicle </span>
                            </button>
                        </div>
                    </form>
                </div>
        </>

        );
    }


}
export default VehiclesListDetail