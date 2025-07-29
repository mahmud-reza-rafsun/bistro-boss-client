import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocalLogin = () => {
    const axiosPublic = useAxiosPublic();
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                }
                axiosPublic.post('/users', userInfo)
                toast.success('Google Sing in Successful!!!')
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-4">
            <button onClick={handleGoogleLogin} className="flex w-full lg:w-3/4 cursor-pointer items-center justify-center mt-4 text-gray-600 border-gray-300 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 ">
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
                    Login with Google
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
    );
};

export default SocalLogin;