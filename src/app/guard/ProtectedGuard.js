import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/entitie/auth';
const ProtectedGuard = () => {
    const { isLogined, loginLoading, user } = useAuth();
    if (loginLoading)
        return null;
    if (!isLogined || user?.role !== 'ADMIN')
        return _jsx(Navigate, { to: "/error/403" });
    return _jsx(Outlet, {});
};
export default ProtectedGuard;
