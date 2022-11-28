import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


//Picture Import 
import bannerone from '../../assets/banner/banner-01.jpg'
import bannertwo from '../../assets/banner/banner-02.jpg'
import bannerthree from '../../assets/banner/banner-03.jpg'
import bannerfour from '../../assets/banner/banner-04.jpg'
import { Link } from "react-router-dom";

//Banner Data 
const data = [
    {
        "title": "Discover Different Light Shade",
        "subTitle": "Premium Quality",
        "image": bannertwo
    },
    {
        "title": "Get ready for Our Stylish Chair",
        "subTitle": "Premium Chair",
        "image": bannerthree
    },
    {
        "title": "Furnish Your Home Furnish Your Life",
        "subTitle": "Premium Quality",
        "image": bannerfour
    }
]

export default function Banner() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#062037",
                    "--swiper-navigation-color": "#062037",
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div>
                    {
                        data.map(info => <SwiperSlide>
                            <div className="h-[600px] flex bg-slate-100">
                                <div className="banner-image">
                                    <img className="object-cover w-full h-full" src={info.image} alt="" />
                                </div>
                                <div className="flex flex-col gap-5 text-secendary text-center font-semibold py-40">
                                    <p data-aos="zoom-in-down">{info.subTitle}</p>
                                    <h1 className="text-2xl md:text-6xl" data-aos="zoom-in-down">{info.title}</h1>
                                    <div className="mt-5">
                                        <Link to='/services'>
                                            <button className="btn btn-active bg-primary border-0 px-20 hover:bg-black text-white" data-aos="zoom-in-down">Get Started</button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </>
    );
}