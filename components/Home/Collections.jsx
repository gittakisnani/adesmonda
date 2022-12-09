import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import SeeMore from '../SeeMore'

const Collections = ({ pictures }) => {
  return (
    <section>
    <h2 
    style={{ fontFamily: 'Marcellus '}}
    className='mb-5 text-center'>Our Products</h2>
    <Container className='grid grid-cols-4 grid-rows-2 gap-4'>
        <div className='rounded-[15px] overflow-hidden col-span-2 row-span-2'>
            <Image src={pictures[0]} alt='Picture' className='w-full h-full bg-cover' />
        </div>
        <div className='rounded-[15px] overflow-hidden'>
            <Image src={pictures[1]} alt='Picture' className='w-full h-full bg-cover' />
        </div>
        <div className='rounded-[15px] overflow-hidden'>
            <Image src={pictures[2]} alt='Picture' className='w-full h-full bg-cover' />
        </div>
        <div className='rounded-[15px] overflow-hidden col-span-2'>
            <Image src={pictures[3]} alt='Picture' className='w-full h-full bg-cover' />
        </div>
    </Container>
    <div className='flex justify-center items-center my-4'>
        <SeeMore />
    </div>
    </section>
  )
}

export default Collections