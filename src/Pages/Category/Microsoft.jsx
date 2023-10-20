


import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card";

const Microsoft = () => {
  const products = useLoaderData();
  const [phones, setPhones] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [watches, setWatches] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const phone = products.filter((p) => p.productType === "Phone");
    setPhones(phone);
    const tablet = products.filter((p) => p.productType === "Tablet");
    setTablets(tablet);
    const watch = products.filter((p) => p.productType === "Watch");
    setWatches(watch);
    const laptop = products.filter((p) => p.productType === "Laptop");
    setLaptops(laptop);
    const camera = products.filter((p) => p.productType === "Camera");
    setCameras(camera);
    const drone = products.filter((p) => p.productType === "Drone");
    setDrones(drone);
  }, []);

const bannerImgs = [
  "https://i.postimg.cc/xC8Mq2FS/microsoft1.png",
  "https://i.postimg.cc/7LmSx69V/microsoft2.jpg",
  "https://i.postimg.cc/k4H8bpkR/microsoft3.png",
  "https://i.postimg.cc/2SNQGg34/microsoft4.jpg",
  "https://i.postimg.cc/Hk0Qh37F/microsoft5.webp",
];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container relative z-0 mx-auto my-10">
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
              <img src={img} className="h-[500px] md:h-[800px] " alt="" />
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
      <div className="flex flex-col justify-center items-center my-10">
        <h4 className="text-4xl font-semibold my-10">Available Phones</h4>
        <div className="md:grid grid-cols-4 gap-5">
          {phones.map((phone, idx) => (
            <Card key={idx} product={phone}></Card>
          ))}
        </div>
      </div>
     
      <div className="flex flex-col justify-center items-center my-10">
        <h4 className="text-4xl font-semibold my-10">Available Laptops</h4>
        <div className="md:grid grid-cols-4 gap-5">
          {laptops.map((laptop, idx) => (
            <Card key={idx} product={laptop}></Card>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Microsoft;
