import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItemsTable = ({ item, index }) => {
    const axiosSecure = useAxiosSecure();
    const [, , refetch] = useMenu();
    const { _id, name, price, image } = item || [];
    const handleUpdate = (id) => {
        console.log(id);
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
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`);
                console.log(res.data);
                if (res.data) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
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
                                src={image}
                                alt={name} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-semibold">{name}</div>
            </td>
            <td>${price}</td>
            <th>
                <Link to={`/dashboard/update-items/${_id}`}>
                    <button onClick={() => handleUpdate(_id)} className="btn py-4 bg-green-500 text-white rounded-md btn-xs">
                        <span className="text-lg"><FiEdit /></span>
                    </button>
                </Link>
            </th>
            <th>
                <span onClick={() => handleDelete(_id)} className="btn py-4 bg-red-500 text-white rounded-md btn-xs text-lg">
                    <GoTrash />
                </span>
            </th>
        </tr>
    );
};

export default ManageItemsTable;