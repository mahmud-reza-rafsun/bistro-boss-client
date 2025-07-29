import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import LoginAnimation from "../../../assets/animation/login.json";
import Lottie from "lottie-react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocalLogin from "../../../components/SocalLogin/SocalLogin";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUserWithEmail(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photoURL)
                const userData = {
                    name: data.name,
                    email: data.email,
                    photo: data.photoURL
                }
                axiosPublic.post('/users', userData)
                    .then(res => {
                        console.log(res);
                    })
                toast.success('Sing in Successful!!!')
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="flex w-full border-gray-200 max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg border lg:max-w-4xl ">
                <div className="hidden bg-cover bg-center lg:block lg:w-1/2">
                    <div className="text-center lg:text-left w-[100px] lg:w-[450px] pl-5 mt-24">
                        <Lottie animationData={LoginAnimation} />
                    </div>
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-12" src={logo} alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 ">
                        Welcome back!
                    </p>

                    <SocalLogin />

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>

                        <div className="text-xs text-center text-gray-500 uppercase">
                            or login with email
                        </div>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-5">
                            <div className="mt-4">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600 "
                                    htmlFor="LoggingName"
                                >
                                    Name
                                </label>
                                <input
                                    id="LoggingName"
                                    autoComplete="name"
                                    {...register("name", { required: true })}
                                    name="name"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300"
                                    type="text"
                                    placeholder="Name"
                                    {...errors.name && <span>Name is required</span>}
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600 "
                                    htmlFor="LoggingPhoto"
                                >
                                    Photo URL
                                </label>
                                <input
                                    id="LoggingPhoto"
                                    autoComplete="photo"
                                    {...register("photoURL", { required: true })}
                                    name="photoURL"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300"
                                    type="text"
                                    placeholder="Photo URL"
                                    {...errors.photo && <span>photo is required</span>}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600 "
                                htmlFor="LoggingEmailAddress"
                            >
                                Email Address
                            </label>
                            <input
                                id="LoggingEmailAddress"
                                autoComplete="email"
                                {...register("email", { required: true })}
                                name="email"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                                placeholder="Email"
                                {...errors.name && <span>Email is required</span>}
                            />
                        </div>

                        <div className="mt-4 relative">
                            <div className="flex justify-between">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                    htmlFor="loggingPassword"
                                >
                                    Password
                                </label>
                            </div>
                            <input
                                id="loggingPassword"
                                autoComplete="current-password"
                                {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                name="password"
                                className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-blue-300`}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...errors.password?.type === "required" && (
                                    <p role="alert">Password name is required</p>
                                )}

                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 bottom-[7.5px]"
                            >
                                <div
                                    type="submit"
                                    className="cursor-pointer w-full px-2.5 py-1.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10"
                                >
                                    {showPassword ? <GoEye /> : <GoEyeClosed />}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10"
                            >
                                Regsiter
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b border-gray-400 md:w-1/4"></span>

                        <Link
                            to="/login"
                            className="text-xs text-gray-500 uppercase  hover:underline"
                        >
                            or sign up
                        </Link>

                        <span className="w-1/5 border-b border-gray-400  md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
