import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import LoginAnimation from "../../../assets/animation/login.json";
import Lottie from "lottie-react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { GoEye, GoEyeClosed } from "react-icons/go";
import toast from "react-hot-toast";
import { AuthContext } from "../../../providers/AuthProvider";
import SocalLogin from "../../../components/SocalLogin/SocalLogin";

const Login = () => {
  const { singInWithEmail } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const captchaRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login user
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      singInWithEmail(email, password)
        .then(() => {
          toast.success('Login Successful!!!')
          navigate(from, { replace: true });
        })
        .catch(error => {
          toast.error(error.message);
        })
    } else {
      toast.error("Fill the Captcha");
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
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

          {/* ToDO */}
          <SocalLogin />

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleLogin}>
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
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email"
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
                name="password"
                className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-blue-300`}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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

            <div className="flex gap-5">
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Captcha
                </label>

                <LoadCanvasTemplate />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingCaptcha"
                >
                  Submit Captcha
                </label>
                <input
                  ref={captchaRef}
                  id="LoggingCaptcha"
                  autoComplete="captcha"
                  name="Submit Captcha"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Captcha"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-400 md:w-1/4"></span>

            <Link
              to="/registration"
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

export default Login;
