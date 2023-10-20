import { Link, NavLink, useLocation } from 'react-router-dom'


import logo3 from '../../Assets/logo (3).png'
import logo5 from '../../Assets/logo (5).png'
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthContext';
import Cart from '../../Components/Cart'
import User from '../../Components/User';



const Navbar = () => {

    const {pathname} = useLocation()
   
    
  const { setDark, dark, user } = useContext(AuthContext);

  const paths = (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? `border-b-2 pb-1 font-bold duration-150 ${
                dark ? "text-white" : "text-gray-800 border-black"
              }`
            : isPending
            ? "duration-200 pb-1"
            : "duration-200 pb-1"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? `border-b-2 pb-1 font-bold duration-150 ${
                dark ? "text-white" : "text-gray-800 border-black"
              }`
            : isPending
            ? "duration-200 pb-1"
            : "duration-200 pb-1"
        }
        to={"/add-product "}
      >
        Add-Product
      </NavLink>
    </>
  );

    return (
      <header
        className={`flex  flex-wrap md:justify-start md:flex-nowrap relative z-50 w-full text-sm`}
      >
        <nav
          className={`mt-6 relative container w-full ${
            pathname !== "/" && "rounded-[40px] border-2"
          } mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto `}
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <img
                className={`w-32 md:w-40`}
                src={dark ? logo3 : logo5}
                alt=""
              />
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className={`hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm ${
                  dark
                    ? " bg-slate-900 hover:bg-slate-80 border-gray-700 text-gray-100 hover:text-white focus:ring-offset-gray-800"
                    : "bg-white text-gray-700 focus:ring-blue-600 hover:bg-gray-50 focus:ring-offset-white"
                }`}
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
              {paths}

              <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                <button type="button" className="flex pb-1 items-center w-full">
                  Brands
                  <svg
                    className="ml-2 w-2.5 h-2.5 text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>

                <div
                  className={`hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10  md:shadow-md rounded-lg p-2 ${
                    dark
                      ? "bg-gray-800 md:border border-gray-700 divide-gray-700"
                      : "bg-white"
                  } before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5`}
                >
                  <NavLink
                    to={"/apple"}
                    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 ${
                      dark
                        ? "text-gray-100 hover:bg-gray-700 hover:text-gray-300"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    Apple
                  </NavLink>
                  <NavLink
                    to={"/dji"}
                    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 ${
                      dark
                        ? "text-gray-100 hover:bg-gray-700 hover:text-gray-300"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    DJI
                  </NavLink>
                  <NavLink
                    to={"/google"}
                    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 ${
                      dark
                        ? "text-gray-100 hover:bg-gray-700 hover:text-gray-300"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    Google
                  </NavLink>
                  <NavLink
                    to={"/microsoft"}
                    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 ${
                      dark
                        ? "text-gray-100 hover:bg-gray-700 hover:text-gray-300"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    Microsoft
                  </NavLink>
                  <NavLink
                    to={"/samsung"}
                    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 ${
                      dark
                        ? "text-gray-100 hover:bg-gray-700 hover:text-gray-300"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    Samsung
                  </NavLink>
                  <NavLink
                    to={"/sony"}
                    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 ${
                      dark
                        ? "text-gray-100 hover:bg-gray-700 hover:text-gray-300"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    Sony
                  </NavLink>
                </div>
              </div>
              <div className="md:flex hidden justify-center items-center gap-4">
                <label className="hidden md:grid swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input onClick={() => setDark(!dark)} type="checkbox" />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              {user ? (
                <div className="flex justify-between gap-4 items-center py-3 ">
                  <div className="h-5 hidden md:flex bg-gray-400 w-[1px]"></div>
                  <div className="mt-1 hidden md:grid">
                    <Cart></Cart>
                  </div>
                  <div className="-mr-4">
                    <User></User>
                  </div>
                  <div>
                    <div className=" md:hidden absolute right-28 top-4 ">
                      <Cart></Cart>
                    </div>
                    <label className="absolute right-16 top-4   md:hidden z-50 swap swap-rotate">
                      {/* this hidden checkbox controls the state */}
                      <input onClick={() => setDark(!dark)} type="checkbox" />

                      {/* sun icon */}
                      <svg
                        className="swap-off fill-current w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>

                      {/* moon icon */}
                      <svg
                        className="swap-on fill-current w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="">
                  <Link
                    to={"/login"}
                    className={`flex w-24 items-center gap-x-2 font-medium  md:border-l  md:my-6 md:pl-6 ${
                      dark
                        ? "border-gray-700 text-gray-100 hover:text-blue-500"
                        : "text-gray-500 md:border-gray-300 hover:text-blue-600 "
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Log in
                  </Link>
                  <div className=" md:hidden absolute right-28 top-4 ">
                    <Cart></Cart>
                  </div>
                  <label className="absolute right-16 top-4   md:hidden z-50 swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input onClick={() => setDark(!dark)} type="checkbox" />

                    {/* sun icon */}
                    <svg
                      className="swap-off fill-current w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-on fill-current w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
};

export default Navbar;