import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useCreateEmployeeMutation, useLazyCheckUsernameQuery,} from "./employeesSlice";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useGetCompaniesQuery} from "../companies/companiesSlice";

const EmployeesAdd = (props) => {

    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetCompaniesQuery()

    const [usernameTrigger, usernameResult, usernameLastPromiseInfo]  = useLazyCheckUsernameQuery()

    const [usernameAvailable, setUsernameAvailable] = useState(true)
    const [username, setUsername] = useState('')

    const [redirectToList, setRedirectToList] = useState(false)

    const [isIsCompanyAdmin, setIsIsCompanyAdmin] = useState(false)

    const dispatch = useDispatch()
    const [createEmployee, employeeResult, employeeResponsePromise] = useCreateEmployeeMutation()
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
            name,
            phone_number,
            other_data,
            driverLicense,
            companyId,
        } = formData;

        toast.promise(createEmployee({
            isCompanyAdmin: isIsCompanyAdmin,
            name,
            phone_number,
            other_data,
            username,
            driverLicense,
            company: companyId,
            password: username
        })
            .unwrap(), {
            pending: `Adding an Employee`,
            success: `Successfully added Employee`,
            error: `Could not add Employee`,
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
        return (<Navigate to={`/employees`} replace={false}/>)
    }

    if (isLoading) return <h1>Loading</h1>

    if (isError) {
        toast.error("Could not fetch the Company Data", {
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

    if (isSuccess) {
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
                                    defaultValue={''}
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
                                    defaultValue={''}
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
                                    Other Data <span className="text-rose-500"></span>
                                </label>
                                <input
                                    id="other_data"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={''}
                                    name="other_data"
                                    {...register('other_data', {
                                            required: {value: false, message: "Other Data  is required"},

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
                                    className={`form-input w-full ml-2 ${usernameAvailable ? 'border-green-600 hover:border-green-600 focus:border-green-600' : 'border-red-500 hover:border-red-500 focus:border-red-500'}`}
                                    type="text"
                                    defaultValue={username}
                                    name="username"
                                    onChange={event => {
                                        setUsername(event.target.value)
                                        usernameTrigger(event.target.value)
                                            .unwrap()
                                            .then(result => {
                                                setUsernameAvailable(true)
                                            })
                                            .catch(reason => {
                                                setUsernameAvailable(false)
                                            })
                                    }}
                                />
                                {errors.username &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.username.message}</span></p>}
                            </div>

                            <div
                                className="pb-5">
                                < label
                                    className="flex text-sm font-medium mb-1"
                                    htmlFor="mandatory">
                                    Driver License <span className="text-rose-500"> </span>
                                </label>
                                <input
                                    id="driverLicense"
                                    className="form-input w-full ml-2 "
                                    type="text"
                                    defaultValue={''}
                                    name="driverLicense"
                                    {...register('driverLicense', {
                                            required: {value: false, message: "driverLicense is optional"},

                                        }
                                    )}
                                />
                                {errors.username &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.username.message}</span></p>}

                            </div>

                            <div
                                className="pb-5">
                                < label
                                    className="flex text-sm font-medium mb-1"
                                    htmlFor="mandatory">
                                    Is Company Admin < span
                                    className="text-rose-500"> < /span>

                                </label>
                                <div className="form-switch my-auto ml-1">
                                    <input
                                        type="checkbox"
                                        id={`toggle-isCompanyAdmin-employee`}
                                        className="sr-only"
                                        checked={isIsCompanyAdmin}
                                        onChange={async (e) => {
                                            setIsIsCompanyAdmin(!isIsCompanyAdmin)
                                        }}
                                    />
                                    <label className="bg-slate-400" htmlFor={`toggle-isCompanyAdmin-employee`}>
                                        <span className="bg-white shadow-sm" aria-hidden="true"></span>
                                    </label>
                                </div>
                            </div>
                            <div
                                className="pb-5">
                                <label
                                    className="block text-sm font-medium mb-1"
                                    htmlFor="companyId">
                                    Company <span className="text-rose-500">*</span>
                                </label>
                                <select
                                    id="type"
                                    className="form-select w-full ml-2 "
                                    name="companyId"
                                    defaultValue={''}
                                    {...register('companyId', {
                                            required: {value: true, message: "companyId  is required"},
                                        }
                                    )}
                                >
                                    <option value={``}>---</option>
                                    {
                                        data.companies.map(company => {
                                            return <option key={company._id}
                                                           value={company._id}>{company.name}</option>
                                        })
                                    }

                                </select>
                                {errors.companyId &&
                                    <p className={`ml-2 mt-1 text-red-600`}><span>{errors.companyId.message}</span></p>}
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
                                <span className="hidden xs:block ml-2">Add Employee</span>
                            </button>


                        </div>

                    </form>
                </div>
            </>
        )
    }
}

export default EmployeesAdd
    