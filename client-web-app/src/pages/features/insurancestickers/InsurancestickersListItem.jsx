import React, {useState} from 'react'
import {
    useCreateInsurancestickerMutation,
    useDestroyInsurancestickerMutation, useGetInsurancestickersQuery,
    useLazyGetInsurancestickerQuery,
    useUpdateInsurancestickerMutation,
} from "./insurancestickersSlice";
import moment from "moment";
import ModalBasic from "../../../components/ModalBasic";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import {Bounce, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = import.meta.env.VITE_LOCAL_API

const InsurancestickersListItem = (props) => {
    const [createInsurancesticker] = useCreateInsurancestickerMutation()
    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetInsurancestickersQuery()
    const [insurancestickerTrigger, insurancestickerResult, insurancestickerLastPromiseInfo] = useLazyGetInsurancestickerQuery()
    const [updateInsurancesticker] = useUpdateInsurancestickerMutation()
    const [destroyInsurancesticker] = useDestroyInsurancestickerMutation()

    const [deleteModal, setDeleteModal] = useState(false)

    const dispatch = useDispatch()

    const onDeleteClicked = async () => {

        toast.promise(destroyInsurancesticker({
            id: props.id
        }).unwrap(), {
            pending: "Deleting record",
            success: `Sucessfully deleted the record`,
            error: `Could not delete record`,
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

    return (
        <tr key={props.react_unique_identifier_key}>

            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{props.vehicle.plate}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{props.company.name}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{props.policyNo}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{moment(props.policyStartDate,).calendar()}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{moment(props.policyEndDate,).calendar()}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{moment(props.issuedDate,).calendar()}</div>
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="text-left">{props.type}</div>
            </td>

            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div className="space-x-1 flex">
                    <Link to={`/insurancestickers/${props.id}`}
                          className="text-slate-400 hover:text-slate-500 rounded-full inline"
                    >
                        <span className="sr-only">Edit</span>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                            <path
                                d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z"/>
                        </svg>
                    </Link>
                    <button className="text-rose-500 hover:text-rose-600 rounded-full" onClick={(e) => {
                        e.stopPropagation()
                        setDeleteModal(true)
                    }}>
                        <span className="sr-only">Delete</span>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                            <path d="M13 15h2v6h-2zM17 15h2v6h-2z"/>
                            <path
                                d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"/>
                        </svg>
                    </button>

                    <ModalBasic title={"Delete Insurancesticker"} id={props.id} modalOpen={deleteModal}
                                setModalOpen={(e) => {
                                    setDeleteModal(false)
                                }} children={
                        <div className="border-t border-slate-200">
                            <div className="pb-3 px-3 pt-3">
                                <span className={`font-bold`}>{props.issuedDate}</span> will be deleted! Are you sure to
                                delete this
                                Insurancesticker?

                                <div className="flex mt-5 mx-auto">

                                    <button className="mt-auto btn bg-green-500 hover:bg-green-600 text-white"
                                            type="submit"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDeleteModal(false)
                                            }}
                                    >
                                        <span className="hidden xs:block ml-1">Cancel</span>
                                    </button>

                                    <button className="ml-auto mt-auto btn bg-red-500 hover:bg-red-600 text-white"
                                            type="submit" onClick={async (e) => {
                                        e.stopPropagation()
                                        await onDeleteClicked()
                                        setDeleteModal(false)
                                    }}
                                    >
                                        <span className="hidden xs:block ml-1">Delete Insurancesticker</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }/>
                </div>
            </td>
        </tr>
    )
}

export default InsurancestickersListItem