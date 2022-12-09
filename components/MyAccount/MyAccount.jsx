import Image from 'next/image'
import React from 'react'
import ProfilePicture from '../../public/assets/images/ProfilePicture.svg'

const MyAccount = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                        <Image src={ProfilePicture} alt='User name picture' className='w-full h-full' />
                    </div>
                    <p className='underline text-sm leading-5 font-bold'>Change Photo</p>
                </div>
                <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='p-2 w-full flex-1 flex gap-2 flex-col'>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Name</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter your name' type="text" />
                        </label>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Name</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter your name' type="text" />
                        </label>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Name</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter your name' type="text" />
                        </label>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Name</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter your name' type="text" />
                        </label>
                </div>
                <div className='flex justify-center gap-4 items-center'>
                    <button className='bg-[#7F0B03] text-white font-bold p-3 px-16 rounded-[16px]'>Cancel</button>
                    <button className='bg-primary text-white font-bold p-3 px-16 rounded-[16px]'>Save</button>
                </div>
    </div> 
  )
}

export default MyAccount