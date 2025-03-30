import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Home = React.lazy(() => import('../pages/home'));
const Loader = React.lazy(() => import('../pages/loading'));

const AppRouting = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouting;
