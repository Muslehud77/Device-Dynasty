import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineArrowRight} from 'react-icons/ai'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthContext';
import { Link } from 'react-router-dom';

export default function BrandBanners() {
    const {dark} = useContext(AuthContext)
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container mx-auto rounded-xl overflow-hidden my-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`relative ${dark ? "bg-slate-900" : ""} overflow-hidden`}
          >
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl ">
                  Innovation Beyond Imagination{" "}
                  <span className="text-[#65C9C0]">Apple</span>
                </h1>
                <p className="mt-3 text-lg">
                  Experience Tech, Experience Excellence
                </p>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div
                  className={`w-full relative z-50 object-cover h-96 sm:h-[480px] bg-[url('https://i.postimg.cc/j29XR5s9/apple4.jpg')] bg-no-repeat bg-center bg-cover rounded-xl`}
                ></div>

                <div className="absolute z-50 inset-0 w-full h-full">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <Link
                      to={"/apple"}
                      className="inline-flex bg-opacity-50 hover:bg-opacity-95 duration-500 justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                    >
                      Our Apple Collection's
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>

                <div
                  className={`absolute z-40 bottom-12 -left-36 w-48 h-48 bg-gradient-to-b from-orange-500  p-px rounded-lg ${
                    dark ? "to-slate-900" : "to-white"
                  }`}
                >
                  <div
                    className={` w-48 h-48 rounded-lg dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>

                <div className="absolute -top-12 -right-20 z-30 w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div
                    className={` w-48 h-48 rounded-full dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative ${dark ? "bg-slate-900" : ""} overflow-hidden`}
          >
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl ">
                  Tech Excellence, Simplified{" "}
                  <span className="text-[#65C9C0]">Dji</span>
                </h1>
                <p className="mt-3 text-lg">Your Tech, Our Priority</p>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div
                  className={`w-full relative z-50 object-cover h-96 sm:h-[480px] bg-[url('https://i.postimg.cc/SNBr5J1Y/dji2.jpg')] bg-no-repeat bg-center bg-cover rounded-xl`}
                ></div>

                <div className="absolute z-50 inset-0 w-full h-full">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <Link
                      to={"/dji"}
                      className="inline-flex  bg-opacity-50 hover:bg-opacity-95 duration-500 justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                    >
                      Our Dji Collection's
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>

                <div
                  className={`absolute z-40 bottom-12 -left-36 w-48 h-48 bg-gradient-to-b from-orange-500  p-px rounded-lg ${
                    dark ? "to-slate-900" : "to-white"
                  }`}
                >
                  <div
                    className={` w-48 h-48 rounded-lg dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>

                <div className="absolute -top-12 -right-20 z-30 w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div
                    className={` w-48 h-48 rounded-full dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative ${dark ? "bg-slate-900" : ""} overflow-hidden`}
          >
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl ">
                  Empowering Tomorrow, Today{" "}
                  <span className="text-[#65C9C0]">Google</span>
                </h1>
                <p className="mt-3 text-lg">Where Service Meets Innovation</p>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div
                  className={`w-full relative z-50 object-cover h-96 sm:h-[480px] bg-[url('https://i.postimg.cc/9XStRDhg/google2.webp')] bg-no-repeat bg-center bg-cover rounded-xl`}
                ></div>

                <div className="absolute z-50 inset-0 w-full h-full">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <Link
                      to={"/google"}
                      className="inline-flex  bg-opacity-50 hover:bg-opacity-95 duration-500 justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                    >
                      Our Google Collection's
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>

                <div
                  className={`absolute z-40 bottom-12 -left-36 w-48 h-48 bg-gradient-to-b from-orange-500  p-px rounded-lg ${
                    dark ? "to-slate-900" : "to-white"
                  }`}
                >
                  <div
                    className={` w-48 h-48 rounded-lg dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>

                <div className="absolute -top-12 -right-20 z-30 w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div
                    className={` w-48 h-48 rounded-full dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative ${dark ? "bg-slate-900" : ""} overflow-hidden`}
          >
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl ">
                  Where Ideas Become Solutions{" "}
                  <span className="text-[#65C9C0]">Microsoft</span>
                </h1>
                <p className="mt-3 text-lg">
                  Tech Solutions, Service Beyond Compare
                </p>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div
                  className={`w-full relative z-50 object-cover h-96 sm:h-[480px] bg-[url('https://i.postimg.cc/2SNQGg34/microsoft4.jpg')] bg-no-repeat bg-center bg-cover rounded-xl`}
                ></div>

                <div className="absolute z-50 inset-0 w-full h-full">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <Link
                      to={"/microsoft"}
                      className="inline-flex  bg-opacity-50 hover:bg-opacity-95 duration-500 justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                    >
                      Our Microsoft Collection's
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>

                <div
                  className={`absolute z-40 bottom-12 -left-36 w-48 h-48 bg-gradient-to-b from-orange-500  p-px rounded-lg ${
                    dark ? "to-slate-900" : "to-white"
                  }`}
                >
                  <div
                    className={` w-48 h-48 rounded-lg dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>

                <div className="absolute -top-12 -right-20 z-30 w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div
                    className={` w-48 h-48 rounded-full dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative ${dark ? "bg-slate-900" : ""} overflow-hidden`}
          >
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl ">
                  Elevate Your Digital World{" "}
                  <span className="text-[#65C9C0]">Samsung</span>
                </h1>
                <p className="mt-3 text-lg">
                  Your Satisfaction, Our Commitment
                </p>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div
                  className={`w-full relative z-50 object-cover h-96 sm:h-[480px] bg-[url('https://i.postimg.cc/wxS4Kf7B/s3.jpg')] bg-no-repeat bg-center bg-cover rounded-xl`}
                ></div>

                <div className="absolute z-50 inset-0 w-full h-full">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <Link
                      to={"/samsung"}
                      className="inline-flex  bg-opacity-50 hover:bg-opacity-95 duration-500 justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                    >
                      Our Samsung Collection's
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>

                <div
                  className={`absolute z-40 bottom-12 -left-36 w-48 h-48 bg-gradient-to-b from-orange-500  p-px rounded-lg ${
                    dark ? "to-slate-900" : "to-white"
                  }`}
                >
                  <div
                    className={` w-48 h-48 rounded-lg dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>

                <div className="absolute -top-12 -right-20 z-30 w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div
                    className={` w-48 h-48 rounded-full dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative ${dark ? "bg-slate-900" : ""} overflow-hidden`}
          >
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl ">
                  Connecting Possibilities, Creating Realities{" "}
                  <span className="text-[#65C9C0]">Sony</span>
                </h1>
                <p className="mt-3 text-lg">
                  Elevate Your Tech Experience with Us
                </p>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div
                  className={`w-full relative z-50 object-cover h-96 sm:h-[480px] bg-[url('https://i.postimg.cc/1t8B2wS6/sony2.png')] bg-no-repeat bg-center bg-cover rounded-xl`}
                ></div>

                <div className="absolute z-50 inset-0 w-full h-full">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <Link
                      to={"/sony"}
                      className="inline-flex  bg-opacity-50 hover:bg-opacity-95 duration-500 justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                    >
                      Our Sony Collection's
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>

                <div
                  className={`absolute z-40 bottom-12 -left-36 w-48 h-48 bg-gradient-to-b from-orange-500  p-px rounded-lg ${
                    dark ? "to-slate-900" : "to-white"
                  }`}
                >
                  <div
                    className={` w-48 h-48 rounded-lg dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>

                <div className="absolute -top-12 -right-20 z-30 w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                  <div
                    className={` w-48 h-48 rounded-full dark: ${
                      dark ? "bg-slate-900" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}






































