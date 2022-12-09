import Image from 'next/image'
import React from 'react'
import Trash from '../../public/assets/images/Trash.svg'

const MyAddress = () => {
  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.01)'}} className='p-2 pr-4 flex flex-col gap-3 border border-[#D9D9D9] rounded-xl'>
        <div  className='flex justify-between items-center '>
            <div className='flex items-center gap-2'>
                <p className='bg-primary text-white text-[10px] p-0.5 px-1 rounded-md'>Main Address</p>
                <p className='tracking-[1px] font-bold'>Mas DW</p>
            </div>
            <button>
                <Image src={Trash} alt='Delete address' />
            </button>
        </div>
        <div className='h-px w-full bg-[#D9D9D9]'></div>
        <p className='leading-6 tracking-[1px] text-[#121212]'>Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan</p>
        <p className='text-xs'>087897877411</p>
        <u className='text-primary font-bold leading-6'>Change Address</u>
    </div>
  )
}

export default MyAddress