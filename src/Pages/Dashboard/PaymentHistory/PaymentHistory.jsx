import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { format } from "date-fns";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })
    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <div className="bg-green-200 py-3 rounded-md">
                <h2 className="text-gray-600 pl-5 text-[15px] font-medium">Total Payments: {payments.length}</h2>
            </div>
            {/* cart tab */}
            <div className="overflow-x-auto rounded-box border border-base-content/5 mt-5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.length > 0 ? payments?.map((payment, index) => <tr key={payment?._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>$ {payment.price}</td>
                                <td>{payment?.date && format(new Date(payment?.date), 'P')}</td>
                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                    <div
                                        className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2   
                            ${payment.status === "Pending" && 'text-yellow-500 bg-yellow-100/60'} 
                            ${payment.status === "In Progress" && 'text-blue-500 bg-blue-100/60'} 
                            ${payment.status === "Completed" && 'text-green-500 bg-green-100/60'} 
                            ${payment.status === "Rejected" && 'text-red-500 bg-red-100/60'} `}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full 
                            ${payment.status === "Pending" && 'bg-yellow-500'} 
                            ${payment.status === "In Progress" && 'bg-blue-500'} 
                            ${payment.status === "Completed" && 'bg-green-500'} 
                            ${payment.status === "Rejected" && 'bg-red-500'} 
                        `}
                                        ></span>
                                        <h2 className='text-sm font-normal '>{payment.status}</h2>
                                    </div>
                                </td>
                            </tr>) : (
                                <tr>
                                    <td colSpan="6" className='text-sm p-3 font-semibold text-gray-500'>
                                        No Payment History Found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;