import ReactPlayer from "react-player";

import video2 from "../../Assets/apple.mp4";

import { useContext, useState } from "react";
import { AuthContext } from "../../ContextProvider/AuthContext";

const Banner = () => {
   
    const {dark} = useContext(AuthContext)
  return (
    <div>
      <div className="w-full rounded-xl overflow-hidden relative container mx-auto">
        <div className=" object-cover">
          <ReactPlayer
            height={"100%"}
            width={"100%"}
            loop={true}
            className="object-fill reactPlayer"
            playing={true}
            muted={true}
            url={video2}
          />
        </div>
        <div
          className={`absolute w-full top-0 z-0 bg-black ${
            dark ? "bg-opacity-20" : "bg-opacity-5"
          }  h-full`}
        ></div>
        {/* <div
          className={`absolute pb-10 hover:h-56 hover:cursor-pointer duration-500  bg-gray-800  text-white bottom-0 z-10 w-full bg-opacity-40 `}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sed
            ipsam a necessitatibus ullam, animi ipsa, facere tempora fugit esse,
            explicabo tempore rem cupiditate omnis ducimus dolor. Quo, nam
            placeat?
          </p>
        </div> */}
      </div>
    </div>
  ); 
  
};

export default Banner;
