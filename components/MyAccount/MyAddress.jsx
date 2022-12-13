import Image from 'next/image'
import React from 'react'
import Trash from '../../public/assets/images/Trash.svg'

const MyAddress = ({ main = false, title, desc, number, onChange}) => {

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.01)'}} className='p-2 pr-4 flex flex-col gap-3 border border-[#D9D9D9] rounded-xl'>
        <div  className='flex justify-between items-center '>
            <div className='flex items-center gap-2'>
               {main && <p className='bg-primary text-white text-[10px] p-0.5 px-1 rounded-md'>Main Address</p>}
                <p className='tracking-[1px] font-bold'>{title}</p>
            </div>
            <button>
                <Image src={Trash} alt='Delete address' />
            </button>
        </div>
        <div className='h-px w-full bg-[#D9D9D9]'></div>
        <p className='leading-6 tracking-[1px] text-[#121212]'>{desc}</p>
        <p className='text-xs'>{number}</p>
        <u onClick={() => onChange(title, desc, number, main)} className='text-primary font-bold leading-6 cursor-pointer'>Change Address</u>
    </div>
  )
}

export default MyAddress