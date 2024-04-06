import React, {
    useEffect
} from 'react'
import {
    useLazyGetAccidentQuery,
    useUpdateAccidentMutation
} from "./accidentsSlice"
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

const AccidentsListDetail = ({}) => {
    const {
        accidentId
    } = useParams();
    const [accidentTrigger, accidentResult, accidentLastPromiseInfo] = useLazyGetAccidentQuery()

    const [updateAccident] = useUpdateAccidentMutation()

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
            accidentTrigger(accidentId)
            .unwrap(), {
                pending: `Fetching Accident detail`,
                success: `Fetched Accident detail successfully`,
                error: `Could not get Accident detail`,
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
    }, [accidentId]);


    const onFormSubmit = async (formData) => {
        const {
            name,
            location,
            size,
            involvedVehicles,
            accidentType,
            accidentSeverity,
            photos,
        } = formData;

        toast.promise(updateAccident({
            id: accidentResult.data.id,
            name,
            location,
            size,
            involvedVehicles,
            accidentType,
            accidentSeverity,
            photos,
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


    if (accidentResult.isLoading || accidentResult.isUninitialized || accidentResult.isFetching) {
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

    if (accidentResult.isError) {

        toast.error("Could not fetch Accident detail", {
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

    if (accidentResult.isSuccess) {
        return (
            <>
            <div className="border-t border-slate-200">
                    <form className="row p-3" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="grid grid-cols-2 gap-x-5">
                            
                    <div
                className = "pb-5" >
                    <label
                className = "block text-sm font-medium mb-1"
                htmlFor = "name" >
                    Name  <span className="text-rose-500">*</span>
                    </label>
                <input
                    id="name"
                    className="form-input w-full ml-2 "
                    type="text"
                    defaultValue={accidentResult.data.name ?? '-'}
                    name="name"
                    {...register('name', {
                            required: {value: true, message: "Name  is required"},

                        }
                    )}
                />
                {errors.name && <p className={`ml-2 mt-1 text-red-600`}><span>{errors.name.message}</span></p>}
            </div>
                
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
                    defaultValue={accidentResult.data.location ?? '-'}
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
                                    htmlFor="size">
                                        Size  <span className="text-rose-500">*</span>
                                    </label>    
                                    <textarea
                                        rows={4}
                                        className="form-input w-full ml-2 "
                                        name="size"
                                        defaultValue={accidentResult.data.size ?? '-'}
                                        {...register('size', {
                                            required: {value: true, message: "Size  is required"},
}
                                        )}
                                    ></textarea>
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
                                        defaultValue={accidentResult.data.involvedVehicles ?? '-'}
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
                    defaultValue={accidentResult.data.accidentType ?? '-'}
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
                    defaultValue={accidentResult.data.accidentSeverity ?? '-'}
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
                                        defaultValue={accidentResult.data.photos ?? '-'}
                                        {...register('photos', {
                                            required: {value: true, message: "Photos  is required"},
}
                                        )}
                                    ></textarea>
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
                                <span className="hidden xs:block ml-1">Update Accident </span>
                            </button>
                        </div>
                    </form>
                </div>
        </>

        );
    }


}
export default AccidentsListDetail