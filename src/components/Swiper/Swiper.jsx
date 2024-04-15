import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { swiperData } from './swiper.data'
import 'swiper/css'
import './Swiper.css'

export const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 2
                }
            }}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
        >
            {swiperData.map(slide => (
                <SwiperSlide key={slide.reviewer}>
                    <div className='d-flex align-items-center  gap-2 rounded-4 bg-white p-4 h-100'>
                        <div className='text-center text-lg-start'>
                            <img
                                className='card-image rounded-circle object-fit-cover'
                                src={slide.imageSrc}
                                alt='reviewer'
                            />
                        </div>
                        <div className='text-center text-lg-start'>
                            <p className='fs-8 mb-2 lh-lg line-clamp-3 text-1100'>
                                {slide.text}
                            </p>
                            <p className='text-800 lh-xl mb-0'>
                                {slide.reviewer}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
