import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <div className="pl-4 bg-green-200 py-3 rounded-md">
                <h2 className="text-gray-600 text-[15px] font-medium">Welcome Back {user && user?.displayName} </h2>
            </div>
        </div>
    );
};

export default UserHome;