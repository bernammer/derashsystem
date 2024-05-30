import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useCreateVehicleMutation,} from "./vehiclesSlice";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import countries from './listOfCountries.json'
import vehicles from './vehicleTypes.json'
import bodyTypes from './bodyTypes.json'
import colors from './colors'
import fuelTypes from './fuelTypes.json'

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
            plate,
            chassisNumber,
            vehicleType,
            buildInCountry,
            builtInYear,
            vehicleModel,
            motorNumber,
            bodyType,
            color,
            fuelType,
            horsePower,
            titleCertificateBookNumber,
            cc,
            cylinderNumber,
            allowedWork,
            axleQuantity,
            capacity,
            licensedCapacityKg,
            licensedCapacityKgLiter,
        } = formData;

        toast.promise(createVehicle({
            plate,
            chassisNumber,
            vehicleType,
            buildInCountry,
            builtInYear,
            vehicleModel,
            motorNumber,
            bodyType,
            color,
            fuelType,
            horsePower,
            titleCertificateBookNumber,
            cc,
            cylinderNumber,
            allowedWork,
            axleQuantity,
            capacity,
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
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="plate">
                                Plate Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="plate"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="plate"
                                {...register('plate', {
                                        required: {value: true, message: "Plate Number is required"},
                                    }
                                )}
                            />
                            {errors.plate &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.plate.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="chassisNumber">
                                Chassis Number <span className="text-rose-500">*</span>
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
                            {errors.chassisNumber &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.chassisNumber.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="vehicleType">
                                Vehicle Type <span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="type"
                                className="form-select w-full ml-2 "
                                name="buildInCountry"
                                defaultValue={''}
                                {...register('buildInCountry', {
                                        required: {value: true, message: "Type  is required"},
                                    }
                                )}
                            >
                                <option value={``}>---</option>
                                {
                                    vehicles.map(vehicle => {
                                        return <option key={vehicle} value={vehicle}>{vehicle}</option>
                                    })
                                }

                            </select>
                            {errors.vehicleType &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.vehicleType.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="buildInCountry">
                                Built In Country <span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="type"
                                className="form-select w-full ml-2 "
                                name="buildInCountry"
                                defaultValue={''}
                                {...register('buildInCountry', {
                                        required: {value: true, message: "Type  is required"},
                                    }
                                )}
                            >
                                <option value={``}>---</option>
                                {
                                    countries.map(country => {
                                        return <option key={country} value={country}>{country}</option>
                                    })
                                }

                            </select>
                                {errors.buildInCountry &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.buildInCountry.message}</span>
                                    </p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="builtInYear">
                                Built In Year <span className="text-rose-500">*</span>
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
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="vehicleModel">
                                Vehicle Model <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="vehicleModel"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="vehicleModel"
                                {...register('vehicleModel', {
                                        required: {value: true, message: "Car Model  is required"},

                                    }
                                )}
                            />
                            {errors.vehicleModel &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.vehicleModel.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="motorNumber">
                                Motor Number <span className="text-rose-500">*</span>
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
                            {errors.motorNumber &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.motorNumber.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="bodyType">
                                Body Type <span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="bodyType"
                                className="form-select w-full ml-2 "
                                name="bodyType"
                                defaultValue={''}
                                {...register('bodyType', {
                                        required: {value: true, message: "Type  is required"},
                                    }
                                )}
                            >
                                <option value={``}>---</option>
                                {
                                    bodyTypes.map(bodyType => {
                                        return <option key={bodyType} value={bodyType}>{bodyType}</option>
                                    })
                                }

                            </select>
                            {errors.bodyType &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.bodyType.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="color">
                                Color <span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="color"
                                className="form-select w-full ml-2 "
                                name="color"
                                defaultValue={''}
                                {...register('color', {
                                        required: {value: true, message: "Color  is required"},
                                    }
                                )}
                            >
                                <option value={``}>---</option>
                                {
                                    Object.entries(colors).map(([key, value], arr) => {
                                        return <option key={key} value={key} className={`bg-[${value}]`}>{key}</option>
                                    })
                                }

                            </select>
                            {errors.color &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.color.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="fuelType">
                                Fuel Type <span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="fuelType"
                                className="form-select w-full ml-2 "
                                name="fuelType"
                                defaultValue={''}
                                {...register('fuelType', {
                                        required: {value: true, message: "Fuel Type  is required"},
                                    }
                                )}
                            >
                                <option value={``}>---</option>
                                {
                                    fuelTypes.map(fuel => {
                                        return <option key={fuel} value={fuel}>{fuel}</option>
                                    })
                                }

                            </select>
                            {errors.fuelType &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.fuelType.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="horsePower">
                                Horse Power <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="horsePower"
                                className="form-input full ml-2 "
                                type="number"
                                step="any"
                                defaultValue={0}
                                name="horsePower"
                                {...register('horsePower', {
                                    required: {value: true, message: "Motor Horse Power  is required"},
                                    }
                                )}
                            />
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="titleCertificateBookNumber">
                                Title Certificate Book Number <span className="text-rose-500">*</span>
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
                            {errors.titleCertificateBookNumber && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.titleCertificateBookNumber.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="cc">
                                Cc <span className="text-rose-500">*</span>
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
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="cylinderNumber">
                                Cylinder Number <span className="text-rose-500">*</span>
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
                            {errors.cylinderNumber &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.cylinderNumber.message}</span>
                                </p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="allowedWork">
                                Allowed Work <span className="text-rose-500">*</span>
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
                            {errors.allowedWork &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.allowedWork.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleQuantity">
                                Axle Quantity <span className="text-rose-500">*</span>
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
                                htmlFor="capacity">
                                Licensed Capacity Seats <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="capacity"
                                className="form-input full ml-2 "
                                type="number"
                                step="any"
                                defaultValue={0}
                                name="capacity"
                                {...register('capacity', {
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
                                Licensed Capacity Kg <span className="text-rose-500">*</span>
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
                                Licensed Capacity Kg Liter <span className="text-rose-500">*</span>
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