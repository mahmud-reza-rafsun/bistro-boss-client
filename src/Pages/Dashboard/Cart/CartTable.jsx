import { GoTrash } from "react-icons/go";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const CartTable = ({ table, index }) => {
    const { _id, image, name, price } = table || [];
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
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
                axiosSecure.delete(`cart/${id}`)
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
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded-md h-12 w-12">
                            <img
                                src={image}
                                alt={name} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="text-red-500 text-lg cursor-pointer">
                    <GoTrash />
                </button>
            </th>
        </tr>
    );
};

export default CartTable;