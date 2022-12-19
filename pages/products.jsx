import { useEffect, useState } from "react"
import Container from "../components/Container"
import Product from "../components/Home/Product"
import Meta from "../components/Meta"
import Filter from "../components/Products/Filter"
import ProductCover from '../public/assets/images/ProductCover.svg'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";
import { useRouter } from "next/router"

const Products = () => {
  const [filters, setFilters] = useState({
    category: [],
    sort: 'Default',
    price: [0, 1000]
  })

  
  return (
    <>
      <Meta title='Products' />
      <section className="my-20">
          <h2 className="text-center my-10">Products</h2>
          <Container className='flex gap-5 lg:gap-10'>
              <Filter  filters={filters} setFilters={setFilters} />
              <div className="flex flex-col gap-4 flex-1">
                <div className='max-w-[900px]'>
                  <Swiper
                  modules={[Navigation]}
                  navigation
                  slidesPerView='auto'
                  spaceBetween={20}
                  >
                      {filters.sort !== 'Default' && <SwiperSlide className="max-w-fit">
                      <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>{filters.sort}</p>
                      </SwiperSlide>}
                      {filters.category?.map((cat, index) => (
                          <SwiperSlide className="max-w-fit" key={index}>
                            <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>{cat}</p>
                          </SwiperSlide>
                      ))}
                      {filters.price[0] > 0 && filters.price[1] && <SwiperSlide className="max-w-fit">
                        <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>Rp {filters.price[0]}-Rp {filters.price[1]}</p>
                      </SwiperSlide>
                      }
                  </Swiper>
                </div>
                <div className=" grid grid-cols-2 xl:grid-cols-3 gap-4">
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                    <Product imageHeight={300} rounded={false}  src={ProductCover} text={'Premium Marquina Simply Modern'} />
                </div>
              </div>
          </Container>
      </section>
    </>
  )
}

export default Products