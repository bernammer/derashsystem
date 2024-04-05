import React, {
    useEffect
} from 'react';
import {
    Navigate,
    Route,
    Routes,
    useLocation
} from 'react-router-dom';

import {
    Bounce,
    ToastContainer
} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './css/style.css';

import MainDashboard from './pages';
import PageNotFound from './pages/utility/PageNotFound';
import SignUp from "./pages/authentication/SignUp";
import SignIn from "./pages/authentication/SignIn";
import Overview from "./pages/features/dashboard";

import {
    useGetCurrentUserQuery
} from "./api/apiSlice";
import HomePage from "./pages/features/home";

import Users from './pages/features/users'
import UsersAdd from './pages/features/users/UsersAdd'
import UsersList from './pages/features/users/UsersList'
import UsersListItemDetail from './pages/features/users/UsersListItemDetail'


import Roles from './pages/features/roles'
import RolesAdd from './pages/features/roles/RolesAdd'
import RolesList from './pages/features/roles/RolesList'
import RolesListItemDetail from './pages/features/roles/RolesListItemDetail'





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
            {isError && error.status === 401 && (location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/reset-password') ?
                <Navigate to='/signin' replace={true}/> : <></>}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/" element={<MainDashboard/>}>
                    <Route path="/dashboard" element={<Overview/>}/>
                    
                    
                    <Route path="/users" element={<Users />}>
                        <Route path="/users/add" element={<UsersAdd />} />
<Route path="/users" element={<UsersList />} />
<Route path="/users/:userId" element={<UsersListItemDetail />} />

                    </Route>
                    

                    <Route path="/roles" element={<Roles />}>
                        <Route path="/roles/add" element={<RolesAdd />} />
<Route path="/roles" element={<RolesList />} />
<Route path="/roles/:roleId" element={<RolesListItemDetail />} />

                    </Route>
                    
         

                </Route>
                <Route path="/signin" element={<SignIn/>}/>
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