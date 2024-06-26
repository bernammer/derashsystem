import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useCreateInsurancestickerMutation,} from "./insurancestickersSlice";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useGetVehiclesQuery} from "../vehicles/vehiclesSlice";
import vehicles from "../vehicles/vehicleTypes.json";
import {useGetCompaniesQuery} from "../companies/companiesSlice";

const InsurancestickersAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)

    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetVehiclesQuery()
    const {
        data: companyData = {}, isError:isCompanyError, isLoading:isCompanyLoading, isSuccess:isCompanySuccess, error:companyError
    } = useGetCompaniesQuery()


    const dispatch = useDispatch()
    const [createInsurancesticker, insurancestickerResult, insurancestickerResponsePromise] = useCreateInsurancestickerMutation()
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        },
    } = useForm();

    const onFormSubmit = async (formData) => {
        console.log(formData)
        const {
            policyNo,
            policyStartDate,
            policyEndDate,
            issuedDate,
            type,
            vehicle,
            company
        } = formData;

        toast.promise(createInsurancesticker({
            vehicleId: vehicle,
            companyId: company,
            policyNo,
            policyStartDate,
            policyEndDate,
            issuedDate,
            type,
        })
            .unwrap(), {
            pending: `Adding a Insurancesticker `,
            success: `Successfully added Insurancesticker `,
            error: `Could not add Insurancesticker `,
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
        return (<Navigate to={`/insurancestickers`} replace={false}/>)
    }


    if (isLoading || isCompanyLoading) return <h1>Loading</h1>

    if (isError || isCompanyError) {
        toast.error("Could not fetch the Vehicle and Company Data", {
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
        return <h1>Some Error Happened</h1>
    }

    if (isSuccess && isCompanySuccess) {
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
                                    defaultValue={''}
                                    {...register('vehicle', {
                                            required: {value: true, message: "vehicle  is required"},
                                        }
                                    )}
                                >
                                    <option value={``}>---</option>
                                    {
                                        data.vehicles.map(vehicle => {
                                            return <option key={vehicle._id} value={vehicle._id}>{vehicle.plate}</option>
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
                                    defaultValue={''}
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
                                    defaultValue={''}
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
                                    defaultValue={''}
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
                                    defaultValue={''}
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
                                    defaultValue={''}
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
                                    defaultValue={''}
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
                                <span className="hidden xs:block ml-2">Add Insurancesticker</span>
                            </button>
                        </div>
                    </form>
                </div>

            </>
        )
    }
}

export default InsurancestickersAdd