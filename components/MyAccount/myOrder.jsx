import React from 'react'

const MyOrder = () => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='border rounded-xl border-[#E2DCD1] p-4 flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
            <p className='font-bold text-sx leading-5 text-primary'>Inv-004</p>
            <p className='text-[#F8FAFA] text-[10px] p-1 px-2 bg-primary rounded-md'>Awaiting Payments</p>
        </div>
        <p className='text-xs text-[#9CB6B5]'>20 October 2022</p>
        <div className='h-px w-full bg-[#9CB6B5] mt-2'></div>
        <div className='flex justify-between items-center px-20'>
            <div className='flex flex-col gap-4'>
                <p className='text-[#121212] font-bold tracking-[1px]'>Total Product</p>
                <p className='text-[#121212] text-sm tracking-[2px]'>3 Products</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[#121212] font-bold tracking-[1px]'>Total Shopping</p>
                <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-[#121212] text-sm tracking-[2px] leading-6 font-bold'>Rp 300.000.000</p>
            </div>
        </div>
    </div>
  )
}

export default MyOrder