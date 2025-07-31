import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery, } from '@tanstack/react-query'
import AllUsersTable from "./AllUsersTable";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <div className="bg-gray-100 p-4 rounded-md">
                <div className="px-3 bg-green-200 py-3 rounded-md">
                    <h2 className="text-gray-600 text-[15px] font-medium">Total User: {users.length}</h2>
                </div>
                {/* all user tab */}
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? users.map((user, index) => <AllUsersTable key={user?._id} user={user} index={index} />) :
                                    <tr>
                                        <td colSpan="6" className='text-sm p-3 font-semibold text-gray-500 text-center'>
                                            No Users Found
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;