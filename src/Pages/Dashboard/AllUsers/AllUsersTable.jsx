import { GoTrash } from "react-icons/go";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { FaUsers } from "react-icons/fa";

const AllUsersTable = ({ user, index }) => {
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const { _id, name, email, photo, role } = user || [];
    const handleMakeAdming = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `${name} is an Admin Now !!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`users/${id}`)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photo}
                                alt={name} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>{email}</td>
            <th>
                {role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdming(_id)} className="btn py-4 bg-green-500 text-white rounded-xl btn-xs">
                    <span className="text-lg"><FaUsers /></span>
                </button>}
            </th>
            <th>
                <span onClick={() => handleDelete(_id)} className="text-lg text-red-500 cursor-pointer">
                    <GoTrash />
                </span>
            </th>
        </tr>
    );
};

export default AllUsersTable;