import React from 'react'
import {Link} from "react-router-dom";
import InsuranceImage from "../../../images/insurance.jpg"
import BoloImage from "../../../images/bolo.jpg"
import PostOfficeImage from "../../../images/postoffice.jpg"
import TrafficManagementImage from "../../../images/menged-transport-logo.png"
import MengedTransportImage from "../../../images/transport.png"
import Infra from "../../../images/infranet-logo.jpg"

const HomePage = () => {
    return (<div className={` w-full bg-white`}>
        <div className="flex flex-row h-screen justify-center items-center">
            <div className="flex-col ">
                <p className={`mb-20 text-3xl font-extrabold text-center`}>Please Choose Your Institution Category</p>
                <div className="flex md:flex-wrap ">
                    <HomePageButton route={'/insurance-signin'} title={'Insurance'} image={InsuranceImage}/>
                    <HomePageButton route={'/bolo-signin'} title={'Bolo'} image={BoloImage}/>
                    <HomePageButton route={'/postoffice-signin'} title={'Post Office'} image={PostOfficeImage}/>

                    <HomePageButton route={'/trafficmanagement-signin'} title={'Traffic Management'}
                                    image={TrafficManagementImage}/>
                    <HomePageButton route={'/mengedtransport-signin'} title={'Menged Transport'}
                                    image={MengedTransportImage}/>
                    <HomePageButton route={'/superadmin-signin'} title={'Super Admin'}
                                    image={Infra}/>
                </div>

            </div>
        </div>

        {/*<div className="flex flex-row justify-center ">*/}
        {/*    <p className={``}>Powered by</p>*/}
        {/*    <img src={InfraImage} className={`h-12`}/>*/}
        {/*</div>*/}
    </div>)
}

const HomePageButton = (props) => {
    return (
        <Link to={props.route}>
            <div className="mx-4 flex-col justify-center text-center">
                {
                    props.image == null ?
                        <></>
                        : <img src={props.image} alt={props.title + ' image'} className={'h-20  mx-auto'}/>
                }
                <p className={``}>{props.title}</p>
            </div>
        </Link>)
}

export default HomePage
