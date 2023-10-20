import img1 from '../../Assets/welcome.svg'
import square from '../../Assets/square.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../ContextProvider/AuthContext';
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Login = () => {
    const { state } = useLocation();
    const navigate = useNavigate()

    const [errMsg,setErrMsg] = useState(null) 
    const [showPass,setShowPass] = useState(false)
    const { googleLogin, facebookLogin, login, dark} =
      useContext(AuthContext);

    const handleSocialLogin = (social) =>{
        setErrMsg(null)
        social()
        .then(res=>{
            navigate(`${state ?  state : '/'}`)
            toast.success(`Welcome back! ${res.user.displayName}`, {
              style: {
                borderRadius: "10px",
                background: `${dark ? "black" : "white"}`,
                color: `${!dark ? "black" : "white"}`,
              },
            });
           
        }).catch(err=>{
            console.log(err)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrMsg(null)
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        login(email,password)
        .then(res=>{
            form.reset()
            navigate(`${state ? state : "/"}`)
            toast.success(`Welcome back! ${res.user.displayName}`, {
              style: {
                borderRadius: "10px",
                background: `${dark? 'black':'white'}`,
                color: `${!dark ? "black" : "white"}`,
              },
            });
            
        }).catch(err=>{
            console.log(err.message)
            if(err.message === 'Firebase: Error (auth/invalid-login-credentials).'){
                toast.error(
                  "Email or password doesn't match please try again.",
                  {
                    style: {
                      borderRadius: "10px",
                      background: `${dark ? "black" : "white"}`,
                      color: `${!dark ? "black" : "white"}`,
                    },
                  }
                );
                setErrMsg("Email or password doesn't match please try again." )
            }
        })
    }

   



    return (
      <div className="mt-10">
        {/* <button onClick={logout} className='btn' >logout test</button> */}
        <div className="flex justify-center items-center w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
          <div className="hidden p-2 lg:block lg:w-1/2">
            <img src={img1} alt="" />
          </div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-20" src={square} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!!
            </p>

           <a
              onClick={() => handleSocialLogin(googleLogin)}
              className="flex hover:cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 text-2xl py-2">
                <FcGoogle />
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </a>
            <a
              onClick={() => handleSocialLogin(facebookLogin)}
              className="flex hover:cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 text-2xl py-2">
                <SiFacebook />
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Facebook
              </span>
            </a>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or login with email
              </a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                required
                  id="LoggingEmailAddress"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    Forget Password?
                  </a>
                </div>

                <div className="relative">
                  <input
                  required
                    id="loggingPassword"
                    name="password"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type={showPass ? "Text" : "password"}
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-2 top-2 hover:cursor-pointer text-2xl"
                  >
                    {!showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
              </div>
              <div className="h-4 my-3">
                {errMsg && (
                  <div className="my-1 text-center text-red-600 font-serif bg-gray-100 rounded-lg">
                    <span>{errMsg}</span>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <input
                  value="Login"
                  type="submit"
                  className="w-full hover:cursor-pointer text-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                />
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <Link
                to={'/register'}
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign up
              </Link>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;