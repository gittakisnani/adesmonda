import Image from 'next/image'
import React, { useRef } from 'react'
import ProfilePicture from '../../public/assets/images/ProfilePicture.svg'

const MyAccount = () => {
    const picRef = useRef()
  return (
    <div className='flex flex-col gap-8 w-full'>
                <div className='flex flex-col items-center gap-2 relative'>
                    <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                        <Image src={ProfilePicture} alt='User name picture' className='w-full h-full' />
                    </div>
                    <p onClick={() => picRef.current.click()} className='underline cursor-pointer text-sm leading-5 font-bold'>Change Photo</p>
                    <input ref={picRef} type="file" className='absolute opacity-0' />
                </div>
                <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='p-2 w-full flex-1 flex gap-2 flex-col'>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Name</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter your Phone Number' type="tel" />
                        </label>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Phone number</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter your name' type="text" />
                        </label>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Gender</p>
                            <select className='bg-white border p-2 rounded-lg w-full outline-none text-sm font-bold text-gray-400' value=''>
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <label htmlFor="name" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Date Of Birth</p>
                            <input className='outline-none bg-white border p-2 rounded-lg w-full' placeholder='Enter Your Birthday' type="date" />
                        </label>
                        <label htmlFor="email" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Email</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter Your Email' type="email" />
                        </label>
                        <label htmlFor="pwd" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Password</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Enter Your Password' type="password" />
                        </label>
                        <label htmlFor="pwdConfirmation" className='flex flex-col gap-1'>
                            <p className='text-sm font-bold tracking-[1.5px]'>Re-enter Password*</p>
                            <input className='bg-white border p-2 rounded-lg w-full' placeholder='Re-enter your password' type="password" />
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