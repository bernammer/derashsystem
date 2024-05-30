import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useCreateInspectiontestMutation,} from "./inspectiontestsSlice";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useGetVehiclesQuery} from "../vehicles/vehiclesSlice";
import {useGetUsersQuery} from "../users/usersSlice";

const InspectiontestsAdd = (props) => {
    const [redirectToList, setRedirectToList] = useState(false)

    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetVehiclesQuery()
    const {
        data: userData = {},
        isError: isUserError,
        isLoading: isUserLoading,
        isSuccess: isUserSuccess,
        error: userError
    } = useGetUsersQuery()

    const dispatch = useDispatch()
    const [createInspectiontest, inspectiontestResult, inspectiontestResponsePromise] = useCreateInspectiontestMutation()

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
            user,
            brakeFrontAxleLeft,
            brakeFrontAxleRight,
            brakeFrontAxlePassFail,
            brakeFrontAxleStandard,
            brakeRearAxleLeft,
            brakeRearAxleRight,
            brakeRearAxlePassFail,
            brakeRearAxleStandard,
            parkingForceFrontAxleLeft,
            parkingForceFrontAxleRight,
            parkingForceFrontAxlePassFail,
            parkingForceFrontAxleStandard,
            parkingForceRearAxleLeft,
            parkingForceRearAxleRight,
            parkingForceRearAxlePassFail,
            parkingForceRearAxleStandard,
            axleLoadFrontAxleLeft,
            axleLoadFrontAxleRight,
            axleLoadFrontAxlePassFail,
            axleLoadFrontAxleStandard,
            axleLoadRearAxleLeft,
            axleLoadRearAxleRight,
            axleLoadRearAxlePassFail,
            axleloadRearAxleStandard,
            brakeEfficiencyFrontAxleLeft,
            brakeEfficiencyFrontAxleRight,
            brakeEfficiencyFrontAxlePassFail,
            brakeEfficiencyfrontAxleStandard,
            brakeEfficiencyRearAxleLeft,
            brakeEfficiencyRearAxleRight,
            brakeEfficiencyRearAxlePassFail,
            brakeEfficiencyRearAxleStandard,
            brakeDifferenceFrontAxleLeft,
            brakeDifferenceFrontAxleRight,
            brakeDifferenceFrontAxlePassFail,
            brakeDifferenceFrontAxleStandard,
            brakeDifferenceRearAxleLeft,
            brakeDifferenceRearAxleRight,
            brakeDifferenceRearAxlePassFail,
            brakeDifferenceRearAxleStandard,
            parkingBrakeEfficiencyFrontAxleLeft,
            parkingBrakeEfficiencyFrontAxleRight,
            parkingBrakeEfficiencyFrontAxlePassFail,
            parkingBrakeEfficiencyFrontAxleStandard,
            parkingBrakeEfficiencyRearAxleLeft,
            parkingBrakeEfficiencyRearAxleRight,
            parkingBrakeEfficiencyRearAxlePassFail,
            parkingBrakeEfficiencyRearAxleStandard,
            parkingBrakeDifferenceFrontAxleLeft,
            parkingBrakeDifferenceFrontAxleRight,
            parkingBrakeDifferenceFrontAxlePassFail,
            parkingBrakeDifferenceFrontAxleStandard,
            parkingBrakeDifferenceRearAxleLeft,
            parkingBrakeDifferenceRearAxleRight,
            parkingBrakeDifferenceRearAxlePassFail,
            parkingBrakeDifferenceRearAxleStandard,
            sideSlipFrontAxleLeft,
            sideSlipFrontAxleRight,
            sideSlipFrontAxlePassFail,
            sideSlipFrontAxleStandard,
            sideSlipRearAxleLeft,
            sideSlipRearAxleRight,
            sideSlipRearAxlePassFail,
            sideSlipRearAxleStandard,
            totalParkingEfficiencyFrontAxleLeft,
            totalParkingEfficiencyFrontAxleRight,
            totalParkingEfficiencyFrontAxlePassFail,
            totalParkingEfficiencyFrontAxleStandard,
            totalParkingEfficiencyRearAxleLeft,
            totalParkingEfficiencyRearAxleRight,
            totalParkingEfficiencyRearAxlePassFail,
            totalParkingEfficiencyRearAxleStandard,
            totalBrakeEfficiencyFrontAxleLeft,
            totalBrakeEfficiencyFrontAxleRight,
            totalBrakeEfficiencyFrontAxlePassFail,
            totalBrakeEfficiencyFrontAxleStandard,
            totalBrakeEfficiencyRearAxleLeft,
            totalBrakeEfficiencyRearAxleRight,
            totalBrakeEfficiencyRearAxlePassFail,
            totalBrakeEfficiencyRearAxleStandard,
            totalHandBrakeEfficiencyFrontAxleLeft,
            totalHandBrakeEfficiencyFrontAxleRight,
            totalHandBrakeEfficiencyFrontAxlePassFail,
            totalHandBrakeEfficiencyFrontAxleStandard,
            totalHandBrakeEfficiencyRearAxleLeft,
            totalHandBrakeEfficiencyRearAxleRight,
            totalHandBrakeEfficiencyRearAxlePassFail,
            totalHandBrakeEfficiencyRearAxleStandard,
            suspensionEfficiencyFrontAxleLeft,
            suspensionEfficiencyFrontAxleRight,
            suspensionEfficiencyFrontAxlePassFail,
            suspensionEfficiencyFrontAxleStandard,
            suspensionEfficiencyRearAxleLeft,
            suspensionEfficiencyRearAxleRight,
            suspensionEfficiencyRearAxlePassFail,
            suspensionEfficiencyRearAxleStandard,
            suspensionDifferenceFrontAxleLeft,
            suspensionDifferenceFrontAxleRight,
            suspensionDifferenceFrontAxlePassFail,
            suspensionDifferenceFrontAxleStandard,
            suspensionDifferenceRearAxleLeft,
            suspensionDifferenceRearAxleRight,
            suspensionDifferenceRearAxlePassFail,
            suspensionDifferenceRearAxleStandard,
            highBeanIntensityLeft,
            highBeanIntensityLeftPassFail,
            highBeanIntensityLeftStandard,
            highBeanIntensityRight,
            highBeanIntensityRightPassFail,
            highBeanIntensityRightStandard,
            offsetLRofFarLightLeft,
            offsetLRofFarLightLeftPassFail,
            offsetLRofFarLightLeftStandard,
            offsetLRofFarLightRight,
            offsetLRofFarLightRightPassFail,
            offsetLRofFarLightRightStandard,
            offsetLRofNearLightLeft,
            offsetLRofNearLightLeftPassFail,
            offsetLRofNearLightLeftStandard,
            offsetLRofNearLightRight,
            offsetLRofNearLightRightPassFail,
            offsetLRofNearLightRightStandard,
            left,
            leftPassFail,
            leftStandard,
            right,
            rightPassFail,
            rightStandard,
            offsetUDofFarLightLeft,
            offsetUDofFarLightLeftPassFail,
            offsetUDofFarLightLeftStandard,
            offsetUDofFarLightRight,
            offsetUDofFarLightRightPassFail,
            offsetUDofFarLightRightStandard,
            offsetUDofNearLightLeft,
            offsetUDofNearLightLeftPassFail,
            offsetUDofNearLightLeftStandard,
            offsetUDofNearLightRight,
            offsetUDofNearLightRightPassFail,
            offsetUDofNearLightRightStandard,
            hcTestMode,
            hcPassFail,
            ocTestMode,
            ocPassFail,
            lambdaTestMode,
            lambdaPassFail,
            co2TestMode,
            co2PassFail,
            o2TestMode,
            o2PassFail,
            noTestMode,
            noPassFail,
        } = formData;

        toast.promise(createInspectiontest({
            vehicle,
            user,
            brake: {
                frontAxleLeft: brakeFrontAxleLeft,
                frontAxleRight: brakeFrontAxleRight,
                frontAxlePassFail: brakeFrontAxlePassFail,
                frontAxleStandard: brakeFrontAxleStandard,
                rearAxleLeft: brakeRearAxleLeft,
                rearAxleRight: brakeRearAxleRight,
                rearAxlePassFail: brakeRearAxlePassFail,
                rearAxleStandard: brakeRearAxleStandard,
            },
            parkingForce: {
                frontAxleLeft: parkingForceFrontAxleLeft,
                frontAxleRight: parkingForceFrontAxleRight,
                frontAxlePassFail: parkingForceFrontAxlePassFail,
                frontAxleStandard: parkingForceFrontAxleStandard,
                rearAxleLeft: parkingForceRearAxleLeft,
                rearAxleRight: parkingForceRearAxleRight,
                rearAxlePassFail: parkingForceRearAxlePassFail,
                rearAxleStandard: parkingForceRearAxleStandard,
            },
            axleLoad: {
                frontAxleLeft: axleLoadFrontAxleLeft,
                frontAxleRight: axleLoadFrontAxleRight,
                frontAxlePassFail: axleLoadFrontAxlePassFail,
                frontAxleStandard: axleLoadFrontAxleStandard,
                rearAxleLeft: axleLoadRearAxleLeft,
                rearAxleRight: axleLoadRearAxleRight,
                rearAxlePassFail: axleLoadRearAxlePassFail,
                rearAxleStandard: axleloadRearAxleStandard,
            },
            brakeEfficiency: {
                frontAxleLeft: brakeEfficiencyFrontAxleLeft,
                frontAxleRight: brakeEfficiencyFrontAxleRight,
                frontAxlePassFail: brakeEfficiencyFrontAxlePassFail,
                frontAxleStandard: brakeEfficiencyfrontAxleStandard,
                rearAxleLeft: brakeEfficiencyRearAxleLeft,
                rearAxleRight: brakeEfficiencyRearAxleRight,
                rearAxlePassFail: brakeEfficiencyRearAxlePassFail,
                rearAxleStandard: brakeEfficiencyRearAxleStandard,
            },
            brakeDifference: {
                frontAxleLeft: brakeDifferenceFrontAxleLeft,
                frontAxleRight: brakeDifferenceFrontAxleRight,
                frontAxlePassFail: brakeDifferenceFrontAxlePassFail,
                frontAxleStandard: brakeDifferenceFrontAxleStandard,
                rearAxleLeft: brakeDifferenceRearAxleLeft,
                rearAxleRight: brakeDifferenceRearAxleRight,
                rearAxlePassFail: brakeDifferenceRearAxlePassFail,
                rearAxleStandard: brakeDifferenceRearAxleStandard,
            },
            parkingBrakeEfficiency: {
                frontAxleLeft: parkingBrakeEfficiencyFrontAxleLeft,
                frontAxleRight: parkingBrakeEfficiencyFrontAxleRight,
                frontAxlePassFail: parkingBrakeEfficiencyFrontAxlePassFail,
                frontAxleStandard: parkingBrakeEfficiencyFrontAxleStandard,
                rearAxleLeft: parkingBrakeEfficiencyRearAxleLeft,
                rearAxleRight: parkingBrakeEfficiencyRearAxleRight,
                rearAxlePassFail: parkingBrakeEfficiencyRearAxlePassFail,
                rearAxleStandard: parkingBrakeEfficiencyRearAxleStandard,
            },
            parkingBrakeDifference: {
                frontAxleLeft: parkingBrakeDifferenceFrontAxleLeft,
                frontAxleRight: parkingBrakeDifferenceFrontAxleRight,
                frontAxlePassFail: parkingBrakeDifferenceFrontAxlePassFail,
                frontAxleStandard: parkingBrakeDifferenceFrontAxleStandard,
                rearAxleLeft: parkingBrakeDifferenceRearAxleLeft,
                rearAxleRight: parkingBrakeDifferenceRearAxleRight,
                rearAxlePassFail: parkingBrakeDifferenceRearAxlePassFail,
                rearAxleStandard: parkingBrakeDifferenceRearAxleStandard,
            },
            sideSlip: {
                frontAxleLeft: sideSlipFrontAxleLeft,
                frontAxleRight: sideSlipFrontAxleRight,
                frontAxlePassFail: sideSlipFrontAxlePassFail,
                frontAxleStandard: sideSlipFrontAxleStandard,
                rearAxleLeft: sideSlipRearAxleLeft,
                rearAxleRight: sideSlipRearAxleRight,
                rearAxlePassFail: sideSlipRearAxlePassFail,
                rearAxleStandard: sideSlipRearAxleStandard,
            },
            totalParkingEfficiency: {
                frontAxleLeft: totalParkingEfficiencyFrontAxleLeft,
                frontAxleRight: totalParkingEfficiencyFrontAxleRight,
                frontAxlePassFail: totalParkingEfficiencyFrontAxlePassFail,
                frontAxleStandard: totalParkingEfficiencyFrontAxleStandard,
                rearAxleLeft: totalParkingEfficiencyRearAxleLeft,
                rearAxleRight: totalParkingEfficiencyRearAxleRight,
                rearAxlePassFail: totalParkingEfficiencyRearAxlePassFail,
                rearAxleStandard: totalParkingEfficiencyRearAxleStandard,
            },
            totalBrakeEfficiency: {
                frontAxleLeft: totalBrakeEfficiencyFrontAxleLeft,
                frontAxleRight: totalBrakeEfficiencyFrontAxleRight,
                frontAxlePassFail: totalBrakeEfficiencyFrontAxlePassFail,
                frontAxleStandard: totalBrakeEfficiencyFrontAxleStandard,
                rearAxleLeft: totalBrakeEfficiencyRearAxleLeft,
                rearAxleRight: totalBrakeEfficiencyRearAxleRight,
                rearAxlePassFail: totalBrakeEfficiencyRearAxlePassFail,
                rearAxleStandard: totalBrakeEfficiencyRearAxleStandard,
            },
            totalHandBrakeEfficiency: {
                frontAxleLeft: totalHandBrakeEfficiencyFrontAxleLeft,
                frontAxleRight: totalHandBrakeEfficiencyFrontAxleRight,
                frontAxlePassFail: totalHandBrakeEfficiencyFrontAxlePassFail,
                frontAxleStandard: totalHandBrakeEfficiencyFrontAxleStandard,
                rearAxleLeft: totalHandBrakeEfficiencyRearAxleLeft,
                rearAxleRight: totalHandBrakeEfficiencyRearAxleRight,
                rearAxlePassFail: totalHandBrakeEfficiencyRearAxlePassFail,
                rearAxleStandard: totalHandBrakeEfficiencyRearAxleStandard,
            },
            suspensionEfficiency: {
                frontAxleLeft: suspensionEfficiencyFrontAxleLeft,
                frontAxleRight: suspensionEfficiencyFrontAxleRight,
                frontAxlePassFail: suspensionEfficiencyFrontAxlePassFail,
                frontAxleStandard: suspensionEfficiencyFrontAxleStandard,
                rearAxleLeft: suspensionEfficiencyRearAxleLeft,
                rearAxleRight: suspensionEfficiencyRearAxleRight,
                rearAxlePassFail: suspensionEfficiencyRearAxlePassFail,
                rearAxleStandard: suspensionEfficiencyRearAxleStandard,
            },
            suspensionDifference: {
                frontAxleLeft: suspensionDifferenceFrontAxleLeft,
                frontAxleRight: suspensionDifferenceFrontAxleRight,
                frontAxlePassFail: suspensionDifferenceFrontAxlePassFail,
                frontAxleStandard: suspensionDifferenceFrontAxleStandard,
                rearAxleLeft: suspensionDifferenceRearAxleLeft,
                rearAxleRight: suspensionDifferenceRearAxleRight,
                rearAxlePassFail: suspensionDifferenceRearAxlePassFail,
                rearAxleStandard: suspensionDifferenceRearAxleStandard,
            },
            highBeanIntensity: {
                left: highBeanIntensityLeft,
                leftPassFail: highBeanIntensityLeftPassFail,
                leftStandard: highBeanIntensityLeftStandard,
                right: highBeanIntensityRight,
                rightPassFail: highBeanIntensityRightPassFail,
                rightStandard: highBeanIntensityRightStandard,
            },
            offsetLRofFarLight: {
                left: offsetLRofFarLightLeft,
                leftPassFail: offsetLRofFarLightLeftPassFail,
                leftStandard: offsetLRofFarLightLeftStandard,
                right: offsetLRofFarLightRight,
                rightPassFail: offsetLRofFarLightRightPassFail,
                rightStandard: offsetLRofFarLightRightStandard,
            },
            offsetLRofNearLight: {
                left: offsetLRofNearLightLeft,
                leftPassFail: offsetLRofNearLightLeftPassFail,
                leftStandard: offsetLRofNearLightLeftStandard,
                right: offsetLRofNearLightRight,
                rightPassFail: offsetLRofNearLightRightPassFail,
                rightStandard: offsetLRofNearLightRightStandard,
            },
            offsetUDofFarLightLeft: {
                left: offsetUDofFarLightLeft,
                leftPassFail: offsetUDofFarLightLeftPassFail,
                leftStandard: offsetUDofFarLightLeftStandard,
                right: offsetUDofFarLightRight,
                rightPassFail: offsetUDofFarLightRightPassFail,
                rightStandard: offsetUDofFarLightRightStandard,
            },
            hc: {
                testMode: hcTestMode,
                passFail: hcPassFail,
            },
            oc: {
                testMode: ocTestMode,
                passFail: ocPassFail,
            },
            lambda: {
                testMode: lambdaTestMode,
                passFail: lambdaPassFail,
            },
            co2: {
                testMode: co2TestMode,
                passFail: co2PassFail,
            },
            o2: {
                testMode: o2TestMode,
                passFail: o2PassFail,
            },
            no: {
                testMode: noTestMode,
                passFail: noPassFail,
            },
        })
            .unwrap(), {
            pending: `Adding an Inspection Test `,
            success: `Successfully added Inspection Test `,
            error: `Could not add an Inspection Test `,
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

        return (<Navigate to={`/inspectiontests`} replace={false}/>)
    }

    if (isLoading || isUserLoading) return <h1>Loading</h1>

    if (isError || isUserLoading) {
        toast.error("Could not fetch the Vehicle and User Data", {
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
                                htmlFor="user">
                                User <span className="text-rose-500">*</span>
                            </label>
                            <select
                                id="user"
                                className="form-select w-full ml-2 "
                                name="user"
                                defaultValue={''}
                                {...register('user', {
                                        required: {value: true, message: "user  is required"},
                                    }
                                )}
                            >
                                <option value={``}>---</option>
                                {
                                    userData.users.map(user => {
                                        return <option key={user._id}
                                                       value={user._id}>{user.firstName}</option>
                                    })
                                }

                            </select>
                            {errors.user &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.user.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeFrontAxleLeft">
                                Brake Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeFrontAxleLeft"
                                {...register('brakeFrontAxleLeft', {
                                        required: {value: true, message: "Brake Front Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.brakeFrontAxleLeft &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.brakeFrontAxleLeft.message}</span>
                                </p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeFrontAxleRight">
                                Brake Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeFrontAxleRight"
                                {...register('brakeFrontAxleRight', {
                                        required: {value: true, message: "Brake Front Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.brakeFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeFrontAxlePassFail">
                                Brake Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeFrontAxlePassFail"
                                {...register('brakeFrontAxlePassFail', {
                                        required: {value: true, message: "Brake Front Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.brakeFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeFrontAxleStandard">
                                Brake Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeFrontAxleStandard"
                                {...register('brakeFrontAxleStandard', {
                                        required: {value: true, message: "Brake Front Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.brakeFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeRearAxleLeft">
                                Brake Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeRearAxleLeft"
                                {...register('brakeRearAxleLeft', {
                                        required: {value: true, message: "Brake Rear Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.brakeRearAxleLeft &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.brakeRearAxleLeft.message}</span>
                                </p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeRearAxleRight">
                                Brake Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeRearAxleRight"
                                {...register('brakeRearAxleRight', {
                                        required: {value: true, message: "Brake Rear Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.brakeRearAxleRight &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.brakeRearAxleRight.message}</span>
                                </p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeRearAxlePassFail">
                                Brake Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeRearAxlePassFail"
                                {...register('brakeRearAxlePassFail', {
                                        required: {value: true, message: "Brake Rear Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.brakeRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeRearAxleStandard">
                                Brake Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeRearAxleStandard"
                                {...register('brakeRearAxleStandard', {
                                        required: {value: true, message: "Brake Rear Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.brakeRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceFrontAxleLeft">
                                Parking Force Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceFrontAxleLeft"
                                {...register('parkingForceFrontAxleLeft', {
                                        required: {value: true, message: "Parking Force Front Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceFrontAxleRight">
                                Parking Force Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceFrontAxleRight"
                                {...register('parkingForceFrontAxleRight', {
                                        required: {value: true, message: "Parking Force Front Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceFrontAxlePassFail">
                                Parking Force Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceFrontAxlePassFail"
                                {...register('parkingForceFrontAxlePassFail', {
                                        required: {value: true, message: "Parking Force Front Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceFrontAxleStandard">
                                Parking Force Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceFrontAxleStandard"
                                {...register('parkingForceFrontAxleStandard', {
                                        required: {value: true, message: "Parking Force Front Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceRearAxleLeft">
                                Parking Force Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceRearAxleLeft"
                                {...register('parkingForceRearAxleLeft', {
                                        required: {value: true, message: "Parking Force Rear Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceRearAxleRight">
                                Parking Force Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceRearAxleRight"
                                {...register('parkingForceRearAxleRight', {
                                        required: {value: true, message: "Parking Force Rear Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceRearAxlePassFail">
                                Parking Force Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceRearAxlePassFail"
                                {...register('parkingForceRearAxlePassFail', {
                                        required: {value: true, message: "Parking Force Rear Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingForceRearAxleStandard">
                                Parking Force Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingForceRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingForceRearAxleStandard"
                                {...register('parkingForceRearAxleStandard', {
                                        required: {value: true, message: "Parking Force Rear Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.parkingForceRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingForceRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleLoadFrontAxleLeft">
                                Axle Load Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleLoadFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleLoadFrontAxleLeft"
                                {...register('axleLoadFrontAxleLeft', {
                                        required: {value: true, message: "Axle Load Front Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.axleLoadFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleLoadFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleLoadFrontAxleRight">
                                Axle Load Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleLoadFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleLoadFrontAxleRight"
                                {...register('axleLoadFrontAxleRight', {
                                        required: {value: true, message: "Axle Load Front Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.axleLoadFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleLoadFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleLoadFrontAxlePassFail">
                                Axle Load Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleLoadFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleLoadFrontAxlePassFail"
                                {...register('axleLoadFrontAxlePassFail', {
                                        required: {value: true, message: "Axle Load Front Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.axleLoadFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleLoadFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleLoadFrontAxleStandard">
                                Axle Load Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleLoadFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleLoadFrontAxleStandard"
                                {...register('axleLoadFrontAxleStandard', {
                                        required: {value: true, message: "Axle Load Front Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.axleLoadFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleLoadFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleLoadRearAxleLeft">
                                Axle Load Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleLoadRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleLoadRearAxleLeft"
                                {...register('axleLoadRearAxleLeft', {
                                        required: {value: true, message: "Axle Load Rear Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.axleLoadRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleLoadRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleLoadRearAxleRight">
                                Axle Load Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleLoadRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleLoadRearAxleRight"
                                {...register('axleLoadRearAxleRight', {
                                        required: {value: true, message: "Axle Load Rear Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.axleLoadRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleLoadRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleLoadRearAxlePassFail">
                                Axle Load Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleLoadRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleLoadRearAxlePassFail"
                                {...register('axleLoadRearAxlePassFail', {
                                        required: {value: true, message: "Axle Load Rear Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.axleLoadRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleLoadRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="axleloadRearAxleStandard">
                                Axleload Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="axleloadRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="axleloadRearAxleStandard"
                                {...register('axleloadRearAxleStandard', {
                                        required: {value: true, message: "Axleload Rear Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.axleloadRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.axleloadRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyFrontAxleLeft">
                                Brake Efficiency Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyFrontAxleLeft"
                                {...register('brakeEfficiencyFrontAxleLeft', {
                                        required: {value: true, message: "Brake Efficiency Front Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyFrontAxleRight">
                                Brake Efficiency Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyFrontAxleRight"
                                {...register('brakeEfficiencyFrontAxleRight', {
                                        required: {value: true, message: "Brake Efficiency Front Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyFrontAxlePassFail">
                                Brake Efficiency Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyFrontAxlePassFail"
                                {...register('brakeEfficiencyFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Brake Efficiency Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyfrontAxleStandard">
                                Brake Efficiencyfront Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyfrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyfrontAxleStandard"
                                {...register('brakeEfficiencyfrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Brake Efficiencyfront Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyfrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyfrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyRearAxleLeft">
                                Brake Efficiency Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyRearAxleLeft"
                                {...register('brakeEfficiencyRearAxleLeft', {
                                        required: {value: true, message: "Brake Efficiency Rear Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyRearAxleRight">
                                Brake Efficiency Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyRearAxleRight"
                                {...register('brakeEfficiencyRearAxleRight', {
                                        required: {value: true, message: "Brake Efficiency Rear Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyRearAxlePassFail">
                                Brake Efficiency Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyRearAxlePassFail"
                                {...register('brakeEfficiencyRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Brake Efficiency Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeEfficiencyRearAxleStandard">
                                Brake Efficiency Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeEfficiencyRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeEfficiencyRearAxleStandard"
                                {...register('brakeEfficiencyRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Brake Efficiency Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeEfficiencyRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeEfficiencyRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceFrontAxleLeft">
                                Brake Difference Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceFrontAxleLeft"
                                {...register('brakeDifferenceFrontAxleLeft', {
                                        required: {value: true, message: "Brake Difference Front Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.brakeDifferenceFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceFrontAxleRight">
                                Brake Difference Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceFrontAxleRight"
                                {...register('brakeDifferenceFrontAxleRight', {
                                        required: {value: true, message: "Brake Difference Front Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.brakeDifferenceFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceFrontAxlePassFail">
                                Brake Difference Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceFrontAxlePassFail"
                                {...register('brakeDifferenceFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Brake Difference Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeDifferenceFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceFrontAxleStandard">
                                Brake Difference Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceFrontAxleStandard"
                                {...register('brakeDifferenceFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Brake Difference Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeDifferenceFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceRearAxleLeft">
                                Brake Difference Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceRearAxleLeft"
                                {...register('brakeDifferenceRearAxleLeft', {
                                        required: {value: true, message: "Brake Difference Rear Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.brakeDifferenceRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceRearAxleRight">
                                Brake Difference Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceRearAxleRight"
                                {...register('brakeDifferenceRearAxleRight', {
                                        required: {value: true, message: "Brake Difference Rear Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.brakeDifferenceRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceRearAxlePassFail">
                                Brake Difference Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceRearAxlePassFail"
                                {...register('brakeDifferenceRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Brake Difference Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeDifferenceRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="brakeDifferenceRearAxleStandard">
                                Brake Difference Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="brakeDifferenceRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="brakeDifferenceRearAxleStandard"
                                {...register('brakeDifferenceRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Brake Difference Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.brakeDifferenceRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.brakeDifferenceRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyFrontAxleLeft">
                                Parking Brake Efficiency Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyFrontAxleLeft"
                                {...register('parkingBrakeEfficiencyFrontAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Front Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyFrontAxleRight">
                                Parking Brake Efficiency Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyFrontAxleRight"
                                {...register('parkingBrakeEfficiencyFrontAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Front Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyFrontAxlePassFail">
                                Parking Brake Efficiency Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyFrontAxlePassFail"
                                {...register('parkingBrakeEfficiencyFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyFrontAxleStandard">
                                Parking Brake Efficiency Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyFrontAxleStandard"
                                {...register('parkingBrakeEfficiencyFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyRearAxleLeft">
                                Parking Brake Efficiency Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyRearAxleLeft"
                                {...register('parkingBrakeEfficiencyRearAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Rear Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyRearAxleRight">
                                Parking Brake Efficiency Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyRearAxleRight"
                                {...register('parkingBrakeEfficiencyRearAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Rear Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyRearAxlePassFail">
                                Parking Brake Efficiency Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyRearAxlePassFail"
                                {...register('parkingBrakeEfficiencyRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeEfficiencyRearAxleStandard">
                                Parking Brake Efficiency Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeEfficiencyRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeEfficiencyRearAxleStandard"
                                {...register('parkingBrakeEfficiencyRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Efficiency Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeEfficiencyRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeEfficiencyRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceFrontAxleLeft">
                                Parking Brake Difference Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceFrontAxleLeft"
                                {...register('parkingBrakeDifferenceFrontAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Front Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceFrontAxleRight">
                                Parking Brake Difference Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceFrontAxleRight"
                                {...register('parkingBrakeDifferenceFrontAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Front Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceFrontAxlePassFail">
                                Parking Brake Difference Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceFrontAxlePassFail"
                                {...register('parkingBrakeDifferenceFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceFrontAxleStandard">
                                Parking Brake Difference Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceFrontAxleStandard"
                                {...register('parkingBrakeDifferenceFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceRearAxleLeft">
                                Parking Brake Difference Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceRearAxleLeft"
                                {...register('parkingBrakeDifferenceRearAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Rear Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceRearAxleRight">
                                Parking Brake Difference Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceRearAxleRight"
                                {...register('parkingBrakeDifferenceRearAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Rear Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceRearAxlePassFail">
                                Parking Brake Difference Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceRearAxlePassFail"
                                {...register('parkingBrakeDifferenceRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="parkingBrakeDifferenceRearAxleStandard">
                                Parking Brake Difference Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="parkingBrakeDifferenceRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="parkingBrakeDifferenceRearAxleStandard"
                                {...register('parkingBrakeDifferenceRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Parking Brake Difference Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.parkingBrakeDifferenceRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.parkingBrakeDifferenceRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipFrontAxleLeft">
                                Side Slip Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipFrontAxleLeft"
                                {...register('sideSlipFrontAxleLeft', {
                                        required: {value: true, message: "Side Slip Front Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipFrontAxleRight">
                                Side Slip Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipFrontAxleRight"
                                {...register('sideSlipFrontAxleRight', {
                                        required: {value: true, message: "Side Slip Front Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipFrontAxlePassFail">
                                Side Slip Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipFrontAxlePassFail"
                                {...register('sideSlipFrontAxlePassFail', {
                                        required: {value: true, message: "Side Slip Front Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipFrontAxleStandard">
                                Side Slip Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipFrontAxleStandard"
                                {...register('sideSlipFrontAxleStandard', {
                                        required: {value: true, message: "Side Slip Front Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipRearAxleLeft">
                                Side Slip Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipRearAxleLeft"
                                {...register('sideSlipRearAxleLeft', {
                                        required: {value: true, message: "Side Slip Rear Axle Left  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipRearAxleRight">
                                Side Slip Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipRearAxleRight"
                                {...register('sideSlipRearAxleRight', {
                                        required: {value: true, message: "Side Slip Rear Axle Right  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipRearAxlePassFail">
                                Side Slip Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipRearAxlePassFail"
                                {...register('sideSlipRearAxlePassFail', {
                                        required: {value: true, message: "Side Slip Rear Axle Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="sideSlipRearAxleStandard">
                                Side Slip Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="sideSlipRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="sideSlipRearAxleStandard"
                                {...register('sideSlipRearAxleStandard', {
                                        required: {value: true, message: "Side Slip Rear Axle Standard  is required"},

                                    }
                                )}
                            />
                            {errors.sideSlipRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.sideSlipRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyFrontAxleLeft">
                                Total Parking Efficiency Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyFrontAxleLeft"
                                {...register('totalParkingEfficiencyFrontAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Front Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyFrontAxleRight">
                                Total Parking Efficiency Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyFrontAxleRight"
                                {...register('totalParkingEfficiencyFrontAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Front Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyFrontAxlePassFail">
                                Total Parking Efficiency Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyFrontAxlePassFail"
                                {...register('totalParkingEfficiencyFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyFrontAxleStandard">
                                Total Parking Efficiency Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyFrontAxleStandard"
                                {...register('totalParkingEfficiencyFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyRearAxleLeft">
                                Total Parking Efficiency Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyRearAxleLeft"
                                {...register('totalParkingEfficiencyRearAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Rear Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyRearAxleRight">
                                Total Parking Efficiency Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyRearAxleRight"
                                {...register('totalParkingEfficiencyRearAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Rear Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyRearAxlePassFail">
                                Total Parking Efficiency Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyRearAxlePassFail"
                                {...register('totalParkingEfficiencyRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalParkingEfficiencyRearAxleStandard">
                                Total Parking Efficiency Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalParkingEfficiencyRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalParkingEfficiencyRearAxleStandard"
                                {...register('totalParkingEfficiencyRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Total Parking Efficiency Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalParkingEfficiencyRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalParkingEfficiencyRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyFrontAxleLeft">
                                Total Brake Efficiency Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyFrontAxleLeft"
                                {...register('totalBrakeEfficiencyFrontAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Front Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyFrontAxleRight">
                                Total Brake Efficiency Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyFrontAxleRight"
                                {...register('totalBrakeEfficiencyFrontAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Front Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyFrontAxlePassFail">
                                Total Brake Efficiency Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyFrontAxlePassFail"
                                {...register('totalBrakeEfficiencyFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyFrontAxleStandard">
                                Total Brake Efficiency Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyFrontAxleStandard"
                                {...register('totalBrakeEfficiencyFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyRearAxleLeft">
                                Total Brake Efficiency Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyRearAxleLeft"
                                {...register('totalBrakeEfficiencyRearAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Rear Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyRearAxleRight">
                                Total Brake Efficiency Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyRearAxleRight"
                                {...register('totalBrakeEfficiencyRearAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Rear Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyRearAxlePassFail">
                                Total Brake Efficiency Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyRearAxlePassFail"
                                {...register('totalBrakeEfficiencyRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalBrakeEfficiencyRearAxleStandard">
                                Total Brake Efficiency Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalBrakeEfficiencyRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalBrakeEfficiencyRearAxleStandard"
                                {...register('totalBrakeEfficiencyRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Total Brake Efficiency Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalBrakeEfficiencyRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalBrakeEfficiencyRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyFrontAxleLeft">
                                Total Hand Brake Efficiency Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyFrontAxleLeft"
                                {...register('totalHandBrakeEfficiencyFrontAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Front Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalHandBrakeEfficiencyFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyFrontAxleRight">
                                Total Hand Brake Efficiency Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyFrontAxleRight"
                                {...register('totalHandBrakeEfficiencyFrontAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Front Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalHandBrakeEfficiencyFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyFrontAxlePassFail">
                                Total Hand Brake Efficiency Front Axle Pass Fail <span
                                className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyFrontAxlePassFail"
                                {...register('totalHandBrakeEfficiencyFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyFrontAxlePassFail &&
                                <p className={`ml-2 mt-1 text-red-600`}>
                                    <span>{errors.totalHandBrakeEfficiencyFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyFrontAxleStandard">
                                Total Hand Brake Efficiency Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyFrontAxleStandard"
                                {...register('totalHandBrakeEfficiencyFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyFrontAxleStandard &&
                                <p className={`ml-2 mt-1 text-red-600`}>
                                    <span>{errors.totalHandBrakeEfficiencyFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyRearAxleLeft">
                                Total Hand Brake Efficiency Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyRearAxleLeft"
                                {...register('totalHandBrakeEfficiencyRearAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Rear Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalHandBrakeEfficiencyRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyRearAxleRight">
                                Total Hand Brake Efficiency Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyRearAxleRight"
                                {...register('totalHandBrakeEfficiencyRearAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Rear Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalHandBrakeEfficiencyRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyRearAxlePassFail">
                                Total Hand Brake Efficiency Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyRearAxlePassFail"
                                {...register('totalHandBrakeEfficiencyRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalHandBrakeEfficiencyRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="totalHandBrakeEfficiencyRearAxleStandard">
                                Total Hand Brake Efficiency Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="totalHandBrakeEfficiencyRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="totalHandBrakeEfficiencyRearAxleStandard"
                                {...register('totalHandBrakeEfficiencyRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Total Hand Brake Efficiency Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.totalHandBrakeEfficiencyRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.totalHandBrakeEfficiencyRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyFrontAxleLeft">
                                Suspension Efficiency Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyFrontAxleLeft"
                                {...register('suspensionEfficiencyFrontAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Front Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyFrontAxleRight">
                                Suspension Efficiency Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyFrontAxleRight"
                                {...register('suspensionEfficiencyFrontAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Front Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyFrontAxlePassFail">
                                Suspension Efficiency Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyFrontAxlePassFail"
                                {...register('suspensionEfficiencyFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyFrontAxleStandard">
                                Suspension Efficiency Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyFrontAxleStandard"
                                {...register('suspensionEfficiencyFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyRearAxleLeft">
                                Suspension Efficiency Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyRearAxleLeft"
                                {...register('suspensionEfficiencyRearAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Rear Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyRearAxleRight">
                                Suspension Efficiency Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyRearAxleRight"
                                {...register('suspensionEfficiencyRearAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Rear Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyRearAxlePassFail">
                                Suspension Efficiency Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyRearAxlePassFail"
                                {...register('suspensionEfficiencyRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionEfficiencyRearAxleStandard">
                                Suspension Efficiency Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionEfficiencyRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionEfficiencyRearAxleStandard"
                                {...register('suspensionEfficiencyRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Suspension Efficiency Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionEfficiencyRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionEfficiencyRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceFrontAxleLeft">
                                Suspension Difference Front Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceFrontAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceFrontAxleLeft"
                                {...register('suspensionDifferenceFrontAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Front Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceFrontAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceFrontAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceFrontAxleRight">
                                Suspension Difference Front Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceFrontAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceFrontAxleRight"
                                {...register('suspensionDifferenceFrontAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Front Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceFrontAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceFrontAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceFrontAxlePassFail">
                                Suspension Difference Front Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceFrontAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceFrontAxlePassFail"
                                {...register('suspensionDifferenceFrontAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Front Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceFrontAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceFrontAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceFrontAxleStandard">
                                Suspension Difference Front Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceFrontAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceFrontAxleStandard"
                                {...register('suspensionDifferenceFrontAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Front Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceFrontAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceFrontAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceRearAxleLeft">
                                Suspension Difference Rear Axle Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceRearAxleLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceRearAxleLeft"
                                {...register('suspensionDifferenceRearAxleLeft', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Rear Axle Left  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceRearAxleLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceRearAxleLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceRearAxleRight">
                                Suspension Difference Rear Axle Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceRearAxleRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceRearAxleRight"
                                {...register('suspensionDifferenceRearAxleRight', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Rear Axle Right  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceRearAxleRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceRearAxleRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceRearAxlePassFail">
                                Suspension Difference Rear Axle Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceRearAxlePassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceRearAxlePassFail"
                                {...register('suspensionDifferenceRearAxlePassFail', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Rear Axle Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceRearAxlePassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceRearAxlePassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="suspensionDifferenceRearAxleStandard">
                                Suspension Difference Rear Axle Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="suspensionDifferenceRearAxleStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="suspensionDifferenceRearAxleStandard"
                                {...register('suspensionDifferenceRearAxleStandard', {
                                        required: {
                                            value: true,
                                            message: "Suspension Difference Rear Axle Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.suspensionDifferenceRearAxleStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.suspensionDifferenceRearAxleStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="highBeanIntensityLeft">
                                High Bean Intensity Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="highBeanIntensityLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="highBeanIntensityLeft"
                                {...register('highBeanIntensityLeft', {
                                        required: {value: true, message: "High Bean Intensity Left  is required"},

                                    }
                                )}
                            />
                            {errors.highBeanIntensityLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.highBeanIntensityLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="highBeanIntensityLeftPassFail">
                                High Bean Intensity Left Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="highBeanIntensityLeftPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="highBeanIntensityLeftPassFail"
                                {...register('highBeanIntensityLeftPassFail', {
                                        required: {value: true, message: "High Bean Intensity Left Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.highBeanIntensityLeftPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.highBeanIntensityLeftPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="highBeanIntensityLeftStandard">
                                High Bean Intensity Left Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="highBeanIntensityLeftStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="highBeanIntensityLeftStandard"
                                {...register('highBeanIntensityLeftStandard', {
                                        required: {value: true, message: "High Bean Intensity Left Standard  is required"},

                                    }
                                )}
                            />
                            {errors.highBeanIntensityLeftStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.highBeanIntensityLeftStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="highBeanIntensityRight">
                                High Bean Intensity Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="highBeanIntensityRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="highBeanIntensityRight"
                                {...register('highBeanIntensityRight', {
                                        required: {value: true, message: "High Bean Intensity Right  is required"},

                                    }
                                )}
                            />
                            {errors.highBeanIntensityRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.highBeanIntensityRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="highBeanIntensityRightPassFail">
                                High Bean Intensity Right Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="highBeanIntensityRightPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="highBeanIntensityRightPassFail"
                                {...register('highBeanIntensityRightPassFail', {
                                        required: {
                                            value: true,
                                            message: "High Bean Intensity Right Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.highBeanIntensityRightPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.highBeanIntensityRightPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="highBeanIntensityRightStandard">
                                High Bean Intensity Right Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="highBeanIntensityRightStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="highBeanIntensityRightStandard"
                                {...register('highBeanIntensityRightStandard', {
                                        required: {value: true, message: "High Bean Intensity Right Standard  is required"},

                                    }
                                )}
                            />
                            {errors.highBeanIntensityRightStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.highBeanIntensityRightStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofFarLightLeft">
                                Offset L Rof Far Light Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofFarLightLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofFarLightLeft"
                                {...register('offsetLRofFarLightLeft', {
                                        required: {value: true, message: "Offset L Rof Far Light Left  is required"},

                                    }
                                )}
                            />
                            {errors.offsetLRofFarLightLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofFarLightLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofFarLightLeftPassFail">
                                Offset L Rof Far Light Left Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofFarLightLeftPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofFarLightLeftPassFail"
                                {...register('offsetLRofFarLightLeftPassFail', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Far Light Left Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofFarLightLeftPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofFarLightLeftPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofFarLightLeftStandard">
                                Offset L Rof Far Light Left Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofFarLightLeftStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofFarLightLeftStandard"
                                {...register('offsetLRofFarLightLeftStandard', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Far Light Left Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofFarLightLeftStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofFarLightLeftStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofFarLightRight">
                                Offset L Rof Far Light Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofFarLightRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofFarLightRight"
                                {...register('offsetLRofFarLightRight', {
                                        required: {value: true, message: "Offset L Rof Far Light Right  is required"},

                                    }
                                )}
                            />
                            {errors.offsetLRofFarLightRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofFarLightRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofFarLightRightPassFail">
                                Offset L Rof Far Light Right Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofFarLightRightPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofFarLightRightPassFail"
                                {...register('offsetLRofFarLightRightPassFail', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Far Light Right Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofFarLightRightPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofFarLightRightPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofFarLightRightStandard">
                                Offset L Rof Far Light Right Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofFarLightRightStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofFarLightRightStandard"
                                {...register('offsetLRofFarLightRightStandard', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Far Light Right Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofFarLightRightStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofFarLightRightStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofNearLightLeft">
                                Offset L Rof Near Light Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofNearLightLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofNearLightLeft"
                                {...register('offsetLRofNearLightLeft', {
                                        required: {value: true, message: "Offset L Rof Near Light Left  is required"},

                                    }
                                )}
                            />
                            {errors.offsetLRofNearLightLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofNearLightLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofNearLightLeftPassFail">
                                Offset L Rof Near Light Left Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofNearLightLeftPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofNearLightLeftPassFail"
                                {...register('offsetLRofNearLightLeftPassFail', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Near Light Left Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofNearLightLeftPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofNearLightLeftPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofNearLightLeftStandard">
                                Offset L Rof Near Light Left Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofNearLightLeftStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofNearLightLeftStandard"
                                {...register('offsetLRofNearLightLeftStandard', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Near Light Left Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofNearLightLeftStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofNearLightLeftStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofNearLightRight">
                                Offset L Rof Near Light Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofNearLightRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofNearLightRight"
                                {...register('offsetLRofNearLightRight', {
                                        required: {value: true, message: "Offset L Rof Near Light Right  is required"},

                                    }
                                )}
                            />
                            {errors.offsetLRofNearLightRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofNearLightRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofNearLightRightPassFail">
                                Offset L Rof Near Light Right Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofNearLightRightPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofNearLightRightPassFail"
                                {...register('offsetLRofNearLightRightPassFail', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Near Light Right Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofNearLightRightPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofNearLightRightPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetLRofNearLightRightStandard">
                                Offset L Rof Near Light Right Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetLRofNearLightRightStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetLRofNearLightRightStandard"
                                {...register('offsetLRofNearLightRightStandard', {
                                        required: {
                                            value: true,
                                            message: "Offset L Rof Near Light Right Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetLRofNearLightRightStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetLRofNearLightRightStandard.message}</span></p>}
                        </div>

                        <div className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="left">
                                Left <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                className="form-input w-full ml-2 "
                                name="left"
                                defaultValue={''}
                                {...register('left', {
                                        required: {value: true, message: "Left  is required"},
                                    }
                                )}
                            ></textarea>
                        </div>

                        <div className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="leftPassFail">
                                Left Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                className="form-input w-full ml-2 "
                                name="leftPassFail"
                                defaultValue={''}
                                {...register('leftPassFail', {
                                        required: {value: true, message: "Left Pass Fail  is required"},
                                    }
                                )}
                            ></textarea>
                        </div>

                        <div className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="leftStandard">
                                Left Standard <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                className="form-input w-full ml-2 "
                                name="leftStandard"
                                defaultValue={''}
                                {...register('leftStandard', {
                                        required: {value: true, message: "Left Standard  is required"},
                                    }
                                )}
                            ></textarea>
                        </div>

                        <div className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="right">
                                Right <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                className="form-input w-full ml-2 "
                                name="right"
                                defaultValue={''}
                                {...register('right', {
                                        required: {value: true, message: "Right  is required"},
                                    }
                                )}
                            ></textarea>
                        </div>

                        <div className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="rightPassFail">
                                Right Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                className="form-input w-full ml-2 "
                                name="rightPassFail"
                                defaultValue={''}
                                {...register('rightPassFail', {
                                        required: {value: true, message: "Right Pass Fail  is required"},
                                    }
                                )}
                            ></textarea>
                        </div>

                        <div className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="rightStandard">
                                Right Standard <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                className="form-input w-full ml-2 "
                                name="rightStandard"
                                defaultValue={''}
                                {...register('rightStandard', {
                                        required: {value: true, message: "Right Standard  is required"},
                                    }
                                )}
                            ></textarea>
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetUDofNearLightLeft">
                                Offset U Dof Near Light Left <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetUDofNearLightLeft"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetUDofNearLightLeft"
                                {...register('offsetUDofNearLightLeft', {
                                        required: {value: true, message: "Offset U Dof Near Light Left  is required"},

                                    }
                                )}
                            />
                            {errors.offsetUDofNearLightLeft && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetUDofNearLightLeft.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetUDofNearLightLeftPassFail">
                                Offset U Dof Near Light Left Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetUDofNearLightLeftPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetUDofNearLightLeftPassFail"
                                {...register('offsetUDofNearLightLeftPassFail', {
                                        required: {
                                            value: true,
                                            message: "Offset U Dof Near Light Left Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetUDofNearLightLeftPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetUDofNearLightLeftPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetUDofNearLightLeftStandard">
                                Offset U Dof Near Light Left Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetUDofNearLightLeftStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetUDofNearLightLeftStandard"
                                {...register('offsetUDofNearLightLeftStandard', {
                                        required: {
                                            value: true,
                                            message: "Offset U Dof Near Light Left Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetUDofNearLightLeftStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetUDofNearLightLeftStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetUDofNearLightRight">
                                Offset U Dof Near Light Right <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetUDofNearLightRight"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetUDofNearLightRight"
                                {...register('offsetUDofNearLightRight', {
                                        required: {value: true, message: "Offset U Dof Near Light Right  is required"},

                                    }
                                )}
                            />
                            {errors.offsetUDofNearLightRight && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetUDofNearLightRight.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetUDofNearLightRightPassFail">
                                Offset U Dof Near Light Right Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetUDofNearLightRightPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetUDofNearLightRightPassFail"
                                {...register('offsetUDofNearLightRightPassFail', {
                                        required: {
                                            value: true,
                                            message: "Offset U Dof Near Light Right Pass Fail  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetUDofNearLightRightPassFail && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetUDofNearLightRightPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="offsetUDofNearLightRightStandard">
                                Offset U Dof Near Light Right Standard <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="offsetUDofNearLightRightStandard"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="offsetUDofNearLightRightStandard"
                                {...register('offsetUDofNearLightRightStandard', {
                                        required: {
                                            value: true,
                                            message: "Offset U Dof Near Light Right Standard  is required"
                                        },

                                    }
                                )}
                            />
                            {errors.offsetUDofNearLightRightStandard && <p className={`ml-2 mt-1 text-red-600`}>
                                <span>{errors.offsetUDofNearLightRightStandard.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="hcTestMode">
                                Hc Test Mode <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="hcTestMode"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="hcTestMode"
                                {...register('hcTestMode', {
                                        required: {value: true, message: "Hc Test Mode  is required"},

                                    }
                                )}
                            />
                            {errors.hcTestMode &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.hcTestMode.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="hcPassFail">
                                Hc Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="hcPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="hcPassFail"
                                {...register('hcPassFail', {
                                        required: {value: true, message: "Hc Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.hcPassFail &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.hcPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="ocTestMode">
                                Oc Test Mode <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="ocTestMode"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="ocTestMode"
                                {...register('ocTestMode', {
                                        required: {value: true, message: "Oc Test Mode  is required"},

                                    }
                                )}
                            />
                            {errors.ocTestMode &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.ocTestMode.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="ocPassFail">
                                Oc Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="ocPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="ocPassFail"
                                {...register('ocPassFail', {
                                        required: {value: true, message: "Oc Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.ocPassFail &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.ocPassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="lambdaTestMode">
                                Lambda Test Mode <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="lambdaTestMode"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="lambdaTestMode"
                                {...register('lambdaTestMode', {
                                        required: {value: true, message: "Lambda Test Mode  is required"},

                                    }
                                )}
                            />
                            {errors.lambdaTestMode &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.lambdaTestMode.message}</span>
                                </p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="lambdaPassFail">
                                Lambda Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="lambdaPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="lambdaPassFail"
                                {...register('lambdaPassFail', {
                                        required: {value: true, message: "Lambda Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.lambdaPassFail &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.lambdaPassFail.message}</span>
                                </p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="co2PassFail">
                                Co2 Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="co2PassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="co2PassFail"
                                {...register('co2PassFail', {
                                        required: {value: true, message: "Co2 Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.co2PassFail &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.co2PassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="o2TestMode">
                                O2 Test Mode <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="o2TestMode"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="o2TestMode"
                                {...register('o2TestMode', {
                                        required: {value: true, message: "O2 Test Mode  is required"},

                                    }
                                )}
                            />
                            {errors.o2TestMode &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.o2TestMode.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="o2PassFail">
                                O2 Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="o2PassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="o2PassFail"
                                {...register('o2PassFail', {
                                        required: {value: true, message: "O2 Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.o2PassFail &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.o2PassFail.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="noTestMode">
                                No Test Mode <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="noTestMode"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="noTestMode"
                                {...register('noTestMode', {
                                        required: {value: true, message: "No Test Mode  is required"},

                                    }
                                )}
                            />
                            {errors.noTestMode &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.noTestMode.message}</span></p>}
                        </div>

                        <div
                            className="pb-5">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="noPassFail">
                                No Pass Fail <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="noPassFail"
                                className="form-input w-full ml-2 "
                                type="text"
                                defaultValue={''}
                                name="noPassFail"
                                {...register('noPassFail', {
                                        required: {value: true, message: "No Pass Fail  is required"},

                                    }
                                )}
                            />
                            {errors.noPassFail &&
                                <p className={`ml-2 mt-1 text-red-600`}><span>{errors.noPassFail.message}</span></p>}
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
                            <span className="hidden xs:block ml-2">Add Inspectiontest</span>
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default InspectiontestsAdd