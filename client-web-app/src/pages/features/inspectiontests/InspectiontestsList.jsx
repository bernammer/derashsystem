import React from 'react'
import InspectiontestsListItem from "./InspectiontestsListItem"
import {useGetInspectiontestsQuery} from "./inspectiontestsSlice"
import PaginationClassic from "../../compnents/PaginationClassic"
import {useDispatch} from "react-redux";
import SadFace from "../../../images/sad-face.svg";
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InspectiontestsList = () => {
    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetInspectiontestsQuery()

    const dispatch = useDispatch()

    if (isLoading) return <h1>Loading</h1>

    if (isError) {
        toast.error("Could not fetch the Inspection Test", {
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
            {
                data?.inspectiontest.length > 0
                    ? <>
                        <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
                            <header className="px-5 py-4">
                                <h2 className="font-semibold text-slate-800">Inspectiontests - <span
                                    className="text-slate-400 font-medium">{data?.['count']}</span></h2>
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
                                                <div className="font-semibold text-left">Vehicle Id</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">User Id</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">User First Name</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">User Last Name</div>
                                            </th>

                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Plate Number</div>
                                            </th>

                                            {/*<th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">*/}
                                            {/*    <div className="font-semibold text-left">Left Pass Fail</div>*/}
                                            {/*</th>*/}

                                            {/*<th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">*/}
                                            {/*    <div className="font-semibold text-left">Left Standard</div>*/}
                                            {/*</th>*/}

                                            {/*<th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">*/}
                                            {/*    <div className="font-semibold text-left">Right</div>*/}
                                            {/*</th>*/}

                                            {/*<th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">*/}
                                            {/*    <div className="font-semibold text-left">Right Pass Fail</div>*/}
                                            {/*</th>*/}

                                            {/*<th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">*/}
                                            {/*    <div className="font-semibold text-left">Right Standard</div>*/}
                                            {/*</th>*/}


                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Actions</div>
                                            </th>

                                        </tr>
                                        </thead>
                                        {/* Table body */}
                                        <tbody className="text-sm divide-y divide-slate-200">
                                        {
                                            data.inspectiontest?.map(listElement => {

                                                return (
                                                    <InspectiontestsListItem
                                                        id={listElement._id}
                                                        key={listElement._id}
                                                        react_unique_identifier_key={listElement._id}
                                                        user={listElement.user}
                                                        // vehicle={listElement.vehicle}
                                                        vehicleId={listElement.vehicle._id}
                                                        plateNumber={listElement.vehicle.plate}
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
                            <PaginationClassic totalPages={data?.['total_pages']} count={data?.['count']}
                                               currentPage={data?.['current_page']}/>
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
export default InspectiontestsList