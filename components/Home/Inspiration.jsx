import React from 'react'
import Container from '../Container'
import InspirationItem from '../InspirationItem'
import SeeMore from '../SeeMore'

const Inspiration = () => {
  return (
    <section className='my-10'>
        <h2 className='text-center mb-5'>Our Inspiration</h2>
        <Container className='grid grid-cols-3 gap-4'>
        <InspirationItem />
        <InspirationItem smallDiv />
        <InspirationItem bigPicture smallDiv />
        <InspirationItem />
        <InspirationItem smallDiv />
        </Container>
        <div className='flex justify-center items-center mt-10'><SeeMore /></div>
    </section>
  )
}

export default Inspiration