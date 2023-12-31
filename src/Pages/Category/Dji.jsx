
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import coming from '../../Assets/productsComming.svg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card";

const Dji = () => {
  const products = useLoaderData();
 
  const [cameras, setCameras] = useState([]);
  const [drones, setDrones] = useState([]);

  useEffect(() => {
   
    const camera = products.filter((p) => p.productType === "Camera");
    setCameras(camera);
    const drone = products.filter((p) => p.productType === "Drone");
    setDrones(drone);
  }, []);

const bannerImgs = [
  "https://i.postimg.cc/Nf9Dp1Dw/dji1.jpg",
  "https://i.postimg.cc/SNBr5J1Y/dji2.jpg",
  "https://i.postimg.cc/FKZV7Gr0/dji3.jpg",
  "https://i.postimg.cc/Kzp75zgz/dji4.jpg",
  "https://i.postimg.cc/MHc73SyY/dji5.jpg",
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
      <div className=" h-screen  my-20">
        <h4 className="text-4xl font-semibold text-center">
          Get ready to 'patiently' embrace our new products! They're on their
          way, and we promise it'll be worth the wait. Stay tuned, and in the
          meantime, keep calm and keep smiling! 😷🏥 #ComingSoon
        </h4>
        <div className="flex items-center justify-center my-10">
          <img src={coming} alt="" />
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center my-10">
        <h4 className="text-4xl font-semibold my-10">Available Cameras</h4>
        <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cameras.map((camera, idx) => (
            <Card
              key={idx}
              products={cameras}
              setProducts={setCameras}
              product={camera}
            ></Card>
          ))}
        </div>
      </div> */}
      {/* <div className="flex flex-col justify-center items-center my-10">
        <h4 className="text-4xl font-semibold my-10">Available Drones</h4>
        <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-5">
          {drones.map((drone, idx) => (
            <Card
              key={idx}
              products={drones}
              setProducts={setDrones}
              product={drone}
            ></Card>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Dji;
