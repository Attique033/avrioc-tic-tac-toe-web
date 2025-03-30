import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const NotFound = React.lazy(() => import('../pages/not-found'));
const Login = React.lazy(() => import('../pages/login'));
const Register = React.lazy(() => import('../pages/register'));
const Loader = React.lazy(() => import('../pages/loading'));

const AuthRouting = () => {

    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Suspense>
    );
};

export default AuthRouting;
