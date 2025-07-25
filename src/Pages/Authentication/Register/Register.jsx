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

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { createUserWithEmail, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUserWithEmail(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photo)
                toast.success('Google Sing in Successful!!!')
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Google Sing in Successful!!!')
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
            <Helmet>
                <title>Bistro Boss | Login</title>
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

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-4">
                        <button onClick={handleGoogleSignIn} className="flex w-full lg:w-3/4 cursor-pointer items-center justify-center mt-4 text-gray-600 border-gray-300 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 ">
                            <div className="pl-4 pr-0 lg:px-4 py-2">
                                <svg className="w-6 h-6" viewBox="0 0 40 40">
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#FFC107"
                                    />
                                    <path
                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                        fill="#FF3D00"
                                    />
                                    <path
                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                        fill="#4CAF50"
                                    />
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#1976D2"
                                    />
                                </svg>
                            </div>

                            <span className="w-5/6 px-0 lg:px-4 py-3 font-semibold text-center">
                                Register with Google
                            </span>
                        </button>
                        <button className="py-3 w-full lg:w-1/4 flex cursor-pointer items-center justify-center mt-4 text-gray-600 border-gray-300 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50">
                            <svg
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.292 3.438 9.787 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.81 1.304 3.495.997.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.47-2.381 1.235-3.221-.124-.303-.535-1.524.116-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 0 1 3.003-.404 11.49 11.49 0 0 1 3.003.404c2.29-1.553 3.295-1.23 3.295-1.23.653 1.652.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.104.823 2.222 0 1.606-.015 2.902-.015 3.296 0 .32.216.694.825.576C20.565 22.08 24 17.586 24 12.297 24 5.67 18.627.297 12 .297z" />
                            </svg>
                        </button>
                    </div>

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
                                    {...register("photo", { required: true })}
                                    name="photo"
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
