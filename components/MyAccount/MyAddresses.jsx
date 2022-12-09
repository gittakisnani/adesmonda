import React from 'react'
import MyAddress from './MyAddress'

const MyAddresses = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
        <h6 className='text-end text-primary text-xl leading-5 font-bold'><span className='text-3xl'>+</span> Add Address</h6>
        <MyAddress />
        <MyAddress />
        <MyAddress />
    </div>
  )
}

export default MyAddresses