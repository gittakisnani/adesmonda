import React from 'react'
import Container from './Container'

const Newsletter = () => {
  return (
    <section className='bg-[rgba(0, 68, 65, 0.02)]'>
    <Container className='!p-10'>
        <h3
        className='text-center mb-2'
        style={{
            fontFamily: 'Marcellus'
        }}
        >Join Our <br /> Newsletter</h3>
        <p className='text-secondary tracking-[1px] text-center'>Receive exclusive deals, discounts and many offers.</p>
        <form className='flex flex-col items-center'>
            <input 
                type="text" 
                className='p-2 text-[#C4C4C4] outline-none border-b border-secondary w-full'
                placeholder='Enter your Email'
            />
            <button className='text-[#FCF6F6] bg-primary mt-6 uppercase text-sm mx-auto tracking-[2px] rounded-lg w-[175px] h-[37px]'>Subscribe Now</button>
        </form>
    </Container>
    </section>
  )
}

export default Newsletter