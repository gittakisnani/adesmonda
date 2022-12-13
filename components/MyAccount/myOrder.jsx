import React, { useState } from 'react'
import CustomOrder from './CustomOrder'
import { BiTimeFive } from 'react-icons/bi'
import { FaShippingFast } from 'react-icons/fa'
import { BsCheck2 } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
const MyOrder = ({ title = 'Inv-004', date = '20 October 2022', number = 3, total='300.000.000', status = 'Awaiting'}) => {
    const [modal, setModal] = useState(false);
    const handleModal = () => setModal(!modal);


    const bgCondition = `${status === 'Awaiting' ? 'bg-primary' : status === 'Delivery' ? 'bg-gray-400' : status === 'Completed' ? 'bg-secondary' : 'bg-textRed'}`
  return (
    <>
    {modal && <CustomOrder handleModal={handleModal} />}
    <div onClick={handleModal} style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='border rounded-xl border-[#E2DCD1] p-4 flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
            <p className='font-bold text-sx leading-5 text-primary capitalize'>{title}</p>
            <div className={`text-[#F8FAFA] text-[10px] p-1 px-2 rounded-md flex gap-2 items-center ${bgCondition}`}>
                <span className='text-lg'>{status === 'Awaiting' ? <BiTimeFive /> : status === 'Delivery' ? <FaShippingFast /> : status === 'Completed' ? <BsCheck2 /> : <MdClose />}</span>
                <p>{status === 'Awaiting' ? 'Awaiting Payment' : status === 'Delivery' ? 'On Delivery' : status === 'Completed' ? 'Complete' : 'Expired'}</p>
            </div>
        </div>
        <p className='text-xs text-[#9CB6B5]'>{date}</p>
        <div className='h-px w-full bg-[#9CB6B5] mt-2'></div>
        <div className='flex justify-between items-center px-20'>
            <div className='flex flex-col gap-4'>
                <p className='text-[#121212] font-bold tracking-[1px]'>Total Product</p>
                <p className='text-[#121212] text-sm tracking-[2px]'>{number} Products</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[#121212] font-bold tracking-[1px]'>Total Shopping</p>
                <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-[#121212] text-sm tracking-[2px] leading-6 font-bold'>Rp {total}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyOrder