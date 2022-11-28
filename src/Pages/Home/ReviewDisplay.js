import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";

export default function ReviewDisplay() {
    const { data = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reviews')
            const data = await res.json()
            return data;
        }
    })
    return (
        <>
            <div className="mt-20">
                <h1 className='text-3xl font-bold text-center mb-10'>Our Valuable Clients Says</h1>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                style={{
                    "--swiper-pagination-color": "#FFF",
                    "--swiper-navigation-color": "#062037"
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    data.map(review =>
                        <SwiperSlide className="bg-slate-700 text-white p-8">
                            <div className="flex flex-col items-center">
                                <div className="mb-5">
                                    <img className="rounded-full w-20 h-20" src={review.image} alt="" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-light md:font-semibold mb-1">{review.ratingComment}</p>
                                    <p className="mb-1">{review.rating === 5 &&
                                        <div className="flex gap-2 text-xs lg:text-base">
                                            <FaStar className="text-amber-400"></FaStar>
                                            <FaStar className="text-amber-400"></FaStar>
                                            <FaStar className="text-amber-400"></FaStar>
                                            <FaStar className="text-amber-400"></FaStar>
                                            <FaStar className="text-amber-400"></FaStar>
                                        </div>}
                                        {
                                            review.rating === 4 &&
                                            <div className="flex gap-2 text-xs lg:text-base">
                                                <FaStar className="text-amber-400"></FaStar>
                                                <FaStar className="text-amber-400"></FaStar>
                                                <FaStar className="text-amber-400"></FaStar>
                                                <FaStar className="text-amber-400"></FaStar>
                                            </div>
                                        }
                                        {
                                            review.rating === 3 &&
                                            <div className="flex gap-2 text-xs lg:text-base">
                                                <FaStar className="text-amber-400"></FaStar>
                                                <FaStar className="text-amber-400"></FaStar>
                                                <FaStar className="text-amber-400"></FaStar>
                                            </div>
                                        }
                                        {
                                            review.rating === 2 &&
                                            <div className="flex gap-2 text-xs lg:text-base">
                                                <FaStar className="text-amber-400"></FaStar>
                                                <FaStar className="text-amber-400"></FaStar>
                                            </div>
                                        }
                                        {
                                            review.rating === 1 &&
                                            <div className="flex gap-2 text-xs lg:text-base">
                                                <FaStar className="text-amber-400"></FaStar>
                                            </div>
                                        }
                                    </p>
                                    <p className="font-normal hidden md:block">{review.message}</p>
                                </div>

                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </>
    );
}
