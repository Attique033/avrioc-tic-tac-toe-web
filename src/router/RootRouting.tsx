import {useAuth} from "../context/AuthContext.tsx";
import AppRouting from "./AppRouting.tsx";
import AuthRouting from "./AuthRouting.tsx";
import {BrowserRouter as Router} from 'react-router-dom';
import {useTokenPersistence} from "../hooks/useTokenPersistence.ts";

const RootRouting = () => {

    const {isAuthenticated} = useAuth();

    useTokenPersistence();

    return (
        <Router>
            {isAuthenticated ? <AppRouting/> : <AuthRouting/>}
        </Router>
    )
};

export default RootRouting;
