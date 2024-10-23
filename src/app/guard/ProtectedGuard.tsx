import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/entitie/auth';

const ProtectedGuard = () => {
    const { isLogined, loginLoading, user } = useAuth();

    if (loginLoading) return null;

    if (!isLogined || user?.role !== 'ADMIN') return <Navigate to="/error/403" />;

    return <Outlet />;
};

export default ProtectedGuard;
