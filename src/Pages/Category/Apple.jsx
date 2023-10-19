import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from 'swiper/modules';
import { useLoaderData } from "react-router-dom";



const Apple = () => {

    const products = useLoaderData()
    const [phones,setPhones] = useState([])
    const [tablets,setTablets] = useState([])
    const [watches,setWatches] = useState([])
    const [laptops,setLaptops] = useState([])
    const [cameras,setCameras] = useState([])
    const [drones,setDrones] = useState([])

    useEffect(()=>{
        const phone = products.filter((p) => p.productType === 'Phone');
        setPhones(phone)
        const tablet = products.filter((p) => p.productType === 'Tablet');
        setTablets(tablet)
        const watch = products.filter((p) => p.productType === 'Watch');
        setWatches(watch)
        const laptop = products.filter((p) => p.productType === 'Laptop');
        setLaptops(laptop)
        const camera = products.filter((p) => p.productType === 'Camera');
        setCameras(camera)
        const drone = products.filter((p) => p.productType === 'Drone');
        setDrones(drone)

    },[])

    console.log(phones,tablets,watches,laptops,cameras,drones)

  const bannerImgs = [
    "https://i.postimg.cc/90FbKwNv/maxresdefault.jpg",
    "https://i.postimg.cc/50dGd87k/apple-1.jpg",
    "https://i.postimg.cc/yYQb6MpR/apple-2.webp",
    "https://i.postimg.cc/Y96PpjT2/apple-3.webp",
    "https://i.postimg.cc/9fmP4p87/images.jpg",
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container mx-auto my-10">
      <Swiper 
      
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper overflow-hidden rounded-xl"
      >
        {bannerImgs.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-black  ">
              
              <img
                src={img}
                className="h-[500px] md:h-[800px] "
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
            
    </div>
  );
};

export default Apple;
