import React, {
    useEffect
} from 'react'
import {
    useLazyGetBolostickerQuery,
    useUpdateBolostickerMutation
} from "./bolostickersSlice"

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
import {useGetVehiclesQuery} from "../vehicles/vehiclesSlice";
import {useGetCompaniesQuery} from "../companies/companiesSlice";

const baseUrl = import.meta.env.VITE_LOCAL_API

const BolostickersListDetail = ({}) => {
    const {
        bolostickerId
    } = useParams();

    const [bolostickerTrigger, bolostickerResult, bolostickerLastPromiseInfo] = useLazyGetBolostickerQuery()

    const [updateBolosticker] = useUpdateBolostickerMutation()

    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetVehiclesQuery()
    const {
        data: companyData = {},
        isError: isCompanyError,
        isLoading: isCompanyLoading,
        isSuccess: isCompanySuccess,
        error: companyError
    } = useGetCompaniesQuery()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        },
    } = useForm()

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

        toast.promise(updateBolosticker({
            id: bolostickerId,
            vehicle,
            company,
            type,
            endDate,
            plateNumber,
            capacity,
            receiptNumber,
            examinationNumber,
        }).unwrap(), {
            pending: "Updating Bolo Sticker",
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



    const dispatch = useDispatch()

    useEffect(() => {
        toast.promise(
            bolostickerTrigger(bolostickerId)
            .unwrap(), {
                // pending: `Fetching Bolosticker detail`,
                // success: `Fetched Bolosticker detail successfully`,
                error: `Could not get Bolosticker detail`,
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
    }, [bolostickerId]);



    if (isLoading || isCompanyLoading || bolostickerResult.isLoading || bolostickerResult.isUninitialized || bolostickerResult.isFetching) {
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

    if (bolostickerResult.isError || isError || isCompanyError) {

        toast.error("Could not fetch Bolosticker detail", {
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

    if (bolostickerResult.isSuccess && isSuccess && isCompanySuccess) {
        console.log(bolostickerResult.data.bolosticker)
        return (
            <>
                <div className="border-t border-slate-200">
                    <form className="row p-3" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="grid grid-cols-2 gap-x-5">

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="vehicle">
                                    Vehicle <span className="text-rose-500">*</span>
                                </label>
                                <select
                                    id="type"
                                    className="form-select w-full ml-2 "
                                    name="vehicle"
                                    defaultValue={bolostickerResult.data.bolosticker.vehicle ?? ''}
                                    {...register('vehicle', {
                                            required: {value: true, message: "vehicle  is required"},
                                        }
                                    )}
                                >
                                    <option value={``}>---</option>
                                    {
                                        data.vehicles.map(vehicle => {
                                            return <option key={vehicle._id}
                                                           value={vehicle._id}>Plate: {vehicle.plate}</option>
                                        })
                                    }

                                </select>
                                {errors.vehicle &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.vehicle.message}</span></p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="company">
                                    Company <span className="text-rose-500">*</span>
                                </label>
                                <select
                                    id="company"
                                    className="form-select w-full ml-2 "
                                    name="company"
                                    defaultValue={bolostickerResult.data.bolosticker.company ?? ''}
                                    {...register('company', {
                                            required: {value: true, message: "company  is required"},
                                        }
                                    )}
                                >
                                    <option value={``}>---</option>
                                    {
                                        companyData.companies.map(company => {
                                            return <option key={company._id}
                                                           value={company._id}>{company.name}</option>
                                        })
                                    }

                                </select>
                                {errors.company &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.company.message}</span></p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="type">
                                    Type <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="type"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={bolostickerResult.data.bolosticker.type ?? '-'}
                                    name="type"
                                    {...register('type', {
                                            required: {value: true, message: "Type  is required"},

                                        }
                                    )}
                                />
                                {errors.type &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.type.message}</span></p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="endDate">
                                    End Date <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="endDate"
                                    className="form-input w-full ml-2 "
                                    type="date"
                                    defaultValue={bolostickerResult.data.bolosticker.endDate ?? ''}
                                    name="endDate"
                                    {...register('endDate', {
                                            required: {value: true, message: "End Date  is required"},
                                        }
                                    )}
                                />
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="plateNumber">
                                    Plate Number <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="plateNumber"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={bolostickerResult.data.bolosticker.plateNumber ?? '-'}
                                    name="plateNumber"
                                    {...register('plateNumber', {
                                            required: {value: true, message: "Plate Number  is required"},

                                        }
                                    )}
                                />
                                {errors.plateNumber &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.plateNumber.message}</span>
                                    </p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="capacity">
                                    Capacity <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="capacity"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={bolostickerResult.data.bolosticker.capacity ?? '-'}
                                    name="capacity"
                                    {...register('capacity', {
                                            required: {value: true, message: "Capacity  is required"},

                                        }
                                    )}
                                />
                                {errors.capacity &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.capacity.message}</span></p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="receiptNumber">
                                    Receipt Number <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="receiptNumber"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={bolostickerResult.data.bolosticker.receiptNumber ?? '-'}
                                    name="receiptNumber"
                                    {...register('receiptNumber', {
                                            required: {value: true, message: "Receipt Number  is required"},

                                        }
                                    )}
                                />
                                {errors.receiptNumber &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.receiptNumber.message}</span>
                                    </p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="examinationNumber">
                                    Examination Number <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="examinationNumber"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={bolostickerResult.data.bolosticker.examinationNumber ?? '-'}
                                    name="examinationNumber"
                                    {...register('examinationNumber', {
                                            required: {value: true, message: "Examination Number  is required"},

                                        }
                                    )}
                                />
                                {errors.examinationNumber && <p className={`ml-2 mt-1 text-red-600`}>
                                    <span>{errors.examinationNumber.message}</span></p>}
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
                                <span className="hidden xs:block ml-1">Update Bolo Sticker </span>
                            </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }


}
export default BolostickersListDetail