/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const navigate = useNavigate();

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleCheckOut = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(error.message)
        } else {
            toast.success('Payment Successfull!!!')
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError)
        }
        else {
            if (paymentIntent.status === 'succeeded') {
                toast.success(transactionId)
                setTransactionId(paymentIntent.id);

                // now save the payment in the database.
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    category: cart?.category,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item?._id),
                    menuItemsIds: cart.map(item => item?.menuId),
                    status: 'Pending'
                }
                axiosSecure.post('/payments', payment);
                refetch();
                navigate('/dashboard/payment-history');
            }
        }
    }
    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-evenly items-center bg-green-200 py-3 rounded-md">
                <h2 className="text-gray-600 text-[15px] font-medium">Payment</h2>
            </div>
            <div className="my-8 max-w-lg mx-auto border p-4 rounded-md border-gray-400">
                <form onSubmit={handleCheckOut}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#595858',
                                    '::placeholder': {
                                        color: '#595858',
                                    },
                                },
                                invalid: {
                                    color: '#595858',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-success mt-7 text-white w-full" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;