import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';

import {Bounce, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './css/style.css';

import MainDashboard from './pages';
import PageNotFound from './pages/utility/PageNotFound';
import SignUp from "./pages/authentication/SignUp";
import SignIn from "./pages/authentication/SignIn";
import Overview from "./pages/features/dashboard";

import {useGetCurrentUserQuery} from "./api/apiSlice";
import HomePage from "./pages/features/home";

import Users from './pages/features/users'
import UsersAdd from './pages/features/users/UsersAdd'
import UsersList from './pages/features/users/UsersList'
import UsersListItemDetail from './pages/features/users/UsersListItemDetail'


import Roles from './pages/features/roles'
import RolesAdd from './pages/features/roles/RolesAdd'
import RolesList from './pages/features/roles/RolesList'
import RolesListItemDetail from './pages/features/roles/RolesListItemDetail'
import EmployeeSignIn from "./pages/authentication/EmployeeSignIn";
import EmployeesAdd from "./pages/features/employees/EmployeesAdd";
import Employees from "./pages/features/employees";
import EmployeesList from "./pages/features/employees/EmployeesList";
import EmployeesListDetail from "./pages/features/employees/EmployeesListItemDetail";
import Insurancestickers from "./pages/features/insurancestickers";
import InsurancestickersAdd from "./pages/features/insurancestickers/InsurancestickersAdd";
import InsurancestickersList from "./pages/features/insurancestickers/InsurancestickersList";
import InsurancestickersListDetail from "./pages/features/insurancestickers/InsurancestickersListItemDetail";


function App() {
    const location = useLocation();
    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({
            top: 0
        })
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname]); // triggered on route change

    const {
        data = {}, isError, isLoading, isSuccess, error
    } = useGetCurrentUserQuery()

    if (isLoading) return <h1>Loading</h1>

    return (
        <>
            {/*TODO: improve this shitty logic and compartmentalize it */}
            {isError &&
            error.status === 401 &&
            (location.pathname !== '/signin'
                && location.pathname !== '/employees-signin'
                && location.pathname !== '/signup'
                && location.pathname !== '/reset-password')
                ? <Navigate to='/employees-signin' replace={true}/> : <></>}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/" element={<MainDashboard/>}>
                    <Route path="/dashboard" element={<Overview/>}/>


                    <Route path="/employees" element={<Employees />}>
                        <Route path="/employees/add" element={<EmployeesAdd />}/>
                        <Route path="/employees" element={<EmployeesList />}/>
                        <Route path="/employees/:employeeId" element={<EmployeesListDetail/>}/>
                    </Route>

                    <Route path="/insurancestickers" element={<Insurancestickers />}>
                        <Route path="/insurancestickers/add" element={<InsurancestickersAdd />}/>
                        <Route path="/insurancestickers" element={<InsurancestickersList />}/>
                        <Route path="/insurancestickers/:insurancestickerId" element={<InsurancestickersListDetail/>}/>
                    </Route>

                    <Route path="/users" element={<Users/>}>
                        <Route path="/users/add" element={<UsersAdd/>}/>
                        <Route path="/users" element={<UsersList/>}/>
                        <Route path="/users/:userId" element={<UsersListItemDetail/>}/>

                    </Route>

                    <Route path="/roles" element={<Roles/>}>
                        <Route path="/roles/add" element={<RolesAdd/>}/>
                        <Route path="/roles" element={<RolesList/>}/>
                        <Route path="/roles/:roleId" element={<RolesListItemDetail/>}/>

                    </Route>

                </Route>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/employees-signin" element={<EmployeeSignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </>
    );
}

export default App;