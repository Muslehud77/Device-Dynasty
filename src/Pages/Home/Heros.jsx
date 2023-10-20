import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthContext';
import samsung from '../../Assets/samsung.webm'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Heros = () => {


    return (
      <div className="container mx-auto">
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://i.postimg.cc/MHc73SyY/dji5.jpg"
                alt=""
                className="h-80 dark:bg-gray-500 aspect-video object-cover"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <span className="text-xs uppercase dark:text-gray-400">
                  DJI
                </span>
                <h3 className="text-3xl font-bold">
                  Take Flight, Capture the World: DJI Mavic 3 Elevating Aerial
                  Excellence.
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Experience the Ultimate in Aerial Photography with DJI Mavic
                  3. Elevate Your Creativity and Capture Breathtaking Moments
                  Today!
                </p>
                <Link to={"/dji"} type="button" className="self-start">
                  <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <video
                src={samsung}
                alt=""
                autoPlay
                loop
                muted
                className="h-80 dark:bg-gray-500 aspect-video object-cover rounded-md "
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <span className="text-xs uppercase dark:text-gray-400">
                  Samsung
                </span>
                <h3 className="text-3xl font-bold">
                  Sleek and Smart, the Galaxy Flip 3 - Unfold the Future!
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Experience innovation in your pocket with the Galaxy Flip 3.
                  Embrace style, functionality, and cutting-edge technology
                  today!
                </p>
                <Link to={"/samsung"} type="button" className="self-start">
                  <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://i.postimg.cc/1t8B2wS6/sony2.png"
                alt=""
                className="h-80 dark:bg-gray-500 object-cover "
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <span className="text-xs uppercase dark:text-gray-400">
                  Sony
                </span>
                <h3 className="text-3xl font-bold">
                  Sony Xperia 5 Elevate Your Mobile Experience.
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Experience excellence with the Sony Xperia 5: Stunning
                  display, powerful performance, and cutting-edge features
                  await. Elevate your mobile world today!
                </p>
                <Link to={"/sony"} type="button " className="self-start">
                  <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Heros;