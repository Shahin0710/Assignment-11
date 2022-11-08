import { Backdrop, CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ComponentsLayout from '../components/ComponentsLayout';
import { AuthContext } from '../contexts/UserContext';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <ComponentsLayout>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
        </ComponentsLayout>
    }

    if (user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default ProtectedRoute;
