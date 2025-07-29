import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, items) => total + items.price, 0);
    return (
        <div>
            <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-evenly items-center bg-green-200 py-3 rounded-md">
                    <h2 className="text-gray-600 text-[15px] font-medium">Total Orders: {cart.length}</h2>
                    <h2 className="text-gray-600 text-[15px] font-medium">Total Price: ${totalPrice}</h2>
                    {cart.length ?
                        <Link to="/dashboard/payment">
                            <button className="btn btn-success text-white">Pay</button>
                        </Link>
                        :
                        <button disabled className="btn btn-success text-white">Pay</button>}
                </div>
                {/* cart tab */}
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th> SL. </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* load dynamic data */}
                            {
                                cart.length > 0 ? cart?.map((table, index) => <CartTable key={table?._id} table={table} index={index} />) : (
                                    <p className="mt-2">No Data Found</p>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;