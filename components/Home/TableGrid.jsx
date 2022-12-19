import React from 'react'
import Container from '../Container'
import Table from '../Table/Table'
import DiningTable from '../../public/assets/images/DiningTable.svg'
import CoffeTable from '../../public/assets/images/CoffeTable.svg'
import ConsoleTable from '../../public/assets/images/ConsoleTable.svg'
import CafeBarTable from '../../public/assets/images/CafeBarTable.svg'
import SpecialWork from '../../public/assets/images/SpecialWork.svg'
import TissueBox from '../../public/assets/images/TissueBox.svg'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

const TableGrid = () => {
  return (
    <section>
    <Container className='!p-10'>
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 6
        },
      }}
    >
        <SwiperSlide><Table src={DiningTable} text='Dining Table' /></SwiperSlide>
        <SwiperSlide><Table src={CafeBarTable} text='Cafe And Bar Table' /></SwiperSlide>
        <SwiperSlide><Table src={ConsoleTable} text='Console Table' /></SwiperSlide>
        <SwiperSlide><Table src={SpecialWork} text='Special Work' /></SwiperSlide>
        <SwiperSlide><Table src={TissueBox} text='Tissue Box' /></SwiperSlide>
        <SwiperSlide><Table src={CoffeTable} text='Coffee Table' /></SwiperSlide>
        <SwiperSlide><Table src={DiningTable} text='Dining Table' /></SwiperSlide>
        <SwiperSlide><Table src={CafeBarTable} text='Cafe And Bar Table' /></SwiperSlide>
        <SwiperSlide><Table src={ConsoleTable} text='Console Table' /></SwiperSlide>
        <SwiperSlide><Table src={SpecialWork} text='Special Work' /></SwiperSlide>
        <SwiperSlide><Table src={TissueBox} text='Tissue Box' /></SwiperSlide>
        <SwiperSlide><Table src={CoffeTable} text='Coffee Table' /></SwiperSlide>
        <SwiperSlide><Table src={DiningTable} text='Dining Table' /></SwiperSlide>
        <SwiperSlide><Table src={CafeBarTable} text='Cafe And Bar Table' /></SwiperSlide>
        <SwiperSlide><Table src={ConsoleTable} text='Console Table' /></SwiperSlide>
        <SwiperSlide><Table src={SpecialWork} text='Special Work' /></SwiperSlide>
        <SwiperSlide><Table src={TissueBox} text='Tissue Box' /></SwiperSlide>
        <SwiperSlide><Table src={CoffeTable} text='Coffee Table' /></SwiperSlide>
    </Swiper>
    </Container>
    </section>
  )
}

export default TableGrid