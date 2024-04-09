import React, {useEffect} from 'react'
import {useUpdateInsurancestickerMutation} from "./insurancestickersSlice"
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = import.meta.env.VITE_LOCAL_API

const InsurancestickersListDetail = ({}) => {
    const {
        insurancestickerId
    } = useParams();
    // const [insurancestickerTrigger, insurancestickerResult, insurancestickerLastPromiseInfo] = useLazyGetInsurancestickerQuery()

    const [updateInsurancesticker] = useUpdateInsurancestickerMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        },
    } = useForm()

    const sticker = {
        id: 'sdijbhosdib2439giuvb',
        vehicle: '',
        company: [{company: 'Company'}],
        policyNo: '13456',
        policyStartDate: '04/28/2024',
        policyEndDate: '05/20/2024',
        issuedDate: '06/10/2024',
        type: 'Half',
    }

    console.log(sticker)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     toast.promise(
    //         insurancestickerTrigger(insurancestickerId)
    //             .unwrap(), {
    //             pending: `Fetching Insurancesticker detail`,
    //             error: `Could not get Insurancesticker detail`,
    //             position: "bottom-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //             transition: Bounce
    //         })
    // }, [insurancestickerId]);


    const onFormSubmit = async (formData) => {
        const {
            policyNo,
            policyStartDate,
            policyEndDate,
            issuedDate,
            type,
        } = formData;

        toast.promise(updateInsurancesticker({
            id: insurancestickerResult.data.id,
            policyNo,
            policyStartDate,
            policyEndDate,
            issuedDate,
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


    // if (insurancestickerResult.isLoading || insurancestickerResult.isUninitialized || insurancestickerResult.isFetching) {
    //     return (
    //         <div className={`flex items-center justify-center h-screen`}>
    //         <ClipLoader
    //             className={`my-auto`}
    //             color={`#000000`}
    //             loading={true}
    //             size={150}
    //             aria-label="Loading Spinner"
    //             data-testid="loader"
    //         />
    //     </div>
    //     )
    // }

    // if (insurancestickerResult.isError) {
    //     toast.error("Could not fetch Insurancesticker detail", {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "colored",
    //         transition: Bounce
    //     })
    //
    //     return (<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    //                         <div className="max-w-2xl m-auto mt-16">
    //                             <div className="text-center px-4">
    //                                 <div className="inline-flex mb-8">
    //                                     <img src={SadFace} width="176" height="176"
    //                                          alt="404 illustration"/>
    //                                 </div>
    //                                 <div className="mb-6 text-3xl">Something Went Wrong</div>
    //                             </div>
    //                         </div>
    //                     </div>)
    // }

    // if (insurancestickerResult.isSuccess) {
    if (true) {
        return (
            <>
                <div className="border-t border-slate-200">
                    <form className="row p-3" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="grid grid-cols-2 gap-x-5">

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
                                    // defaultValue={insurancestickerResult.data.policyNo ?? '-'}
                                    defaultValue={sticker.policyNo ?? '-'}
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
                                    // defaultValue={insurancestickerResult.data.policyStartDate ?? ''}
                                    defaultValue={'04/03/2024'}
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
                                    // defaultValue={insurancestickerResult.data.policyEndDate ?? ''}
                                    defaultValue={sticker.policyEndDate ?? ''}
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
                                    // defaultValue={insurancestickerResult.data.issuedDate ?? ''}
                                    defaultValue={sticker.issuedDate ?? ''}
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
                                    defaultValue={sticker.issuedDate ?? ''}
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
                                <span className="hidden xs:block ml-1">Update Insurancesticker </span>
                            </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }


}
export default InsurancestickersListDetail