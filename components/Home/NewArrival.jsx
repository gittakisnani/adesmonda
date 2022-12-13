import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import ImageContainer from '../../public/assets/images/ImageContainer.svg'
import SliderImage from '../../public/assets/images/SliderImage.svg'
import Zoom from '../../public/assets/images/Zoom.svg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

const NewArrivalSliderEntity = ({ src, text}) => {
    return (
        <div className='flex gap-4 h-[183px] my-6'>
            <div className='image min-w-[241px] overflow-hidden'>
                <Image src={src} alt={text} className='h-full bg-cover' />
            </div>
            <div
            style={{ background: 'rgba(0, 68, 65, 0.02)'}}
            className='p-4 py-6 relative w-[480px] flex flex-col gap-3 text-secondary'
            >
                <Image src={Zoom} alt='Zoom' className='absolute bottom-0 right-0' />
                <p 
                style={{
                    fontFamily: 'Marcellus'
                }}
                className='text-lg leading-6 tracking-[0.25em] uppercase'>{text}</p>
                <p className='text-sm leading-4 tracking-[0.5px]'>Tissue Box</p>
                <h6 
                style={{
                    fontFamily: 'Plus Jakarta Sans'
                }}
                className='font-bold leading-5 text-base tracking-[0.15px]'>
                    Rp 300.000
                </h6>
                <p className='underline tracking-[1px] leading-4 text-base'>See Details</p>
            </div>
        </div>
    )
}

const NewArrivalSlider = () => {
    return (
        <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
        <SwiperSlide>
            <NewArrivalSliderEntity src={SliderImage} text={'Grey Classy Tissue Box'} />
        </SwiperSlide>
      </Swiper>
    )
}


const NewArrival = () => {
  return (
    <section
    style={{ fontFamily: 'Marcellus'}}
    >
        <Container className='!p-10'>
            <h2 className='text-center mb-10'>New Arrival</h2>
            <div className='flex items-center gap-8'>
                <div className='w-[583px] h-[395px] rounded-radius overflow-hidden'>
                    <Image className='h-full w-full bg-cover' src={ImageContainer} alt='Image' />
                </div>
                <div className='flex flex-col gap-5'>
                    <h3>Premium Marquina <br /> Simply Modern</h3>
                    <p className='text-[#797A7A] text-xl leading-5 tracking-[0.15px]'>Dining Table</p>
                    <h6
                    style={{ fontFamily: 'Plus Jakarta Sans'}}
                    className='text-secondary font-bold text-4xl tracking-[0.15px] leading-[40px]'
                    >Rp 300.000.000</h6>
                    <p className='text-secondary text-lg leading-4 tracking-[1px] underline'>See Details</p>
                </div>
            </div>

            <NewArrivalSlider />
        </Container>
    </section>
  )
}

export default NewArrival