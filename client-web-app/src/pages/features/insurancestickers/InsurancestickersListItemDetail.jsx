import React, {useEffect} from 'react'
import {useLazyGetInsurancestickerQuery, useUpdateInsurancestickerMutation} from "./insurancestickersSlice"
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useGetVehiclesQuery} from "../vehicles/vehiclesSlice";
import {useGetCompaniesQuery} from "../companies/companiesSlice";
import {ClipLoader} from "react-spinners";

const baseUrl = import.meta.env.VITE_LOCAL_API

const InsurancestickersListDetail = ({}) => {
    const {
        insurancestickerId
    } = useParams();

    const [insurancestickerTrigger, insurancestickerResult, insurancestickerLastPromiseInfo] = useLazyGetInsurancestickerQuery()

    const [updateInsurancesticker] = useUpdateInsurancestickerMutation()

    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetVehiclesQuery()
    const {
        data: companyData = {}, isError:isCompanyError, isLoading:isCompanyLoading, isSuccess:isCompanySuccess, error:companyError
    } = useGetCompaniesQuery()

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
            insurancestickerTrigger(insurancestickerId)
                .unwrap(), {
                // pending: `Fetching Insurancesticker detail`,
                error: `Could not get Insurance Sticker Detail`,
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
    }, [insurancestickerId]);


    const onFormSubmit = async (formData) => {
        const {
            policyNo,
            policyStartDate,
            policyEndDate,
            issuedDate,
            type,
        } = formData;

        toast.promise(updateInsurancesticker({
            id: insurancestickerId,
            policyNo,
            policyStartDate,
            policyEndDate,
            issuedDate,
            type,
        }).unwrap(), {
            pending: "Updating Insurance Sticker",
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


    if (insurancestickerResult.isLoading
        || insurancestickerResult.isUninitialized
        || isLoading
        || isCompanyLoading
        || insurancestickerResult.isFetching) {
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

    if (insurancestickerResult.isError || isError || isCompanyError) {
        toast.error("Could not fetch Insurance Sticker Detail", {
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

    if (insurancestickerResult.isSuccess) {
    // if (true) {
        console.log(insurancestickerResult.data.sticker.company)
        console.log(data)
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
                                    defaultValue={insurancestickerResult.data.sticker.vehicle._id ?? ''}
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
                                    company <span className="text-rose-500">*</span>
                                </label>
                                <select
                                    id="company"
                                    className="form-select w-full ml-2 "
                                    name="company"
                                    defaultValue={insurancestickerResult.data.sticker.company._id ?? ''}
                                    {...register('company', {
                                            required: {value: true, message: "company  is required"},
                                        }
                                    )}
                                >
                                    <option value={``}>---</option>
                                    {
                                        companyData.companies.map(company => {
                                            return <option key={company._id} value={company._id}>{company.name}</option>
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
                                    htmlFor="policyNo">
                                    Policy No <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="policyNo"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={insurancestickerResult.data.sticker.policyNo ?? '-'}
                                    // defaultValue={sticker.policyNo ?? '-'}
                                    name="policyNo"
                                    {...register('policyNo', {
                                            required: {value: true, message: "Policy No  is required"},

                                        }
                                    )}
                                />
                                {errors.policyNo &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.policyNo.message}</span></p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="policyStartDate">
                                    Policy Start Date <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="policyStartDate"
                                    className="form-input w-full ml-2 "
                                    type="date"
                                    defaultValue={insurancestickerResult.data.sticker.policyStartDate ?? ''}
                                    // defaultValue={'04/03/2024'}
                                    name="policyStartDate"
                                    {...register('policyStartDate', {
                                            required: {value: true, message: "Policy Start Date  is required"},
                                        }
                                    )}
                                />
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="policyEndDate">
                                    Policy End Date <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="policyEndDate"
                                    className="form-input w-full ml-2 "
                                    type="date"
                                    defaultValue={insurancestickerResult.data.sticker.policyEndDate ?? ''}
                                    // defaultValue={sticker.policyEndDate ?? ''}
                                    name="policyEndDate"
                                    {...register('policyEndDate', {
                                            required: {value: true, message: "Policy End Date  is required"},
                                        }
                                    )}
                                />
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="issuedDate">
                                    Issued Date <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="issuedDate"
                                    className="form-input w-full ml-2 "
                                    type="date"
                                    defaultValue={insurancestickerResult.data.sticker.issuedDate ?? ''}
                                    // defaultValue={sticker.issuedDate ?? ''}
                                    name="issuedDate"
                                    {...register('issuedDate', {
                                            required: {value: true, message: "Issued Date  is required"},
                                        }
                                    )}
                                />
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="type">
                                    Type <span className="text-rose-500">*</span>
                                </label>
                                <select
                                    id="type"
                                    className="form-select w-full ml-2 "
                                    name="type"
                                    defaultValue={insurancestickerResult.data.sticker.type ?? ''}
                                    {...register('type', {
                                            required: {value: true, message: "Type  is required"},
                                        }
                                    )}
                                >
                                    <option value={``}>---</option>
                                    <option value={`Full`}>Full</option>
                                    <option value={`Half`}>Half</option>
                                    <option value={`3rdPartyInsurance`}>3rd Party Insurance</option>

                                </select>
                                {errors.type &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.type.message}</span></p>}
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
                                <span className="hidden xs:block ml-1">Update Insurance Sticker </span>
                            </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }


}
export default InsurancestickersListDetail