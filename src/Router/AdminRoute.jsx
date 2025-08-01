import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center min-h-100vh">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />
};

export default AdminRoute;