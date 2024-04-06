import React from 'react'
import EmployeesListItem from "./EmployeesListItem"
import {useGetEmployeesQuery} from "./employeesSlice"
import PaginationClassic from "../../compnents/PaginationClassic"
import {useDispatch} from "react-redux";
import SadFace from "../../../images/sad-face.svg";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EmployeesList = () => {
    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetEmployeesQuery()

    const dispatch = useDispatch()

    if (isLoading) return <h1>Loading</h1>

    if (isError) {
        toast.error("Could not fetch the Employee", {
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

    if (isSuccess)
        console.log(data.employees.length)

    return (
        <>
            {
                data?.employees.length > 0
                    ? <>
                        <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                            <header className="px-5 py-4">
                                <h2 className="font-semibold text-slate-800">Employees - <span
                                    className="text-slate-400 font-medium">{data?.employees.length}</span></h2>
                            </header>
                            <div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
                                        {/* Table header */}
                                        <thead
                                            className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                                        <tr key={0}>


                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Phone Number</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Other Data</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Username</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Is Company Admin</div>
                                            </th>


                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Actions</div>
                                            </th>

                                        </tr>
                                        </thead>
                                        {/* Table body */}
                                        <tbody className="text-sm divide-y divide-slate-200">
                                        {
                                            data.employees?.map(listElement => {
                                                return (
                                                    <EmployeesListItem
                                                        id={listElement._id}
                                                        key={listElement._id}
                                                        react_unique_identifier_key={listElement._id}
                                                        name={listElement.name}
                                                        phone_number={listElement.phone_number}
                                                        other_data={listElement.other_data}
                                                        username={listElement.username}
                                                        isCompanyAdmin={listElement.isCompanyAdmin}
                                                    />
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-8">
                            <PaginationClassic
                                totalPages={data?.['total_pages']}
                                count={data?.['count']}
                                currentPage={data?.['current_page']}
                            />
                        </div>
                    </>
                    :
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="max-w-2xl m-auto mt-16">
                            <div className="text-center px-4">
                                <div className="inline-flex mb-8">
                                    <img src={SadFace} width="176" height="176"
                                         alt="404 illustration"/>
                                </div>
                                <div className="mb-6 text-3xl">No Data Found Here</div>
                            </div>
                        </div>
                    </div>
            }

        </>

    );
}
export default EmployeesList