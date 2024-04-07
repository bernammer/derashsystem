import React, {useEffect} from 'react'
import {useLazyGetEmployeeQuery, useUpdateEmployeeMutation} from "./employeesSlice"
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import SadFace from "../../../images/sad-face.svg";
import {ClipLoader} from "react-spinners";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = import.meta.env.VITE_LOCAL_API

const EmployeesListDetail = ({}) => {
    const {
        employeeId
    } = useParams();
    const [employeeTrigger, employeeResult, employeeLastPromiseInfo] = useLazyGetEmployeeQuery()

    const [updateEmployee] = useUpdateEmployeeMutation()

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
            employeeTrigger(employeeId)
                .unwrap(), {
                pending: `Fetching Employee detail`,
                success: `Fetched Employee detail successfully`,
                error: `Could not get Employee detail`,
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            }).then(result => {
            console.log(result)
        })
    }, [employeeId]);


    const onFormSubmit = async (formData) => {
        const {
            name,
            phone_number,
            other_data,
            username,
            isCompanyAdmin,
        } = formData;

        toast.promise(updateEmployee({
            id: employeeResult.data.id,
            name,
            phone_number,
            other_data,
            username,
            isCompanyAdmin,
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


    if (employeeResult.isLoading || employeeResult.isUninitialized || employeeResult.isFetching) {
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

    if (employeeResult.isError) {

        toast.error("Could not fetch Employee detail", {
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

    if (employeeResult.isSuccess) {
        console.log(employeeResult.data.employee)
        return (
            <>
                <div className="border-t border-slate-200">
                    <form className="row p-3" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="grid grid-cols-2 gap-x-5">

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="name">
                                    Name <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={employeeResult.data.employee.name ?? '-'}
                                    name="name"
                                    {...register('name', {
                                            required: {value: true, message: "Name  is required"},

                                        }
                                    )}
                                />
                                {errors.name &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.name.message}</span></p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="phone_number">
                                    Phone Number <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="phone_number"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={employeeResult.data.employee.phone_number ?? '-'}
                                    name="phone_number"
                                    {...register('phone_number', {
                                            required: {value: true, message: "Phone Number  is required"},
                                        }
                                    )}
                                />
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="other_data">
                                    Other Data <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="other_data"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={employeeResult.data.employee.other_data ?? '-'}
                                    name="other_data"
                                    {...register('other_data', {
                                            required: {value: true, message: "Other Data  is required"},

                                        }
                                    )}
                                />
                                {errors.other_data &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.other_data.message}</span>
                                    </p>}
                            </div>

                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="username">
                                    Username <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="username"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={employeeResult.data.employee.username ?? '-'}
                                    name="username"
                                    {...register('username', {
                                            required: {value: true, message: "Username  is required"},

                                        }
                                    )}
                                />
                                {errors.username &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.username.message}</span></p>}
                            </div>
                            <div className="pb-5">
                                <label className="flex text-sm font-medium mb-1" htmlFor="mandatory">
                                    Is Company Admin <span className="text-rose-500"></span>
                                    <div className="form-switch my-full ml-1">
                                        <input
                                            type="checkbox"
                                            id={`toggle-isCompanyAdmin-employee`}
                                            className="sr-only"
                                            checked={employeeResult.data.employee.isCompanyAdmin}
                                            onChange={async (e) => {
                                                toggleIsCompanyAdmin({id: employeeResult.data.employee._id})
                                            }}
                                        />
                                        <label className="bg-slate-400" htmlFor={`toggle-isCompanyAdmin-employee`}>
                                            <span className="bg-white shadow-sm" aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </label>
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
                                <span className="hidden xs:block ml-1">Update Employee </span>
                            </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }


}
export default EmployeesListDetail